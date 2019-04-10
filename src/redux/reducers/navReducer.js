import { RootNavigator } from "../../../navigation";
import {
  ICON_REPLACE_ROUTE,
  ICON_PUSH_NEW_ROUTE,
  ICON_POP_ROUTE,
  ICON_POP_TO_ROUTE
} from "../actions/constants";
import { NavigationActions, StackActions } from "react-navigation";
import ip from "icepick";

const firstAction = RootNavigator.router.getActionForPathAndParams("Splash");
const initialRoute = RootNavigator.router.getStateForAction(firstAction);

export default function(state = initialRoute, action) {
  console.log('nav reducer called');
  console.log(action);
  let nextState;
  switch (action.type) {
    case ICON_REPLACE_ROUTE: {
      const { params, key } = action;
      state = RootNavigator.router.getStateForAction(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: action.route })]
        }),
        state
      );
      return state;
    }

    case ICON_PUSH_NEW_ROUTE: {
      state = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.route,
          params: action.params
        }),
        state
      );
      return state;
    }

    case ICON_POP_ROUTE: {
      const key = state.routes[state.index].key;
      const modes =
        state.routes[state.index].params &&
        state.routes[state.index].params.modes;
      if (modes && modes.length) {
        modes.pop();
        state = RootNavigator.router.getStateForAction(
          NavigationActions.setParams({
            params: {
              modes,
              currentMode: modes[modes.length - 1]
            },
            key
          }),
          state
        );
      } else {
        state = RootNavigator.router.getStateForAction(
          NavigationActions.back(),
          state
        );
      }
      return state;
    }

    case ICON_POP_TO_ROUTE: {
      let reached = false;
      while (!reached) {
        const { parentRouteName, currentRouteName } = getCurrentAndParentRoute(
          state
        );

        if (
          parentRouteName === action.route ||
          currentRouteName === action.route
        ) {
          reached = true;
        } else {
          state = RootNavigator.router.getStateForAction(
            NavigationActions.back(),
            state
          );
        }
      }
      return state;
    }

    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

function getCurrentAndParentRoute(navState) {
  let currentRoute = null;
  let parentRoute = null;
  if (navState && navState.routes) {
    let atEnd = false;
    let state = ip.freeze(navState);
    while (!atEnd) {
      if (state.routes && state.routes.length > state.index) {
        const route = state.routes[state.index];
        if (route.routes && route.hasOwnProperty("index")) {
          state = ip.freeze(route);
          parentRoute = route;
        } else {
          currentRoute = route;
          atEnd = true;
        }
      }
    }
  }
  return {
    parentRouteName:
      parentRoute && parentRoute.routeName ? parentRoute.routeName : "",
    currentRouteName:
      currentRoute && currentRoute.routeName ? currentRoute.routeName : ""
  };
}
