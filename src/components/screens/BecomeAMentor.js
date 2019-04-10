import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet  , WebView , Text , Alert} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import RoundedButton from "../reusableComponents/Button/RoundedButton";
import { CheckBox , Button, Icon} from 'native-base';


class BecomeAMentor extends PureComponent{
    constructor(props){
        super(props)
        this.state= { 
            checked:false
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                 <Navbar navBarTitle="Become a Mentor" />
                 <WebView style = {{flex:1}} source={{uri: 'https://google.com'}}/>
                 <View style = {{height:120}}>
                    <View style = {{flexDirection:'row', height:20 , margin:15 , backgroundColor:'white'}}>
                        <CheckBox checked={this.state.checked} style = {{width:20,height:20 , borderRadius:4 , borderColor:colors.lightGreenColor}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:3}]}> Block display in popular mentoring list </Text>
                    </View>
                    <RoundedButton iconName = '' buttonText = 'Become a Mentor' backgroundColor = {colors.greenColor} onPress = {this.onBecomeMentorAction} style = {{marginBottom:0 , marginTop:0,  width:250 , alignSelf:'center' }}/>
                 </View>
            </View>
        )
    }

    onBecomeMentorAction = () => {
        Alert.alert(
            "",
            "Thank you for taking time to become a Mentor,It means a lot to us to have people such as yourself to give back and be a possitive influence in someone's life",
            [
              {
                text: "Close",
                onPress: () => {}
              }
            ],
            { cancelable: false }
          );
    }
}

function mapStateToProps(state) {
    return {};
  }
  
  // export default connect(
  //   mapStateToProps,
  //   {
  //     ...NavActions,
  //   }
  // )(BecomeAMentor);
  export default BecomeAMentor;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(250,250,250,1)',
    },
    textStyle:{
        fontSize:16,
        color:colors.blackColor,
    }
})