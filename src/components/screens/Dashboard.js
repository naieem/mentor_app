import React, {PureComponent} from "react";
import {colors} from '../../themes'
import { View , StyleSheet , Text , ScrollView , FlatList , Image , TextInput ,TouchableOpacity} from "react-native";
// import { connect } from "react-redux";
// import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import CollapsableCard from "../reusableComponents/Card/CollapsableCard";
import IconText from "../reusableComponents/IconWithText/IconText";
import CalendarPicker from 'react-native-calendar-picker';
import { Dropdown } from 'react-native-material-dropdown';

const CommentCardView = (props) => {
  return(
    <View style = {{height:120}}>
      <View style = {{flexDirection:'row' , height:80 , borderBottomColor:colors.lighterGrayColor}}>
        <Image source = {{uri:props.profileImage}} style = {{width:70,height:70,borderRadius:35 , marginLeft:15}}/>
          <Text style={{fontWeight:'400'  , fontSize:18,  maxWidth:250 , margin:10}}>
              {props.content}
          </Text>
      </View>
      <View style = {{flexDirection:'row' , justifyContent:'space-evenly' , marginLeft:'5%'}}>
        <TextIconLeft iconImage = {loveIcon} text = {33}/>
        <TextIconLeft iconImage = {commentIcon} text = {43}/>
        <TextIconLeft iconImage = {deleteIcon} iconStyle = {{tintColor:'red'}}/>
      </View>
    </View>
  )
}

const TextIconLeft = props => {
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => props.onPress()}>
      <View style={{flexDirection:'row' , width:60 , height:40 , alignItems:'center'}}>
        <Image source={props.iconImage} style={[{width:25,height:25 }, props.iconStyle]}/>
          <Text style={{fontSize:16,fontWeight:'500' , paddingLeft:5}}>{props.text}</Text>
        </View>
    </TouchableOpacity>
  );
};


const AvatarUrl = 'https://ubisoft-avatars.akamaized.net/e882b63c-8659-4370-99f2-f145b4bc13ad/default_256_256.png'
const commentsData = [
  {
    profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
    content:'Madelana Scott and John Dea are now connected'
  },
  {
    profileImage:'https://ubisoft-avatars.akamaized.net/e882b63c-8659-4370-99f2-f145b4bc13ad/default_256_256.png',
    content:'Madelana Scott added a event College Alumni'
  },
  {
    profileImage:'http://api.ning.com/files/MVK7fFWlQ9KNSbyVwsfScsgOyyuLk-FRdvob5j7w-eITJSB*CUxFwjxCvtOMAfOrywERQeD9L4jQea8JHbPWXNT0E*jx*NCH/528397783.jpeg?xgip=0%3A104%3A1586%3A1586%3B%3B&width=184&height=184&crop=1%3A1',
    content:'Abhinandan Sahgal found his mentor'
  }
]

const dropdownData = [{value:'Everything'}, {value:'My'}]

var menuIcon = require("../../images/hamburger.png");
var backIcon = require("../../images/back_white.png");
var eventsIcon = require("../../images/icon_events.png");
var contributionIcon = require("../../images/icon_contributions.png");
var memberIcon = require("../../images/icon_member.png");
var groupIcon = require("../../images/icon_groups.png");
var addIcon = require("../../images/add_btn.png");
var sendIcon = require("../../images/icon_send.png");
var loveIcon = require("../../images/icon_love.png");
var deleteIcon = require("../../images/icon_delete.png");
var commentIcon = require("../../images/icon_comment.png");

const archiveDataArr = ["July 2018","April 2018","February 2017","May 2018", "June 2017"]
class Dashboard extends PureComponent{

  constructor(props){
    super(props)
    this.state = {
      communityCardCollapsed:false,
      archiveCardCollapsed:false,
      calendarCardCollapsed:false,
      allActivitiesCardCollapsed:false
    }
  }
    render(){
        return(
        <View style = {styles.container}>
          <ScrollView contentContainerStyle={{height:1800}}>
            <Navbar navBarTitle="Dashboard" backIconImage ={menuIcon} onBackCallback = {this.onMenuPressed}/>
            {this.renderCommunityStatSection()}
            {this.renderArchivesSection()}
            {this.renderCalendarSection()}
            {this.renderAllActivitiesSection()}

          </ScrollView>
        </View>
        )
    }

    renderCommunityStatSection = () => {
      return(
        <CollapsableCard isCollapsed = {this.state.communityCardCollapsed} headerText = 'Community Stats' cardClicked = {() => this.setState({communityCardCollapsed:!this.state.communityCardCollapsed})}>
          <View style = {{backgroundColor:'white',  height : 300 }}>
            <View style = {{ height : 150 , flexDirection:'row', justifyContent:'center' , marginLeft:'15%'}}>
              <IconText iconImage = {memberIcon} text = 'MEMBERS 22'/>
              <IconText iconImage = {groupIcon} text = 'GROUPS     2'/>
            </View>

            <View style = {{ height : 150 , flexDirection:'row', justifyContent:'center' , marginLeft:'15%'}}>
              <IconText iconImage = {eventsIcon} text = 'EVENTS 2'/>
              <IconText iconImage = {contributionIcon} text = 'CONTRIBUTIONS 9'/>
            </View>

          </View>
        </CollapsableCard>
      )
    }

    renderArchivesSection = () => {
      const rows = Math.ceil(archiveDataArr/2)
      return (
      <CollapsableCard isCollapsed = {this.state.archiveCardCollapsed} headerText = 'Archives' cardClicked = {() => this.setState({archiveCardCollapsed:!this.state.archiveCardCollapsed})}>
      <View style = {{backgroundColor:'white',  height : 200 , flexDirection:'row' , flexWrap:'wrap' , marginTop:'5%',width:400 }}>
      {archiveDataArr.map((item,index) =>{
          return(
          <View style = {{ height:50 }} key={index}>
            <Text style = {{color:colors.lightGreenColor ,  fontSize:20 , marginLeft:30 , width:150, textAlign:'left'}}> {item} </Text>
          </View>
          )      

      })}
      </View>
      </CollapsableCard>
      )
    }

    renderCalendarSection = () => {
      return(
      <CollapsableCard isCollapsed = {this.state.calendarCardCollapsed} headerText = 'Calendar' cardClicked = {() => this.setState({calendarCardCollapsed:!this.state.calendarCardCollapsed})}>
        <View style = {{backgroundColor:'white',  height : 350 }}>
        {/* <Calendar markingType={'multi-dot'} onDayPress = {this.onDayPress}></Calendar> */}
        <CalendarPicker
          onDateChange={this.onDateChange}
          allowRangeSelection
        />
        </View>
      </CollapsableCard>
      )
    }

    renderAllActivitiesSection = () => {
      return(
      <CollapsableCard isCollapsed = {this.state.allActivitiesCardCollapsed} headerText = 'All Activities' cardClicked = {() => this.setState({allActivitiesCardCollapsed:!this.state.allActivitiesCardCollapsed})}>
        <View style = {{backgroundColor:'white',  height : 600 }}>
          <FlatList
            automaticallyAdjustContentInsets={false}
            style={{backgroundColor: colors.white }}
            keyExtractor={(item, index) => index}
            data={commentsData}
            renderItem={this.renderItem}
            ListHeaderComponent={()=> this.renderActivitiesHeader()}
            ref = {(ref)=> {this.commentsListRef = ref}}
            ItemSeparatorComponent = {() => <View style = {{height:5,backgroundColor:colors.lighterGrayColor , }}/>}
          />
        </View>
      </CollapsableCard>
      )
    }

    renderItem = (item) => {
      return(
        <View style = {{shadowOffset:{  width: 4,  height: 4 },shadowColor: colors.lightGrayColor,shadowOpacity: 1.0,}}>
            <CommentCardView content = {item.item.content} profileImage = {item.item.profileImage}/>
        </View>
      )
    }

    renderActivitiesHeader = () => {
      return(
        <View style = {styles.header}>
          <View style = {{flexDirection:'row' , height:100 , borderBottomColor:colors.lighterGrayColor , borderBottomWidth:0.6}}>
            <Image source = {{uri:AvatarUrl}} style = {{width:70,height:70,borderRadius:35 , margin:15}}/>
            <TextInput
              style={styles.shareTextInput} placeholder = {"What's new, James Doe?"}>
              </TextInput>
          </View>

          <View style = {{flexDirection:'row' , alignItems:'center'}}>
            <Image source = {addIcon} style = {{width:30,height:30 , marginTop:10 , marginLeft:15}}/>
            <Text style={{fontWeight:'400'  , fontSize:18,  marginTop:10 , marginLeft:10}}>
              Share an article,photo,video or idea 
            </Text>
            <TouchableOpacity onPress = {this.onSendPress} style = {{marginTop:5}}>
                <Image source = {sendIcon} style = {{width:40,height:40,marginLeft:10}}/>
            </TouchableOpacity>
          </View>

          <View style = {{height:150, flexDirection:'row' , justifyContent:'center'}}>
            <Text style={{fontWeight:'400'  , fontSize:18,  marginTop:40}}>
                Show:  
            </Text>
            <Dropdown
              value = {dropdownData[0].value}
              data={dropdownData}
              containerStyle = {{width:150 , paddingLeft:10 }}
            />
          </View>
        </View>
      )
    }

/**************************************** Methods & Functions *********************************** */    
    onMenuPressed = () => {
      console.log('menu clicked');
      // console.log(this.props.navigation);
      this.props.navigation.toggleDrawer();
    }

    onDateChange(data , one){
      console.log('data got is ',JSON.stringify(data));
      console.log('one got is ',JSON.stringify(one));

    }
}


function mapStateToProps(state) {
    return {};
  }
  
  // export default connect(
  //   mapStateToProps,
  //   {
  //     ...NavActions,
  //     // loginRequest
  //   }
  // )(Dashboard);
  export default Dashboard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.lighterGrayColor
    },
    header:{
      height:250,
      backgroundColor:colors.whiteColor
    },
    shareTextInput:{
      height: 100,
      width:260,
      color: colors.blackColor,
      fontSize: 18,
      fontWeight: "300",
      marginLeft: "2%",
      alignItems: "flex-start",
    }
  });
  