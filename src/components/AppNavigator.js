// import * as Screens from "./screens";
import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
// import {
//     reduxifyNavigator,
//     createReactNavigationReduxMiddleware
// } from "react-navigation-redux-helpers";
// import HomeScreenNavigator from "./screens/HomeScreenNavigator";
import Login from "./screens/Login";

// const navMiddleware = createReactNavigationReduxMiddleware(
//     "root",
//     state => state.nav
// );

const RootNav = createStackNavigator({
    Login: {
        screen: Login,
        // navigationOptions: {
        //     gesturesEnabled: false
        // }
    },
    // Splash: { screen: Screens.SplashScreen },
    // Dashboard: { screen: Screens.Dashboard },
    // HomeScreenNavigator: { screen: HomeScreenNavigator }

});

// const AppWithNavigationState = reduxifyNavigator(RootNavigator, "root");

// const mapStateToProps = state => ({
//     state: state.navReducer
// });

// const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);
// const RootNavigator = createAppContainer(RootNav);
export default createAppContainer(RootNav);