import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import { colors } from "../../../themes";
import { Container, Header, Content, Item, Input , Icon } from 'native-base';
import IconTextInput from '../TextInput/IconTextinput'

type Props = {
  placeholder?: String,
  borderColor?: String,
  value?: String,
  fontSize?: Number,
  textColor?: String,
  isPasswordField?: Boolean
};

export default class SearchableInput extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: this.props.isPasswordField
    };
  }

  render() {
    const { containerStyle, placeholder, value, isPasswordField , iconName , iconColor, containerHeight  } = this.props;
    return (
      <View style={[styles.container , containerStyle , {height:containerHeight , backgroundColor:'transparent' , flexDirection:'row'},]}>
            <IconTextInput placeholder = {placeholder || "Username OR Email Address" }iconName = '' iconColor = {colors.lightGreenColor} containerWidth = {250}/>
            <TouchableOpacity style = {{justifyContent:'center' , marginTop:10}}>
              <Icon name = 'search' tintColor= { colors.lightGreenColor}/>
              </TouchableOpacity>
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
    height: 20,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 3,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 0
  },

  textInputStyle: {
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 20,
    fontFamily: "GoogleSans-Regular",
    padding: 20
  }
});
