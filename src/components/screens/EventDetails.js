import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet   , Text  , FlatList , Image , TextInput , ScrollView , TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import RoundedButton from "../reusableComponents/Button/RoundedButton";
import { CheckBox , Button, Icon, Card} from 'native-base';
import MapView , { PROVIDER_GOOGLE,Marker,Callout }from 'react-native-maps';
import idx from "idx";

var shareIcon = require("../../images/icon_share.png");
var msgIcon = require("../../images/icon_message.png");
var pinIcon = require("../../images/icon_pinned.png");
var clockIcon = require("../../images/icon_clock.png");
var memberIcon = require("../../images/icon_member.png");

const searchResultData = [
    {
      name: 'Mr Bean',
      location:'Brampton, ON ,Canada',
      profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
      occupation:'Mentor',
      interests:'Football,Driving,Swimming,Singing',
      lat: 37.78825,
      lon : -122.4324
    },
    {
        name: 'Mr Abhi',
        location:'Bangalore, KA ,India',
        profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
        occupation:'Mentor',
        interests:'Football,Driving,Swimming,Singing',
        lat: 37.78835,
        lon : -122.4124
      },
    {
        name: 'Steve Jobs',
        location:'Brampton, ON ,Canada',
        profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
        occupation:'Founder & CEO'  ,
        interests:'Football,Driving,Swimming,Singing',
        lat: 37.71835,
        lon : -122.4124

    },
    {
        name: 'Steve Jobs',
        location:'Brampton, ON ,Canada',
        profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
        occupation:'Founder & CEO'  ,
        interests:'Football,Driving,Swimming,Singing',
        lat: 37.88835,
        lon : -122.4123

    },
   
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
        {/* <Image source = {{uri:props.wallImage}} style = {{flex:1 , maxWidth:400, maxHeight:200, marginLeft:30,marginRight:30 , backgroundColor:'transparent'}} resizeMode = 'center'/> */}
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


class EventDetails extends PureComponent {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return(
            <ScrollView contentContainerStyle={{height:1200}}>
                <View style = {styles.container}>
                    <Navbar navBarTitle="College Alumni" />
                    {this.renderMap()}
                    {this.renderMiddleSection()}
                    {this.renderBottomSection()}
                    {this.renderBottomButtonSection()}  

                    {/* {this.renderTopSection()}
                    {this.renderBottomSection()}
                    {this.renderBottomButtonSection()} */}
                    
                </View>
            </ScrollView>
        )
    }

    renderMap = () => {
        return(
            <View style = {{height:250}}>
                <MapView
                // provider={PROVIDER_GOOGLE}
                style = {{flex:1}}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            >
            { searchResultData.map(obj => {
                    return(
                    <Marker
                    coordinate={{ latitude: obj.lat,
                        longitude: obj.lon}} >
                        <MapView.Callout onPress = {()=>this.onViewProfileAction(obj)}>
                            {this.renderCalloutView(obj)}
                        </MapView.Callout>
                        </Marker>
                    )
                    
                })
            }
        </MapView>
       </View>
        )
    }

    renderCalloutView = (item) => {
        return(
            <TouchableOpacity style = {{width:350,height:200,backgroundColor:'transparent'}} onPress = {()=>this.onViewProfileAction()}>
                <View style = {{flexDirection:'row' , height:60 , borderBottomColor:colors.lighterGrayColor , borderBottomWidth:0.6}}>
                        <Image source = {{uri:item.profileImage}} style = {{width:60,height:60,borderRadius:30 , margin:10}}/>

                        <View style = {{width:250  , justifyContent:'center'}}>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGreenColor , marginLeft:5 , fontWeight:'400' , fontSize:20 , alignSelf:'flex-start'}]} >
                                {item.name}
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:5 , fontWeight:'300' , fontSize:14,alignSelf:'flex-start' , marginTop:5}]} >
                                Active 15 Minutes ago
                            </Text>
                        </View>

                    </View>

                    <View style = {{flexDirection:'row' , height:20 , marginTop:10 }}>
                            <Text style={[styles.greenTextStyle , {color:colors.blackColor , marginLeft:5 , fontWeight:'400' , fontSize:15 , alignSelf:'flex-start'}]} >
                                Location:
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:20 , fontWeight:'400' , fontSize:15,alignSelf:'flex-start'}]} >
                                {item.location}
                            </Text>
                    </View>

                    <View style = {{flexDirection:'row' , height:20 }}>
                            <Text style={[styles.greenTextStyle , {color:colors.blackColor , marginLeft:5 , fontWeight:'400' , fontSize:15 , alignSelf:'flex-start'}]} >
                                Interests:
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:20 , fontWeight:'400' , fontSize:15,alignSelf:'flex-start'}]} >
                                {item.interests}
                            </Text>
                    </View>

                    <View style = {{flexDirection:'row' , height:20}}>
                            <Text style={[styles.greenTextStyle , {color:colors.blackColor , marginLeft:5 , fontWeight:'400' , fontSize:15 , alignSelf:'flex-start'}]} >
                                Occupation:
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:20 , fontWeight:'400' , fontSize:15,alignSelf:'flex-start'}]} >
                                {item.occupation}
                            </Text>
                    </View>
                    <View style = {{flexDirection:'row' , height:100 , justifyContent:'space-evenly' , marginTop:10}}>
                        <RoundedButton iconName = '' buttonText = 'View Profile' backgroundColor = {colors.greenColor} onPress = {this.onViewProfileAction} style = {{ width:175 }} textStyle = {{fontSize:18}}/>
                    </View>
            </TouchableOpacity>
        )
    }
    
    renderMiddleSection = () =>{
        return(
            <Card style = {{margin:10 ,paddingBottom:20}}>
                  <View style = {{flexDirection:'row' , margin:5}}>
                    {/* <Image source={memberIcon} style={{width:25,height:25 , tintColor:'gray' }}/> */}
                    <Icon name = 'md-calendar' style = {{marginRight:10}}/>
                    <Text style={{fontSize:18,fontWeight:'400' , padding:5 , }}>Date(s) - 30/06/2018 - 02/07/2018</Text>
                </View>
                <Text style={{fontSize:18,fontWeight:'400' , padding:5 , marginLeft:30, }}>12:00 am</Text>

                <View style = {{flexDirection:'row' , margin:5}}>
                    <Icon name = 'ios-navigate' style = {{marginRight:10}}/>
                    <Text style={{fontSize:18,fontWeight:'400' , padding:5 , paddingTop:10,  color:colors.lightGreenColor}}>Canada</Text>
                </View>

                <Text style={{fontSize:22,fontWeight:'400' , padding:5 , paddingTop:10,  color:colors.lightGreenColor}}>Categories</Text>
                <Text style={{fontSize:18,fontWeight:'400' , padding:5 , paddingTop:10,  color:colors.lightGreenColor}}>Rock</Text>

                <Text style={{fontSize:16,fontWeight:'400' , padding:5 ,  color:colors.lighterGrayColor}}>Lorem Ipsum is simple dummy text for printing and typesetting industry.Lorem Ipsum is simple dummy text for printing and typesetting industry.</Text>

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
                    <Image source = {{uri:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG'}} style = {{width:50,height:50,borderRadius:25 , marginLeft:15}}/>
                    <Text style={{fontWeight:'400', fontSize:20,  maxWidth:250 , margin:10 , color:colors.lightGreenColor}}>
                    Abhi
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
// )(EventDetails);
export default EventDetails;
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