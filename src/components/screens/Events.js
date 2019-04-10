import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet   , Text  , FlatList , Image , SectionList , TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import SearchableInput from "../reusableComponents/SearchInput/SearchableInput";
import RoundedButton from "../reusableComponents/Button/RoundedButton";
import IconTextInput from "../reusableComponents/TextInput/IconTextinput";
import { CheckBox , Button, Icon, Card} from 'native-base';
import RadioGroup from 'react-native-custom-radio-group';
import RadioGroupVertical from 'react-native-radio-buttons-group';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native';
import Camera from "../reusableComponents/Camera/Camera";




const dropdownData = [{value:'Future Events'}, {value:'Past Events'}]
const dropdownDataSecond = [{value:'20 Rows'}, {value:'30 Rows'}]
const dropdownDataThird = [{value:'Needs Attention'}, {value:'Going Good'}]



const searchResultData = [
    {
      location:'Brampton, ON ,Canada',
      address:'St. Paul street , Birmingham',
      state: 'Ontario',
      country: 'Canada'
    },
    {
        location:'Delhi, India',
        address:'XUZ street , Delhi',
        state: 'Delhi',
        country: 'India'
      },
      {
        location:'Kolkata, India',
        address:'ABS street , Kolkata',
        state: 'West Bengal',
        country: 'India'
      },
  ]

  const reqResultData = [
    {title: 'Today', data: [{name:'Abhi', lastActive:'6hours ago', profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',},
    {name:'Pinto', lastActive:'1hour ago',profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG'}]},
    {title: 'Yesterday', data: [{name:'Ram', lastActive:'2days ago',profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',}]},
  ]

const radioGroupList = [{
    label: 'All Events',
    value: 1
  }, {
    label: 'My Profile',
    value: 2
  }, {
    label: 'My Events',
    value: 3
  },
  {
    label: 'My Locations',
    value: 4
  },
  {
    label: 'My Event Bookings',
    value: 5
  }];

  

class Events extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            selectedTab:1,
            myGroupSelectedTab:1,
            createGroupSelectedTab:1,
    }
}
    
    render(){
        return(
            <View style = {styles.container}>
                <Navbar navBarTitle="Events" />
                <ScrollView style = {{flexGrow:0.01, backgroundColor:'white'}} contentContainerStyle = {{width:800 , height:50}} bounces = {false}>
                    <RadioGroup radioGroupList={radioGroupList} onChange = {this.onRadioChange} 
                    initialValue = {this.state.selectedTab}
                    buttonContainerStyle = {styles.radioContainerStyle}
                    buttonTextStyle = {styles.radioTextStyle}
                    buttonTextActiveStyle = {{color:colors.whiteColor}}
                    buttonTextInactiveStyle = {{color:colors.lightGreenColor}}
                    buttonContainerActiveStyle = {{backgroundColor:colors.lightGreenColor}}
                    buttonContainerInactiveStyle = {{backgroundColor:colors.whiteColor}}
                    />
                   
                </ScrollView >
                {this.state.selectedTab === 1  && this.renderAllEventsSection()}
                {this.state.selectedTab === 2  && this.renderMyProfileSection()}
                {this.state.selectedTab === 3  && this.renderMyEventsSection()}
                {this.state.selectedTab === 4  && this.renderMyLocationSection()}
                {this.state.selectedTab === 5  && this.renderMyEventBookingsSection()}


            </View>
        )
    }

    renderAllEventsSection = () => {
        return(
            <View style = {{flex:1}}>
                <View style = {{flexDirection:'row'}}>
                    <SearchableInput placeholder = 'Search Event' containerStyle = {{marginLeft:0,marginRight:0 , width:330}}/>
                    <Button style = {{width:50,height:50,borderRadius:25 , top:10, left:5, backgroundColor:colors.lightGreenColor}} onPress = {() => this.props.navigation.navigate('AddNewEvent')}>
                        <Icon name = 'md-add' style = {{marginRight:10}}/>
                    </Button>
                </View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('EventDetails')}>
                <Card style = {{height:150 , padding:20 ,marginTop:20}} >
                    <Text style ={[styles.textStyle,{marginTop:15}]}> Event Name </Text>
                    <Text style ={[styles.textStyle,{marginTop:5 , color:colors.greenColor}]}> Science Festival</Text>
                    <Text style ={[styles.textStyle,{marginTop:25 , color:colors.lightGrayColor , fontSize:18}]}> 29/06/18 - 31/06/18 All Day</Text>
                </Card>
                </TouchableOpacity>
                <Card style = {{height:200 , padding:20 ,marginTop:20}}>
                    <Text style ={[styles.textStyle,{marginTop:15}]}> Event Name </Text>
                    <Text style ={[styles.textStyle,{marginTop:5 , color:colors.greenColor}]}> College Alumini Meet</Text>
                    <Text style ={[styles.textStyle,{marginTop:25 , color:colors.lightGrayColor , fontSize:18}]}> 29/06/18 - 31/06/18 All Day</Text>
                    <Text style ={[styles.textStyle,{marginTop:10 , color:colors.lightGrayColor , fontSize:18}]}> Canada, Toronto, Canada</Text>

                </Card>
             </View>
        )
    }

    renderMyProfileSection = () => {
        return(
            <View style = {{flex:1}}>
                <View style = {{flexDirection:'row'}}>
                    <SearchableInput placeholder = 'Search Event' containerStyle = {{marginLeft:0,marginRight:0 , width:330}}/>
                    <Button style = {{width:50,height:50,borderRadius:25 , top:10, left:5, backgroundColor:colors.lightGreenColor}}>
                        <Icon name = 'md-add' style = {{marginRight:10}}/>
                    </Button>
                </View>

                <Text style ={[styles.textStyle,{marginTop:15 , fontSize:16}]}> Events </Text>
                <Text style ={[styles.textStyle,{marginTop:5 , fontSize:14 , color:colors.lightGrayColor}]}> You are currently viewing your public page , this is what other users will see </Text>


                <Card style = {{height:200 , padding:20 ,marginTop:20}}>
                    <Text style ={[styles.textStyle,{marginTop:15}]}> My Events </Text>
                    <Text style ={[styles.textStyle,{marginTop:5 , color:colors.lighterGrayColor}]}> No Events</Text>

                    <Text style ={[styles.textStyle,{marginTop:25  , fontSize:16}]}> Events I am attending</Text>
                    <Text style ={[styles.textStyle,{marginTop:5 , color:colors.lighterGrayColor}]}> Not Attending any events yet.</Text>

                </Card>
             </View>
        )
    }

    renderMyEventBookingsSection = () => {
        return(
            <View style = {{flex:1}}>
                <View style = {{flexDirection:'row'}}>
                    <SearchableInput placeholder = 'Search Event' containerStyle = {{marginLeft:0,marginRight:0 , width:330}}/>
                    <Button style = {{width:50,height:50,borderRadius:25 , top:10, left:5, backgroundColor:colors.lightGreenColor}}>
                        <Icon name = 'md-add' style = {{marginRight:10}}/>
                    </Button>
                </View>

                <Text style ={[styles.textStyle,{marginTop:15 , fontSize:16}]}>My Event Bookings </Text>

                <Card style = {{height:265 , margin:10, marginTop:20 }}>
                    <View style = {{flexDirection:'row' ,alignItems:'center' }}>
                        <Text style ={[styles.textStyle]}> Recent Bookings </Text>
                        <Button style = {{ marginLeft:125, backgroundColor:colors.lightGreenColor}}>
                            <Icon name = 'md-share' style = {{ alignSelf:'flex-start' }} />
                        </Button>

                        <Button style = {{ marginLeft:5, backgroundColor:colors.lightGreenColor}}>
                            <Icon name = 'md-settings' style = {{ alignSelf:'flex-start' }} />
                        </Button>
                    </View>

                    <View style = {{flexDirection:'row' , justifyContent:'space-between'}}>
                    <Card style = {{width:175 , height:50}}>
                    <Dropdown
                        value = {dropdownData[0].value}
                        data={dropdownData}
                        containerStyle = {{width:150 , paddingLeft:10  }}
                        overlayStyle = {{marginLeft:'15%',marginTop:300}}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        textColor = {'gray'}
                        fontSize = {18}
                        labelFontSize  = {18}
                        itemTextStyle = {{ fontWeight:'400'}}
                        dropdownOffset = {36}
                        />
                        </Card>
                    <Card style = {{width:175 , height:50}}>
                    <Dropdown
                        value = {dropdownDataSecond[0].value}
                        data={dropdownDataSecond}
                        containerStyle = {{width:150 , paddingLeft:10  }}
                        overlayStyle = {{marginLeft:'15%', marginTop:300}}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        textColor = {'gray'}
                        fontSize = {18}
                        labelFontSize  = {18}
                        itemTextStyle = {{ fontWeight:'400'}}
                        dropdownOffset = {36}
                        />
                        </Card>
                    </View>
                    <Card style = {{width:175 , height:50}}>
                    <Dropdown
                        value = {dropdownDataThird[0].value}
                        data={dropdownDataThird}
                        containerStyle = {{width:150 , paddingLeft:10  }}
                        overlayStyle = {{marginLeft:'15%', marginTop:300}}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        textColor = {'gray'}
                        fontSize = {18}
                        labelFontSize  = {18}
                        itemTextStyle = {{ fontWeight:'400'}}
                        dropdownOffset = {36}
                        />
                        </Card>

                    <Text style ={[styles.textStyle,{marginTop:15 , fontSize:16}]}>Name Event Spaces Status Total </Text>
                    <View style = {{flexDirection:'row' ,justifyContent:'space-between' }}>
                        <Text style ={[styles.textStyle,{marginTop:10 , fontSize:16 , color:colors.lightGrayColor}]}>No Bookings</Text>
                        <Button style = {{width:100,height:35 , backgroundColor:colors.lightGreenColor , justifyContent:'center'}}>
                            <Text style ={[styles.textStyle,{marginTop:5 , fontSize:14 , color:colors.whiteColor , alignSelf:'center'}]}>Filter</Text>
                        </Button>
                    </View>

                </Card>


                <Card style = {{height:200  ,marginTop:20 , margin:10}}>
                    <View style = {{flexDirection:'row' ,alignItems:'center' , marginTop:20}}>
                        <Text style ={[styles.textStyle]}> Events With  Bookings Enabled</Text>
                    </View>
                   
                    <Card style = {{width:160 , height:50 , marginTop:10}}>
                    <Dropdown
                        value = {dropdownData[0].value}
                        data={dropdownData}
                        containerStyle = {{width:150 , paddingLeft:10  }}
                        overlayStyle = {{marginLeft:'15%', marginTop:300}}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        textColor = {'gray'}
                        fontSize = {18}
                        labelFontSize  = {18}
                        itemTextStyle = {{ fontWeight:'400'}}
                        dropdownOffset = {36}
                        />
                        </Card>

                    <View style = {{flexDirection:'row' ,justifyContent:'space-between' , marginTop:10 }}>
                        <Text style ={[styles.textStyle,{marginTop:10 , fontSize:16 , color:colors.lightGrayColor}]}>No Events</Text>
                        <Button style = {{width:100,height:35 , backgroundColor:colors.lightGreenColor , justifyContent:'center'}}>
                            <Text style ={[styles.textStyle,{marginTop:5 , fontSize:14 , color:colors.whiteColor , alignSelf:'center'}]}>Filter</Text>
                        </Button>
                    </View>

                </Card>
             </View>
        )
    }

    renderMyLocationSection = () => {
        return(
            <View style = {{flex:1}}>
                <Text style ={[styles.textStyle,{marginTop:15 , fontSize:20}]}> My Locations </Text>
                <Text style ={[styles.textStyle,{marginTop:15 , fontSize:16 , color:colors.lightGreenColor}]}> My Locations(0) | All Locations(6)</Text>


                <FlatList
                automaticallyAdjustContentInsets={false}
                contentContainerStyle={{ paddingBottom: 20}}
                style={{backgroundColor: colors.white , marginTop:30 }}
                keyExtractor={(item, index) => index}
                data={searchResultData}
                renderItem={this.renderItem}
                ListHeaderComponent={()=> this.renderHeader()}
                ref = {(ref)=> {this.commentsListRef = ref}}
                ItemSeparatorComponent = {() => <View style = {{height:30,backgroundColor:'transparent' , }}/>}/>
            </View>
        )
    }

    renderHeader = () => {
        return(
            <View style = {{height:20 , margin:10 , flexDirection:'row'}}>
                <Text style ={[styles.textStyle,{marginLeft:5 , marginRight:10,fontSize:18 , fontWeight:'500',width:80 ,}]} numberOfLines = {2}>Name</Text>
                <Text style ={[styles.textStyle,{marginLeft:10 ,marginRight:10,fontSize:18 , fontWeight:'500', width:80 ,}]}>Address</Text>
                <Text style ={[styles.textStyle,{marginLeft:10,marginRight:10,fontSize:18 , fontWeight:'500', width:80 ,}]} numberOfLines = {2}>State</Text>
                <Text style ={[styles.textStyle,{marginLeft:10,marginRight:10,fontSize:18 , fontWeight:'500', width:80 ,}]} numberOfLines = {2}>Country</Text>
            </View>
        )   
    }

    renderItem = (item) => {
        return(
            <View style = {{height:50 , marginLeft:10 , flexDirection:'row'}}>
                <Text style ={[styles.textStyle,{marginTop:5 , marginRight:10, color:colors.lightGreenColor , width:80 , fontSize:14}]} numberOfLines = {2}>{item.item.location}</Text>
                <Text style ={[styles.textStyle,{marginTop:5 , marginLeft:10,marginRight:10, color:colors.lightGrayColor , width:80 , fontSize:14}]} numberOfLines = {2}>{item.item.address}</Text>
                <Text style ={[styles.textStyle,{marginTop:5 , marginLeft:10, marginRight:10,color:colors.lightGrayColor , width:80 , fontSize:14}]} numberOfLines = {2}>{item.item.state}</Text>
                <Text style ={[styles.textStyle,{marginTop:5 ,marginLeft:10, marginRight:10,color:colors.lightGrayColor , width:80 , fontSize:14}]} numberOfLines = {2}>{item.item.country}</Text>
            </View>
        )

    }

    renderMyEventsSection = () => {
        return(
            <View style = {{flex:1}}>
                <View style = {{flexDirection:'row'}}>
                    <SearchableInput placeholder = 'Search Event' containerStyle = {{marginLeft:0,marginRight:0 , width:330}}/>
                    <Button style = {{width:50,height:50,borderRadius:25 , top:10, left:5, backgroundColor:colors.lightGreenColor}}>
                        <Icon name = 'md-add' style = {{marginRight:10}}/>
                    </Button>
                </View>

                <Text style ={[styles.textStyle,{marginTop:15 , fontSize:16}]}> Events I'm attending </Text>

                <Card style = {{height:200 , padding:20 ,marginTop:20}}>
                    <Text style ={[styles.textStyle,{marginTop:15}]}> Event </Text>
                    <Text style ={[styles.textStyle,{marginTop:5 , color:colors.lightGreenColor}]}>Remember Me</Text>
                    <Text style ={[styles.textStyle,{marginTop:15 , color:colors.lightGrayColor , fontSize:16}]}>31/03/2018</Text>

                    <View style = {{flexDirection:'row' , justifyContent:'space-between'}}>
                        <View>
                            <Text style ={[styles.textStyle,{marginTop:25  , fontSize:16}]}> Spaces</Text>
                            <Text style ={[styles.textStyle,{marginTop:5  , fontSize:16 , color:colors.lightGrayColor}]}> 05</Text>
                        </View>
                        <View>
                            <Text style ={[styles.textStyle,{marginTop:25 ,}]}> Status </Text>
                            <Text style ={[styles.textStyle,{marginTop:5  , fontSize:16 , color:colors.lightGrayColor}]}> Pending</Text>
                        </View>
                    </View>

                </Card>
             </View>
        )
    }
    

    onPress = data => this.setState({ data });

    onImageSelected = selectedImages => this.setState({ selectedImages });

    onRadioChange = (index) => {
        console.log('INdex is ',index);
        this.setState({selectedTab:index})
    }

    onMyGroupRadioChange = (index) =>{
        console.log('onMyGroupRadioChange is ',index);
        this.setState({myGroupSelectedTab:index})
    }
    onCreateGroupRadioChange = (index) => {
        console.log('onMyGroupRadioChange is ',index);
        this.setState({createGroupSelectedTab:index})
    }


    checkForReqTabSelected(){
        return (this.state.selectedTab === 3)
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
// )(Events);
export default Events;
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
    
    radioContainerStyleSecond:{
        width:30,
        height:30,
        borderRadius:20 ,
        borderColor:colors.lightGreenColor ,
        borderWidth:1,
        margin:10,
        flexDirection:'column'
    },

    radioTextStyle:{
        fontSize:14,
    },
    radioTextStyleSecond:{
        fontSize:11,
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