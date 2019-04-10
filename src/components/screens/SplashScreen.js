import React, { Component,PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions/navActions";


class SplashScreen extends Component {
  componentDidMount() {
    this.props.navigation.replace("Login");
    return
    if (typeof this.props.appStateReducer === "object") {
      // var data = JSON.parse(this.props.appStateReducer)
      if (this.props.appStateReducer.access_token) {
        this.props.navigation.replace("HomeScreenNavigator");
      } else {
        this.props.navigation.replace("Login");
      }
    } else {
      var data = JSON.parse(this.props.appStateReducer);
      if (data.access_token) {
        this.props.navigation.replace("HomeScreenNavigator");
      } else {
        this.props.navigation.replace("Login");
      }
    }
  }
  render() {
    return (
      <View style = {{backgroundColor : 'red' , flex:1}}/>
    );
  }
}
function mapStateToProps(state) {
  return {
    appStateReducer: state.appStateReducer
  };
}

export default SplashScreen;
