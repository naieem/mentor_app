import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet   , Text  , FlatList , Image , TextInput , ScrollView , TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import RoundedButton from "../reusableComponents/Button/RoundedButton";
import { CheckBox , Button, Icon, Card} from 'native-base';
import RadioGroup from 'react-native-custom-radio-group';
import { Dropdown } from 'react-native-material-dropdown';
import CollapsableCard from "../reusableComponents/Card/CollapsableCard";
import Camera from "../reusableComponents/Camera/Camera";
import idx from "idx";

var shareIcon = require("../../images/icon_share.png");
var msgIcon = require("../../images/icon_message.png");
var pinIcon = require("../../images/icon_pinned.png");
var clockIcon = require("../../images/icon_clock.png");
var memberIcon = require("../../images/icon_member.png");


const TextIconLeft = props => {
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => props.onPress()}>
        <View style={{flexDirection:'row' , maxWidth:80 , height:40 , alignItems:'center'}}>
          <Image source={props.iconImage} style={[{width:25,height:25 }, props.iconStyle]}/>
            <Text style={{fontSize:15,fontWeight:'300' , paddingLeft:5}}>{props.text}</Text>
          </View>
      </TouchableOpacity>
    );
  };

const CommentCardView = (props) => {
    return(
      <View style = {{height:350}}>
        <View style = {{flexDirection:'row' , backgroundColor:'white' }}>
            <Text style={{fontWeight:'300'  , fontSize:24,  width:250 , margin:10 , color:colors.greenColor}}>{props.heading}</Text>
            {/* <TouchableOpacity onPress = {props.onDeletePress}>
                <Image source = {deleteIcon} style = {{width:30, height:30 , marginRight:15 , tintColor:'red'}} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {props.onNextPress}>
                <Image source = {deleteIcon} style = {{width:30, height:30 , tintColor:'red'}}/>
            </TouchableOpacity> */}
        </View>

        <View style = {{flexDirection:'row' , height:20 }}>
            <Image source = {{uri:props.profileImage}} style = {{width:50,height:50,borderRadius:25 , marginLeft:15}}/>
            <Text style={{fontWeight:'200', fontSize:18,  maxWidth:250 , margin:10}}>
                {props.name}
            </Text>
        </View>
        <Image source = {{uri:props.wallImage}} style = {{flex:1 , maxWidth:400, maxHeight:200, marginLeft:30,marginRight:30 , backgroundColor:'transparent'}} resizeMode = 'center'/>
        <Text style={{fontWeight:'200', fontSize:16,  maxWidth:250 , marginLeft:10}}>
                {props.heading}
        </Text>

        <View style = {{flexDirection:'row' , justifyContent:'space-evenly' , marginTop:5}}>
            <TextIconLeft iconImage = {clockIcon} text = 'June 4,2018'/>
            <TextIconLeft iconImage = {msgIcon} text = '50'/>
            <TextIconLeft iconImage = {pinIcon} text = 'Podcasts'/>
            <TextIconLeft iconImage = {shareIcon} text = 'Share'/>
        </View>
      </View>
    )
  }


class ContributionDetails extends PureComponent {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return(
            <ScrollView contentContainerStyle={{height:1200}}>
                <View style = {styles.container}>
                    <Navbar navBarTitle="New Blog Post" />
                    {this.renderTopSection()}
                    {this.renderBottomSection()}
                    {this.renderBottomButtonSection()}
                    
                </View>
            </ScrollView>
        )
    }

    renderTopSection = () => {
        const item = idx(this.props,_ => _.navigation.state.params.selectedItem)
        return(
            <Card style = {{marginLeft:10, marginRight:10}}>
                <CommentCardView wallImage = {item.wallImage && item.wallImage} heading = {item.heading&&item.heading} profileImage = {item.heading && item.profileImage} name = {item.name&&item.name}/>
            </Card>
        )
    }

    renderBottomSection = () => {
        const item = idx(this.props,_ => _.navigation.state.params.selectedItem)

        return(
        <Card style = {{marginLeft:10, marginRight:10 , height:300}}>
            <View style = {{flex:1}}>
                <View style = {{flexDirection:'row' , margin:5}}>
                    <Image source={memberIcon} style={{width:25,height:25 , tintColor:'gray' }}/>
                    <Text style={{fontSize:24,fontWeight:'400' , padding:5 , }}>About the author</Text>
                </View>
                <View style = {{flexDirection:'row' , margin:5}}>
                    <Image source = {{uri:item.profileImage}} style = {{width:50,height:50,borderRadius:25 , marginLeft:15}}/>
                    <Text style={{fontWeight:'400', fontSize:20,  maxWidth:250 , margin:10 , color:colors.lightGreenColor}}>
                    {item.name}
                    </Text> 
                </View>

                <View style = {{margin:5}}>
                    <Text style={{fontSize:24,fontWeight:'400' , padding:5 , }}>Comment</Text>
                    <Card>
                    <TextInput
                        style={styles.shareTextInput} placeholder = {"What's new, James Doe?"}>
                    </TextInput>
                    </Card>
                </View>
            </View>
        </Card>
        )
    }

    renderBottomButtonSection = () => {
        return(        
            <View style = {{flex:1 , alignItems:'center'}}>
                <RoundedButton iconName = '' buttonText = 'Post Comment' backgroundColor = {colors.primaryBGColor} onPress = {this.onUploadPostAction} style = {{margin:15 ,marginTop:5 , width:200}}/>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {};
  }
  
// export default connect(
// mapStateToProps,
// {
//     ...NavActions,
// }
// )(ContributionDetails);
export default ContributionDetails;
const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: 'rgba(250,250,250,1)',
    },
    textStyle:{
        fontSize:16,
        color:colors.blackColor,
    },
    radioContainerStyle:{
        width:100,
        height:34,
        borderRadius:20 ,
        borderColor:colors.lightGreenColor ,
        borderWidth:1,
        margin:10,
    },
    radioTextStyle:{
        fontSize:14,
    },
    sectionHeader:{
        backgroundColor : colors.whiteColor,
        fontSize : 18,
        padding: 5,
        color: colors.lightGrayColor,
        fontWeight: '400'
     },
     greenTextStyle:{
        fontSize:18,
        color:colors.lightGreenColor,
        justifyContent:'center',
        alignSelf:'center'
    },
    titleTextInput:{
        color: colors.blackColor,
        fontSize: 18,
        height:40,
        fontWeight: "300",
      },
      shareTextInput:{
        height: 100,
        width:260,
        color: colors.blackColor,
        fontSize: 18,
        fontWeight: "300",
        marginLeft: "2%",
        alignItems: "flex-start",
        // borderWidth:1,
        // borderColor:
        // shadowOffset:{  width: 10,  height: 10 },
        // shadowColor: colors.lightGrayColor,
        // shadowOpacity: 1.0,

      }
})