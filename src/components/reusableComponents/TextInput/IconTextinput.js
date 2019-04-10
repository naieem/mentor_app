import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import { colors } from "../../../themes";
import { Container, Header, Content, Item, Input , Icon } from 'native-base';


export default class IconTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: this.props.isPasswordField
    };
  }

  render() {
    const { borderColor, placeholder, value, isPasswordField , iconName , iconColor, containerHeight , containerWidth , onChange} = this.props;
    return (
      <View style={[styles.container , {height:containerHeight, width:containerWidth}]}>
        {/* <TextInput
          ref="textField"
          autoCapitalize="none"
          style={[styles.textInputStyle, this.props]}
          placeholder={placeholder}
          value={value}
          onChangeText={this.props.onChangeText}
          placeholderTextColor={colors.whiteColor}
          secureTextEntry={this.state.showPassword}
        /> */}

          <Item rounded  style={{ backgroundColor: "#fff" }}>
            <Icon active name={iconName} style={{ color: iconColor, fontSize:32}}  />
            <Input placeholder={placeholder} placeholderTextColor = 'gray' style = {{fontSize:18 , fontWeight:'400' , color:'black'}} secureTextEntry = {isPasswordField} onChangeText = {onChange}/>
          </Item>
      </View>
    );
  }

  showPassword = () => {
    // this.refs.textField.secureTextEntry
    this.setState({ showPassword: !this.state.showPassword });
  };
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 3,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15
  },

  textInputStyle: {
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 20,
    padding: 20
  }
});
