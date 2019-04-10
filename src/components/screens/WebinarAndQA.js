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
var deleteIcon = require("../../images/icon_delete.png");

const commentsData = [
    {
      profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
      heading:'Hello Its me ',
      name:'Abhi',
      wallImage:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg',

    },
    {
      profileImage:'https://ubisoft-avatars.akamaized.net/e882b63c-8659-4370-99f2-f145b4bc13ad/default_256_256.png',
      heading:'Nice it is ',
      name:'Tom',
      wallImage:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg',
    },
    {
      profileImage:'http://api.ning.com/files/MVK7fFWlQ9KNSbyVwsfScsgOyyuLk-FRdvob5j7w-eITJSB*CUxFwjxCvtOMAfOrywERQeD9L4jQea8JHbPWXNT0E*jx*NCH/528397783.jpeg?xgip=0%3A104%3A1586%3A1586%3B%3B&width=184&height=184&crop=1%3A1',
      heading:'ABCxys',
      name:'Sam',
      wallImage:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg',
    }
  ]

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
      <View style = {{flex:1}}>
        <View style = {{flexDirection:'row' , backgroundColor:'white' }}>
            <Text style={{fontWeight:'300'  , fontSize:24,  width:300 , margin:10 , color:colors.greenColor}}>{props.heading}</Text>
            <TouchableOpacity onPress = {props.onNextPress}>
                <Image source = {deleteIcon} style = {{width:30, height:30 , marginRight:15 , tintColor:'red'}} />
            </TouchableOpacity>
        </View>

        <View style = {{flexDirection:'row' , flex:1 , backgroundColor:'transparent' }}>
            <Image source = {{uri:props.profileImage}} style = {{width:50,height:50,borderRadius:25 , marginLeft:15}}/>
            <Text style={{fontWeight:'400', fontSize:18,  maxWidth:250 , margin:10}}>
                {props.name}
            </Text>
        </View>
    
        <Text style={{fontWeight:'200', fontSize:16,  maxWidth:250 , marginLeft:10 ,  marginTop:5}}>
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



class WebinarAndQA extends PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style = {styles.container}>
                <Navbar navBarTitle="Webinar and Q&A" />
                {this.renderBottomList()}
            </View>
        )
    }

    renderBottomList = () => {
        return(
            <FlatList
            automaticallyAdjustContentInsets={false}
            style={{backgroundColor: colors.white , marginTop:10}}
            keyExtractor={(item, index) => index}
            data={commentsData}
            renderItem={this.renderItem}
            ref = {(ref)=> {this.commentsListRef = ref}}
            ItemSeparatorComponent = {() => <View style = {{height:5,backgroundColor:colors.whiteColor , }}/>}
            />
        )
      }

      renderItem = (item) => {
        return(
            <Card style= {{margin:10}}>
              <CommentCardView  heading = {item.item.heading} profileImage = {item.item.profileImage} 
                name = {item.item.name}
                onDeletePress = {this.onDeletePress}
                onNextPress = { () => this.onNextPress(item.index)}
              />
            </Card>
        )
      }

      onNextPress = (index) => {
        const item = commentsData[index]
        this.props.pushNewRoute('ContributionDetails', {selectedItem:item})
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
// )(WebinarAndQA);

export default WebinarAndQA;
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
      }
})