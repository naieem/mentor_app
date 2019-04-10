import React, {PureComponent} from "react";
import {colors} from '../../themes'
import { View , StyleSheet , Text , ScrollView , FlatList , Image , TextInput ,TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import CollapsableCard from "../reusableComponents/Card/CollapsableCard";
import IconText from "../reusableComponents/IconWithText/IconText";
import CalendarPicker from 'react-native-calendar-picker';
import { Dropdown } from 'react-native-material-dropdown';
import { Card , CheckBox} from "native-base";
import IconTextInput from "../reusableComponents/TextInput/IconTextinput";
import DatePicker from 'react-native-datepicker'
import Camera from "../reusableComponents/Camera/Camera";
import RoundedButton from "../reusableComponents/Button/RoundedButton";






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

const dropdownData = [{value:'Not a Group Event'}, {value:'Group Event'}]
const dropdownDataTimeZone = [{value:'UTC'}, {value:'IST'}, {value:'PST'}]
const dropdownDataCountryList = [{value:'India'}, {value:'USA'}, {value:'Australia'}]
const dropdownDataCategoryList = [{value:'Music'}, {value:'Sports'}, {value:'Work'}]


class Dashboard extends PureComponent{

  constructor(props){
    super(props)
    this.state = {
    }
  }
    render(){
        return(
        <View style = {styles.container}>
          <ScrollView contentContainerStyle={{height:2200}}>
            <Navbar navBarTitle="Add Event" />
            {this.renderEventNameCard()}
            {this.renderWhenCard()}
            {this.renderWhereCard()}
            {this.renderDetailCard()}
            <View style = {{backgroundColor:colors.whiteColor}}>
              <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>Category</Text>
              <Card style = {{width:175 , height:30 , marginTop: 10 , marginLeft:10}}>
                <Dropdown
                    value = {dropdownDataCategoryList[0].value}
                    data={dropdownDataCategoryList}
                    containerStyle = {{width:150 , paddingLeft:10  }}
                    overlayStyle = {{marginLeft:'15%',marginTop:350}}
                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    textColor = {'gray'}
                    fontSize = {18}
                    labelFontSize  = {18}
                    itemTextStyle = {{ fontWeight:'400'}}
                    dropdownOffset = {36}
                    />
              </Card>
              <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:20 , fontWeight:'500' , color:colors.lightGrayColor}]}>Event Image</Text>
              <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:16 , fontWeight:'500' , color:colors.lightGrayColor}]}>No Image uploaded for this event yet</Text>

              <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:12,fontSize:16 , fontWeight:'500' , color:colors.lightGrayColor}]}>Upload/Change Picture</Text>
              <Camera
                    containerStyle={{
                    height: 30,
                    marginLeft: "5%",
                    height: 50,
                    backgroundColor: "transparent",
                    width: 30
                    }}
                    imageWidth={30}
                    imageHeight={30}
                    showText={false}
                    onImageSelected={this.onImageSelected}
                />
              <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:20 , fontWeight:'500' , color:colors.lightGrayColor}]}>Booking/Registration</Text>

              <View style = {{flexDirection:'row', height:20 , margin:15 , marginBottom:5,marginTop:5, backgroundColor:'white'}}>
                  <CheckBox checked={this.state.checked} style = {{width:20,height:20 , borderRadius:4 , borderColor:colors.lighterGrayColor}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                  <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:3}]}>Enable Registration for this event </Text>
              </View>

              <View style = {{flexDirection:'row', margin:15 , marginTop:5,backgroundColor:'white'}}>
                  <CheckBox checked={this.state.checked} style = {{width:20,height:20 , borderRadius:4 , borderColor:colors.lighterGrayColor}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                  <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:3}]}>I consent to my submitted data being collected and stored as outlined by the site. </Text>
              </View>

              <RoundedButton iconName = '' buttonText = 'Submit Event' backgroundColor = {colors.greenColor} onPress = {this.onLoginAction}/>

            </View>
          </ScrollView>
        </View>
        )
    }

    renderEventNameCard = () => {
        return(
            <Card style = {{marginLeft:10,marginRight:10}}>
                <Text style ={[styles.textStyle,{marginTop:15 , fontSize:20 , fontWeight:'500' , color:colors.lightGrayColor}]}> Event Name </Text>
                <IconTextInput  />
                <Card style = {{width:175 , height:30 , marginTop: 15}}>
                    <Dropdown
                        value = {dropdownData[0].value}
                        data={dropdownData}
                        containerStyle = {{width:150 , paddingLeft:10  }}
                        overlayStyle = {{marginLeft:'15%',marginTop:150}}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        textColor = {'gray'}
                        fontSize = {18}
                        labelFontSize  = {18}
                        itemTextStyle = {{ fontWeight:'400'}}
                        dropdownOffset = {36}
                        />
                  </Card>
                <Text style ={[styles.textStyle,{marginTop:5 , fontSize:16 , fontWeight:'400' , color:colors.lightGrayColor , padding:5 , textAlign:'center'}]}> Select a group you admin to attach this event to it . Note that all other admins of that group can modify the booking. </Text>   
            </Card>
        )
    }

    renderWhenCard = () => {
        return(
            <Card style = {{marginLeft:10,marginRight:10}}>
                <Text style ={[styles.textStyle,{marginTop:15 , fontSize:20 , fontWeight:'500' , color:colors.lightGrayColor}]}> When </Text>
                <Text style ={[styles.textStyle,{marginTop:15 , fontSize:20 , fontWeight:'500' , color:colors.lightGrayColor}]}> From </Text>
                <DatePicker
                    style={{width: 200 , marginLeft:10}}
                    date={this.state.dateFrom}
                    mode="datetime"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={(date) => {this.setState({dateFrom: date})}}
                  />

              <Text style ={[styles.textStyle,{marginTop:5 , fontSize:20 , fontWeight:'500' , color:colors.lightGrayColor}]}> TO </Text>
                <DatePicker
                    style={{width: 200, marginLeft:10}}
                    date={this.state.dateTo}
                    mode="datetime"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={(date) => {this.setState({dateTo: date})}}
                  />

                  <View style = {{flexDirection:'row', height:20 , margin:15 , backgroundColor:'white'}}>
                        <CheckBox checked={this.state.checked} style = {{width:20,height:20 , borderRadius:4 , borderColor:colors.lighterGrayColor}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:3}]}>All day </Text>
                  </View>
                  <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:3}]}>Timezone </Text>
                  <Card style = {{width:175 , height:30 , marginTop: 15 , marginLeft:10}}>
                    <Dropdown
                        value = {dropdownDataTimeZone[0].value}
                        data={dropdownDataTimeZone}
                        containerStyle = {{width:150 , paddingLeft:10  }}
                        overlayStyle = {{marginLeft:'15%',marginTop:350}}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        textColor = {'gray'}
                        fontSize = {18}
                        labelFontSize  = {18}
                        itemTextStyle = {{ fontWeight:'400'}}
                        dropdownOffset = {36}
                        />
                  </Card>
                  <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:3, textAlign:'center' , color:colors.lightGrayColor}]}>This event spans everyday between the begining and end date,with start/end time applyiing to each day. </Text>

            </Card>
        )
    }

    renderWhereCard = () => {
      return(
          <Card style = {{marginLeft:10,marginRight:10 , paddingBottom:10}}>
               <Text style ={[styles.textStyle,{marginTop:15 , fontSize:20 , fontWeight:'500' , color:colors.lightGrayColor}]}> Where </Text>
               <View style = {{flexDirection:'row' , margin:15 , backgroundColor:'white'}}>
                        <CheckBox checked={this.state.checked} style = {{width:20,height:20 , borderRadius:4 , borderColor:colors.lighterGrayColor}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:3,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]} numberOfLines = {2}>This event doesnt have any physical location. </Text>
                </View>

                <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>Location </Text>
                <IconTextInput/>
                <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:3,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>Name </Text>
                <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:3,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>Create a location or start typing to search a previosuly created location </Text>

                <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:10,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>Address: </Text>
                <IconTextInput/>

                <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>City/Town: </Text>
                <IconTextInput/>

                <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>State/Country: </Text>
                <IconTextInput/>

                <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>Postcode: </Text>
                <IconTextInput/>

                <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>Region: </Text>
                <IconTextInput/>

                <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>Country: </Text>
                <Card style = {{width:175 , height:30 , marginTop: 10 , marginLeft:10}}>
                    <Dropdown
                        value = {dropdownDataCountryList[0].value}
                        data={dropdownDataCountryList}
                        containerStyle = {{width:150 , paddingLeft:10  }}
                        overlayStyle = {{marginLeft:'15%',marginTop:350}}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        textColor = {'gray'}
                        fontSize = {18}
                        labelFontSize  = {18}
                        itemTextStyle = {{ fontWeight:'400'}}
                        dropdownOffset = {36}
                        />
                  </Card>

          </Card>
      )
    }

    renderDetailCard = () =>{
      return(
        <Card style = {{ marginLeft: 10,marginRight: 10, marginTop:15 , paddingBottom:15 , paddingTop:10}}>
            <Text style = {[styles.textStyle , {marginLeft:15 , marginTop:7,fontSize:18 , fontWeight:'500' , color:colors.lightGrayColor}]}>Details</Text>
          <Card style = {{justifyContent:'flex-start',alignItems:'flex-start'}}>
          <TextInput
          style={[styles.titleTextInput , {height:100 , marginTop:20 , justifyContent:'flex-start'}]} placeholder = {"Enter Post"} numberOfLines = {10}>
          </TextInput>
          </Card>
        </Card>
      )
    }

    onImageSelected = selectedImages => this.setState({ selectedImages });

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
    },
    textStyle:{
        fontSize:16,
        color:colors.blackColor,
    },
  });
  