import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  NetInfo
} from "react-native";
import DropdownAlert from "react-native-dropdownalert";

export default class NetworkStatus extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };

    NetInfo.addEventListener("change", this.onConnectivityChange);
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.dropdown.alertWithType('warn', 'Warning', 'error.message');
    // }, 1000);
  }

  onConnectivityChange = status => {
    NetInfo.isConnected.fetch().then(isConnected => {
      console.log(
        "*********Network status " + (isConnected ? "online" : "offline")
      );
    });
    if (status && status === "none") {
      this.setState({ visible: true });
      this.dropdown &&
        this.dropdown.alertWithType(
          "warn",
          "Warning",
          "No Internet Connection"
        );
    } else {
      this.setState({ visible: false });
      // this.dropdown && this.dropdown.alertWithType('success', '', 'Connected to Internet');
    }
  };

  onActionCallBack = () => {
    this.setState({ visible: false });
    if (this.props.onActionCallBack) {
      this.props.onActionCallBack();
    }
  };

  render() {
    let statusView = (
      <View style={{ width: "100%", height: "100%", position: "absolute" }}>
        <DropdownAlert
          ref={ref => (this.dropdown = ref)}
          closeInterval={3000}
        />
      </View>
    );
    return this.state.visible ? statusView : null;
  }
}

NetworkStatus.defaultProps = {
  title: "No Internet Connection",
  actionText: "Dismiss"
};
