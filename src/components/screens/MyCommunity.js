import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet   , Text  , FlatList , Image , TextInput , ScrollView} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import RoundedButton from "../reusableComponents/Button/RoundedButton";
import { CheckBox , Button, Icon, Card} from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';

var calendarIcon = require("../../images/icon_calendar.png");

const eventsData = [
    {
      location: 'LONDON',
      date:'02 To 05',
      time:'Sat 10:45am to 11:45am'
    },
    {
        location: 'PARIS',
        date:'02 To 05',
        time:'Sat 11:45am to 02:45pm'
      },
  
      {
        location: 'DELHI',
        date:'02 To 05',
        time:'Sat 10:45am to 11:45am'
      },
      {
        location: 'DELHI',
        date:'02 To 05',
        time:'Sat 10:45am to 11:45am'
      },
   
  ]



class MyCommunity extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ScrollView contentContainerStyle={{height:1000}}>
            <View style = {styles.container}>
                <Navbar navBarTitle="My Community" />
                <TextInput editable = {false} style  = {styles.textStyle} numberOfLines = {0} multiline> My Community brings people toghter across the world who are working to become their greatest version.We arer at our best when we are learning,growing and evolving and that's what Mentor community does. You can join and event and create one of your own. For example,their might a local think tank where you can present your business ideas or your can create an event centered around real estate investing. The options are limitless! Find or create an event near your today!</TextInput>
                {this.renderCalendarSection()}
                {this.renderEventListSection()}
            </View>
             </ScrollView>
        )
    }

    renderCalendarSection = () => {
        return(
           <View style = {{backgroundColor:'white' , padding:10 ,height:400}}> 
            <Card style = {{flex:1}}>
                <CalendarPicker
                    onDateChange={this.onDateChange}
                    allowRangeSelection
                />
            </Card>
        </View>
        )
      }

      renderEventListSection = () => {
          return(
                <FlatList
                    automaticallyAdjustContentInsets={false}
                    contentContainerStyle={{ paddingBottom: 20}}
                    keyExtractor={(item, index) => index}
                    data={eventsData}
                    renderItem={this.renderItem}
                    ref = {(ref)=> {this.commentsListRef = ref}}
                    // ItemSeparatorComponent = {() => <View style = {{height:5,backgroundColor:colors.whiteColor , }}/>}
            />
          )
      }

      renderItem = (item ) => {
        return(
            <View style = {{height:120 , padding:5 }}>
                <Card style = {{flex:1}}>
                    <View style = {{flexDirection:'row' , justifyContent:'flex-start' , height:120, alignItems:'center' }}>
                            <View style = {{alignItems:'center', justifyContent:'center', height:30 , width:40 , borderBottomRightRadius:15,borderTopRightRadius:15 , backgroundColor:colors.lightBlueColor ,marginBottom:15}}>
                                <Text style = {{alignSelf:'center' , color:colors.whiteColor}}> {item.index + 1}</Text>
                            </View>
                        <View style = {{width:'40%', marginLeft:10}}>
                            <Text style={[styles.greenTextStyle , {color:colors.blackColor,  marginLeft:5 , fontWeight:'400' , fontSize:18 , alignSelf:'flex-start'}]} >
                                {item.item.location}
                            </Text>
                            <View style = {{flexDirection:'row' , alignItems:'center'}}>
                                <Image source = {calendarIcon} style = {{height:10,width:10 , tintColor:'blue'}}/>
                                <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:5 , fontWeight:'300' , fontSize:14,alignSelf:'flex-start' , marginTop:5}]} >
                                {item.item.date}
                                </Text>
                            </View>
                        </View>
                        <View style = {{alignItems:'center' }}>
                            <Text style={[styles.greenTextStyle , {color:'gray' , marginLeft:5 , fontWeight:'300' , fontSize:14}]}>{item.item.time}</Text>
                        </View>
                    </View>

                    
                </Card>
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
// )(MyCommunity);
export default MyCommunity;
const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: 'rgba(250,250,250,1)',
    },
    textStyle:{
        fontFamily: "JosefinSans-Light",
        fontSize:18,
        color:'gray',
        padding:13
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
    }
})