import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Hello details </Text>
      </View>
    );
  }
}

export default Details;
