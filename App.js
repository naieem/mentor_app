import React from 'react';
import { StyleSheet, Text, View, StatusBar, AsyncStorage } from 'react-native';
import { Provider } from "react-redux";
import configureStore from "./src/store";
import {RootNavigator,navMiddleware} from "./navigation";
import Login from './src/components/screens/Login';
import { APP_STATE_KEY } from "./src/constants";
console.disableYellowBox = true;
export default class App extends React.Component {
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
    console.log('State key is '+APP_STATE_KEY);
    if (appState) {
      store = configureStore(navMiddleware, {
        appStateReducer: JSON.parse(appState)
      });
    } else {
      store = configureStore(navMiddleware);
    }
    console.log("store value is ");
    console.log(store);
    console.log("appState is ");
    console.log(appState);
    this.setState({ store });
  }
  render() {
    return (
      <View style={{ flexGrow: 1 }}>
      {this.state.store ? (
        <Provider store={this.state.store}>
          <RootNavigator />
        </Provider>
      ) : (
        <View style={{ flex: 1 }} ></View>
      )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});