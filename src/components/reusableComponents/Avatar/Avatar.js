import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { colors } from "../../../themes";
import Proptypes from 'prop-types';


function Avatar(props){
    const {imageUrl} = props
    return(
        <View style = {{flex:1,alignItems:'center', justifyContent:'center'}}>
        <View style = {{width:140,height:140 , borderRadius:70, backgroundColor:'transparent',borderWidth:0.5 , borderColor:colors.whiteColor  , justifyContent:'center' , alignItems:'center'}}>
            <View style = {{width:120,height:120 , borderRadius:60, backgroundColor:'transparent',borderWidth:1 , borderColor:colors.whiteColor}}>
                <Image source = {{uri:imageUrl}} style = {{width:100 , height:100 , borderRadius:50 , borderWidth:2 , borderColor:colors.whiteColor , alignSelf:'center' , marginTop:8}}/>
                </View>
        </View>
      </View>
    )
}

Avatar.propTypes = {
    imageUrl:Proptypes.string
}
Avatar.defaultProps = {
    imageUrl:'https://i.imgur.com/1o1zEDM.png'
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
export default Avatar
