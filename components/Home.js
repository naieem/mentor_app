import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text onPress={()=>this.props.navigation.push('Dashboard')}> Hello home </Text>
      </View>
    );
  }
}

export default Home;
