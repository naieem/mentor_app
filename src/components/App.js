/**
 *
 * @format
 * @flow
 */

import React, { Component , PureComponent } from "react";
import { StyleSheet, View, StatusBar, AsyncStorage,Text } from "react-native";
import { Provider } from "react-redux";
import RootNavigator from "./AppNavigator";
import configureStore from "../store";
import { APP_STATE_KEY } from "../constants";
// import { RNSplashScreen } from "react-native-splash-screen";
import NetworkStatus from "../networkManagers/NetworkStatus";
import Login from './screens/Login';
// type Props = {};

console.disableYellowBox = true;
class NetworkNotifier extends React.Component {
  render() {
    // return <View style = {{backgroundColor:'red',width:100,height:100 , position:'absolute' , top:100 , zIndex:100}}/>
    return <NetworkStatus onActionCallBack={() => {}} />;
  }
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      store: null
    };
  }
  componentDidMount() {
    this.initStore();
  }

  async initStore() {
    var appState = {};
    appState = await AsyncStorage.getItem(APP_STATE_KEY);
    console.log(appState);
    if (appState) {
      store = configureStore(navMiddleware, {
        appStateReducer: JSON.parse(appState)
      });
    } else {
      store = configureStore(navMiddleware);
    }
    this.setState({ store });
  }

  render() {
    return (
      <View style={{ flexGrow: 1 }}>
        <StatusBar hidden={true} />
        {/* {this.state.store ? (
          <Provider store={this.state.store}>
            <RootNavigator />
          </Provider>
        ) : (
          <View style={{ flex: 1 }} >
          <Login></Login>
          </View>
        )} */}
         <RootNavigator />
        <NetworkNotifier />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  }
});

export default App;
