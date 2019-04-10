"use strict";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../themes";

const IconText = props => {
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => props.onPress(props.id)}
    >
      <View style={[styles.container, props.containerStyle]}>
        <View style = {styles.roundedView}>
        <Image source={props.iconImage} style={styles.imageStyle} />  
      </View>
      <View style={{alignItems:'flex-end' , paddingTop:10}}>
          <Text style={styles.textStyle} numberOfLines = {2}>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:120,
    height:100,
    alignItems:'center',
    justifyContent:'center'
  },
  roundedView:{
    shadowOffset:{  width: 3,  height: 3 },
    shadowColor: colors.lightGrayColor,
    shadowOpacity: 1.0,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "white",
    width:90,
    height:90,
    borderRadius:45,
  },
  imageStyle: {
    alignItems: "center",
    justifyContent:'center',
    width: 30,
    height: 30,
    marginTop: "3%",
    marginLeft: "2%"
  },
  textStyle: {
    alignSelf:'flex-end',
    height: 40,
    fontSize: 20,
    fontWeight: "500",
    color: 'gray',
    textAlign:'center'
  },
  textDescriptionStyle: {
    height: 80,
    fontSize: 15,
    fontWeight: "200",
    color: colors.primaryBGColor
  }
});

export default IconText;
