import {
  ICON_REPLACE_ROUTE,
  ICON_POP_ROUTE,
  ICON_PUSH_NEW_ROUTE,
  ICON_POP_TO_ROUTE
} from "./constants";

export function replaceCurrentRoute(route: String, params: String) {
  return {
    type: ICON_REPLACE_ROUTE,
    route,
    params
  };
}

export function pushNewRoute(route: String, params: any) {
  return {
    type: ICON_PUSH_NEW_ROUTE,
    route,
    params
  };
}

export function popRoute(route: String, params: any) {
  return {
    type: ICON_POP_ROUTE
  };
}

export function popToRoute(route: String) {
  return {
    type: ICON_POP_TO_ROUTE,
    route
  };
}
