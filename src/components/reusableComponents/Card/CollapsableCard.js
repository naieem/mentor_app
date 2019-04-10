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
import _noop from 'lodash';
import Collapsible from 'react-native-collapsible';



function CollapsableCard(props){
    const {cardClicked , headerText , isCollapsed , height } = props
    return(
        <View style = {[styles.cardStyle, {height:height}]}>
        <TouchableOpacity onPress={()=>cardClicked()}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{headerText}</Text>
                    <Image source = {require('../../../images/arrow_down.png')} style = {{ width:30,height:25 , tintColor:'gray' , position:'absolute' , left:'90%' ,marginTop:10}} />
                </View>
        </TouchableOpacity>
            <Collapsible collapsed={isCollapsed} align="center">
                {props.children}
            </Collapsible>
        </View>
    )
}

CollapsableCard.propTypes = {
    cardClicked:Proptypes.func,
    headerText:Proptypes.string,
    isCollapsed:Proptypes.bool

    
}
CollapsableCard.defaultProps = {
    cardClicked:_noop,
    headerText:'',
    isCollapsed:true
}

const styles = StyleSheet.create({
    cardStyle:{
        marginTop:10,
        margin:10,
        shadowOffset:{  width: 10,  height: 10 },
        shadowColor: colors.lightGrayColor,
        shadowOpacity: 1.0,
        borderRadius:4,
        backgroundColor:'white',

    },
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
    },
    headerText: {
        textAlign: 'left',
        fontSize: 22,
        fontWeight: '500',
        color:'gray',
      },
      header: {
        backgroundColor: 'transparent',
        paddingLeft:'5%',
        paddingTop:'3%',
        flexDirection:'row',
      },
})
export default CollapsableCard
