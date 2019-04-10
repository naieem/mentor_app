import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { colors } from "../../../themes";
import {  Icon,Button } from 'native-base';

function RoundedButton(props){
    const {iconName,buttonText,backgroundColor , textStyle , buttonStyle} = props
    return(
        <View style = {[{marginBottom:'6%'},props.style]}>
        <Button primary style = {[styles.buttonStyle,{backgroundColor:backgroundColor },buttonStyle ]} onPress = {props.onPress}> 
        {iconName != '' && <Icon name = {iconName} style = {{marginRight:10}}/>}
        <Text style = {[styles.buttonTextStyle ,  textStyle]} adjustsFontSizeToFit={true} allowFontScaling minimumFontScale={0.5}>{buttonText}</Text>
      </Button>
      </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius:20 ,
        width:'90%' ,
        height:50 ,
        alignSelf:'center' ,
        justifyContent:'center',
    },
    buttonTextStyle:{
        color:colors.whiteColor,
        fontSize: 20,
        paddingTop:7,
    }
})
export default RoundedButton
