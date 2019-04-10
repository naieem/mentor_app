import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from "./src/components/screens/SplashScreen";
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware
  } from "react-navigation-redux-helpers";
import HomeScreenNavigator from "./src/components/screens/HomeScreenNavigator";
const navMiddleware = createReactNavigationReduxMiddleware(
    state => state.nav
  );
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreenNavigator
  },
  Splash: { screen: SplashScreen }
});
const AppWithNavigationState = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.navReducer
});
const RootNavigator = createAppContainer(AppNavigator);
// const AppNav = connect(mapStateToProps)(AppWithNavigationState);
export { RootNavigator, navMiddleware,AppNavigator };