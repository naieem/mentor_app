import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet   , Text  , FlatList , Image , TextInput , ScrollView , TouchableOpacity , TouchableHighlight} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import idx from "idx";
import RoundedButton from "../reusableComponents/Button/RoundedButton";
import RadioGroup from 'react-native-custom-radio-group';
import Avatar from '../reusableComponents/Avatar/Avatar'
import { Card } from 'native-base';

var loveIcon = require("../../images/icon_love.png");
var deleteIcon = require("../../images/icon_delete.png");
var commentIcon = require("../../images/icon_comment.png");


const radioGroupList = [{
    label: 'Profile',
    value: 1
  }, {
    label: 'Activity',
    value: 2
  }];

  const personalDetails = [{
    label: 'First Name',
    value: 'John'
  }, {
    label: 'Last Name',
    value: 'Duo'
  }
  , {
    label: 'Location',
    value: 'Brampton, ON Canada'
  }
  , {
    label: 'Current Position',
    value: 'Hotelier'
  }
  , {
    label: 'Company',
    value: 'Microsoft'
  }, {
    label: 'About Me',
    value: 'I am working with this company since last 9 years.'
  }
];

const experienceDetails = [{
    label: 'Title',
    value: 'James'
  }, {
    label: 'Company',
    value: 'Xyz'
  }
  , {
    label: 'Month & Year',
    value: 'March 2016'
  }
  , {
    label: 'Location',
    value: 'ON , Canada'
  }
  , {
    label: 'Description',
    value: 'I am working with this company since last 9 years.'
  }];

  const educationDetails = [{
    label: 'School',
    value: 'Hamilton College'
  }, {
    label: 'Degree or Diploma',
    value: 'Bachelors of Management'
  }
  , {
    label: 'Month & Year',
    value: 'March 2016 to May 2018'
  }]

  const acomplishmentDetails = [{
    label: 'Certification',
    value: 'Certified Writer'
  }, {
    label: 'Course',
    value: 'Food Blogging'
  }
  , {
    label: 'Honors & Rewards',
    value: 'Best Writer'
  }
  , {
    label: 'Publications',
    value: 'Journal of ON'
  }
  , {
    label: 'Intrests',
    value: 'Animals,Gadegets'
  },
   {
    label: 'Other',
    value: 'NA'
  }
]


const activityData = [
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
  
class ProfileDetails extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            selectedTab:1
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <View style = {styles.container}>
              <Navbar navBarTitle="Profile" />
              <View style = {{marginLeft:50, marginRight:50}}>
                <RadioGroup radioGroupList={radioGroupList} onChange = {this.onRadioChange} 
                    initialValue = {this.state.selectedTab}
                    buttonContainerStyle = {styles.radioContainerStyle}
                    buttonTextStyle = {styles.radioTextStyle}
                    buttonTextActiveStyle = {{color:colors.whiteColor}}
                    buttonTextInactiveStyle = {{color:colors.lightGreenColor}}
                    buttonContainerActiveStyle = {{backgroundColor:colors.lightGreenColor}}
                    buttonContainerInactiveStyle = {{backgroundColor:colors.whiteColor}}
                    />
                    </View>

                    {this.state.selectedTab === 1 &&  this.renderProfileTab()}
                    {this.state.selectedTab === 2 &&  this.renderActivityTab()}
            </View>
        )
    }

    onRadioChange = (index) => {
        this.setState({selectedTab:index})
    }

    renderProfileTab = () => {
        return(
            <ScrollView contentContainerStyle={{height:1200}}>
                <View style = {{flex:1}}>
                    <Image source = {{uri:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg'}} style = {{ margin:10 , height:200}}/>
                    <View style = {{position:'absolute'  , left:'30%', top:'2%' , zIndex:1}}>
                        <Avatar/>
                    </View>

                    <View style = {{flexDirection:'row' , height:100 , justifyContent:'space-evenly' , marginTop:10}}>
                        <RoundedButton iconName = '' buttonText = 'Cancel Mentorship' backgroundColor = {colors.redColor} onPress = {this.onLoginAction} style = {{ width:185 , height:30 }} textStyle = {{fontSize:18 }}/>
                        <RoundedButton iconName = '' buttonText = 'Message' backgroundColor = {colors.greenColor} onPress = {this.onLoginAction} style = {{ width:175 , height:30}} textStyle = {{fontSize:18}}/>
                    </View>

                        <Card style = {{minHeight:200 , maxHeight:350}}>
                            <Text style = {[styles.textStyle , {fontSize:22, fontWeight:'400' , height:20 , marginBottom:15}]}> Personal </Text>

                            {personalDetails.map(obj => {
                                return(
                                    <View style = {{flexDirection:'row' , margin:5 }}>
                                        <Text style = {[styles.textStyle , {fontSize:19, fontWeight:'400'}]}> {obj.label} </Text>
                                        <Text style = {[styles.textStyle , {fontSize:19, fontWeight:'300' , marginLeft:15}]}> {obj.value} </Text>
                                </View>
                                )
                            })}
                        </Card>


                        <Card style = {{minHeight:200 , maxHeight:350}}>
                            <Text style = {[styles.textStyle , {fontSize:22, fontWeight:'400' , height:20 , marginBottom:15}]}> Experience </Text>

                            {experienceDetails.map(obj => {
                                return(
                                    <View style = {{flexDirection:'row' , margin:5 }}>
                                        <Text style = {[styles.textStyle , {fontSize:19, fontWeight:'400'}]}> {obj.label} </Text>
                                        <Text style = {[styles.textStyle , {fontSize:19, fontWeight:'300' , marginLeft:15}]}> {obj.value} </Text>
                                    </View>
                                )
                            })}
                        </Card>

                        <Card style = {{minHeight:200 , maxHeight:350}}>
                            <Text style = {[styles.textStyle , {fontSize:22, fontWeight:'400' , height:20 , marginBottom:15}]}> Education </Text>

                            {educationDetails.map(obj => {
                                return(
                                    <View style = {{flexDirection:'row' , margin:5 }}>
                                        <Text style = {[styles.textStyle , {fontSize:19, fontWeight:'400'}]}> {obj.label} </Text>
                                        <Text style = {[styles.textStyle , {fontSize:19, fontWeight:'300' , marginLeft:15}]}> {obj.value} </Text>
                                    </View>
                                )
                            })}
                        </Card>

                        <Card style = {{minHeight:200 , maxHeight:350}}>
                            <Text style = {[styles.textStyle , {fontSize:22, fontWeight:'400' , height:20 , marginBottom:15}]}> Accomplishments </Text>

                            {acomplishmentDetails.map(obj => {
                                return(
                                    <View style = {{flexDirection:'row' , margin:5 }}>
                                        <Text style = {[styles.textStyle , {fontSize:19, fontWeight:'400'}]}> {obj.label} </Text>
                                        <Text style = {[styles.textStyle , {fontSize:19, fontWeight:'300' , marginLeft:15}]}> {obj.value} </Text>
                                    </View>
                                )
                            })}
                        </Card>
                </View>
            </ScrollView>
        )
    }

    renderActivityTab = () => {
        return(
            <FlatList
              automaticallyAdjustContentInsets={false}
              style={{backgroundColor: colors.white }}
              keyExtractor={(item, index) => index}
              data={activityData}
              renderItem={this.renderItem}
            //   ItemSeparatorComponent = {() => <View style = {{height:5,backgroundColor:colors.lighterGrayColor , }}/>}
            />
        )
      }

      renderItem = (item) => {
        return(
        //   <View style = {{shadowOffset:{  width: 4,  height: 4 },shadowColor: colors.lightGrayColor,shadowOpacity: 1.0,}}>
            <Card style = {{marginLeft:10 , marginRight:10}}>
              <CommentCardView content = {item.item.content} profileImage = {item.item.profileImage}/>
            </Card>
        //   </View>
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
// )(ProfileDetails);
export default ProfileDetails;
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
        width:120,
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