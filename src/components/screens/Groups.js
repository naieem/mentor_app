import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet   , Text  , FlatList , Image , SectionList , TextInput} from "react-native";
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



const dropdownData = [{value:'Everything'}, {value:'Last Active'}]

const searchResultData = [
    {
      name: 'Mr Bean',
      location:'Brampton, ON ,Canada',
      profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
      occupation:'Mentor',
      wallImage:'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
      content:'This is for a test',
      groupType:'Private/30 members'
    },
    {
        name: 'Mr Abhi',
        location:'Bangalore, KA ,India',
        profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
        wallImage:'https://www.reduceimages.com/img/image-after.jpg',
        content:'This is for my personal use',
        groupType:'Public/201 members'

      },
    {
        name: 'Steve Jobs',
        location:'Brampton, ON ,Canada',
        profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
        occupation:'Founder & CEO'  ,
        wallImage:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg',
        content:'Mentor conference',
        groupType:'Public/201 members'

    },
    {
        name: 'Steve Jobs',
        location:'Brampton, ON ,Canada',
        profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
        occupation:'Founder & CEO'  ,
        wallImage:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg',
        content:'Test data',
        groupType:'Public/201 members'

    },
   
  ]

  const reqResultData = [
    {title: 'Today', data: [{name:'Abhi', lastActive:'6hours ago', profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',},
    {name:'Pinto', lastActive:'1hour ago',profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG'}]},
    {title: 'Yesterday', data: [{name:'Ram', lastActive:'2days ago',profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',}]},
  ]

const radioGroupList = [{
    label: 'All Groups',
    value: 1
  }, {
    label: 'My Groups',
    value: 2
  }, {
    label: 'Create Groups',
    value: 3
  }];

  const radioMyGroupList = [{
    label: 'Groups',
    value: 1
  }, {
    label: 'Invitations',
    value: 2
  }, {
    label: 'Events',
    value: 3
  }];

  const radioCreateGroupList = [{
    label: '1 Details',
    value: 1
  }, {
    label: '2 Settings',
    value: 2
  }, {
    label: '3 Photo',
    value: 3
  },
  {
    label: '4 Media',
    value: 4
  },
  {
    label: '5 Cover Image',
    value: 5
  },
  {
    label: '6 Invits',
    value: 6
  },
];

class Groups extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            selectedTab:1,
            myGroupSelectedTab:1,
            createGroupSelectedTab:1,
            data: [                
                {
                    label: 'THIS IS A PUBLIC GROUP \n\n Any site memmber can join this group \n\n This group will be listed in group directory and in search results. \n\n Group content and activity will be visible to any site member',
                    color: 'green',
                    value:1,
                },
                {
                    label: 'THIS IS A PRIVATE GROUP \n\n Only members who requested mentorship and are accepted can join the group \n\n This group will be listed in group directory and in search results. \n\n Group content and activity will be visible to any site member',
                    color: 'green',
                    value:1,
                },
                {
                    label: 'THIS IS A HIDDEN GROUP \n\n Only members who requested mentorship and are accepted can join the group \n\n This group will be listed in group directory and in search results. \n\n Group content and activity will be visible to any site member',
                    color: 'green',
                    value:1,
                    fontSize:29
                },

            ],

            groupInvitationData: [                
                {
                    label: 'ALL GROUP MEMBERS',
                    color: 'green',
                    value:1,
                },
                {
                    label: 'GROUP ADMINS AND MODS ONLY',
                    color: 'green',
                    value:2,
                },
                {
                    label: 'GROUP ADMINS ONLY',
                    color: 'green',
                    value:3,
                },

            ],

            groupInviteSectionData: [                
                {
                    label: 'ANK MAK',
                    color: 'green',
                    value:1,
                },
                {
                    label: 'GEEKSQUADS',
                    color: 'green',
                    value:2,
                },
                {
                    label: 'GLOBAL',
                    color: 'green',
                    value:3,
                },

            ],
        }
    }
    
    render(){
        let result = this.checkForReqTabSelected()
        return(
            <View style = {styles.container}>
                <Navbar navBarTitle="Groups" />
                    <RadioGroup radioGroupList={radioGroupList} onChange = {this.onRadioChange} 
                    initialValue = {this.state.selectedTab}
                    buttonContainerStyle = {styles.radioContainerStyle}
                    buttonTextStyle = {styles.radioTextStyle}
                    buttonTextActiveStyle = {{color:colors.whiteColor}}
                    buttonTextInactiveStyle = {{color:colors.lightGreenColor}}
                    buttonContainerActiveStyle = {{backgroundColor:colors.lightGreenColor}}
                    buttonContainerInactiveStyle = {{backgroundColor:colors.whiteColor}}
                    />
                   

                {this.state.selectedTab === 1  && this.renderAllGroupSection()}
                {this.state.selectedTab === 2  && this.renderMyGroupSection()}
                {this.state.selectedTab === 3  && this.renderCreateGroupSection()}



            </View>
        )
    }

    renderRequestSection = () => {
        return(
            <View style = {{flex:1}}>
                <SectionList
                sections = {reqResultData}
                 contentContainerStyle={{ paddingBottom: 20}}
                style={{backgroundColor: colors.white }}
                keyExtractor={(item, index) => index}
                data={reqResultData}
                renderItem={this.renderRequestItem}
                ref = {(ref)=> {this.commentsListRef = ref}}
                ItemSeparatorComponent = {() => <View style = {{height:5,backgroundColor:'transparent' , }}/>}
                renderSectionHeader={ (section) => <Text style={styles.sectionHeader}>{section.section.title} </Text>} 
                />

             </View>
        )
    }

    renderAllGroupSection = () => {
        return(
            <View style = {{flex:1}}>
             <View style = {{justifyContent:'center',alignItems:'center'}}>         
                        <Card>
                        <Dropdown
                            value = {dropdownData[0].value}
                            data={dropdownData}
                            containerStyle = {{width:150 , paddingLeft:10  }}
                            overlayStyle = {{marginLeft:'15%', marginTop:'20%'}}
                            inputContainerStyle={{ borderBottomColor: 'transparent' }}
                            textColor = {'gray'}
                            fontSize = {18}
                            labelFontSize  = {18}
                            itemTextStyle = {{ fontWeight:'400'}}
                            dropdownOffset = {0}
                        />
                        </Card>
                    </View>
                    <View >
                        <SearchableInput />
                    </View>
                <FlatList
                automaticallyAdjustContentInsets={false}
                 contentContainerStyle={{ paddingBottom: 20}}
                style={{backgroundColor: colors.white }}
                keyExtractor={(item, index) => index}
                data={searchResultData}
                renderItem={this.renderItem}
                // ListHeaderComponent={()=> this.renderResultHeader()}
                ref = {(ref)=> {this.commentsListRef = ref}}
                ItemSeparatorComponent = {() => <View style = {{height:30,backgroundColor:'transparent' , }}/>}/>
             </View>
        )
    }


    renderItem = (item) => {
        return(
            <View style = {{height:410 , margin:10}}>
                <Card style = {{flex:1 }}>
                    <Image source = {{uri:item.item.wallImage}} style = {{height:'50%'}}/>

                    <View style = {{flexDirection:'row' , height:60 , borderBottomColor:colors.lighterGrayColor , borderBottomWidth:0.6}}>
                        <Image source = {{uri:item.item.profileImage}} style = {{width:60,height:60,borderRadius:30 , margin:10}}/>

                        <View style = {{width:250  , justifyContent:'center'}}>
                            <Text style={[styles.greenTextStyle , {color:colors.blackColor , marginLeft:5 , fontWeight:'500' , fontSize:20 , alignSelf:'flex-start'}]} >
                                {item.item.name}
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:5 , fontWeight:'300' , fontSize:14,alignSelf:'flex-start' , marginTop:5}]} >
                                Active 15 Minutes ago
                            </Text>
                        </View>

                    </View>

                    <View style = {{flexDirection:'row' , height:20 , marginTop:10 }}>
                            <Text style={[styles.greenTextStyle , {color:colors.blackColor , marginLeft:5 , fontWeight:'400' , fontSize:15 , alignSelf:'flex-start'}]} >
                                {item.item.content}
                            </Text>
                    </View>
                    <Text style={[styles.greenTextStyle , { fontWeight:'400' , fontSize:15 , alignSelf:'center'}]} >
                                {item.item.groupType}
                    </Text>
                    <View style = {{flexDirection:'row' , height:100 , justifyContent:'center' , marginTop:15}}>
                    <RoundedButton iconName = '' buttonText = 'Request Membership' backgroundColor = {colors.greenColor} onPress = {this.onLoginAction} style = {{ width:205 , height:30}} textStyle = {{fontSize:18}}/>
                    </View>
                </Card>
            </View>
        )
    }

    renderRequestItem = (item) => {
        return(
            <View style = {{height:120 , borderRadius:10}}>
                <Card style = {{flex:1, borderRadius:10 }}>
                    <View style = {{flexDirection:'row' , justifyContent:'flex-start' , height:120, alignItems:'center' }}>

                    <View style = {{height:110 , backgroundColor:'transparent' , width:5 , borderBottomLeftRadius:5 , borderTopLeftRadius:5 , flexDirection:'row' , marginTop:-5}}/>

                        <Image source = {{uri:item.item.profileImage}} style = {{width:60,height:60,borderRadius:30 , marginLeft:5}}/>

                        <View style = {{width:'50%' }}>
                            <Text style={[styles.greenTextStyle , { marginLeft:5 , fontWeight:'400' , fontSize:20 , alignSelf:'flex-start'}]} >
                                {item.item.name}
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:5 , fontWeight:'300' , fontSize:14,alignSelf:'flex-start' , marginTop:5}]} >
                                Active 15 Minutes ago
                            </Text>
                        </View>
                        <View style = {{alignItems:'center' }}>
                        <RoundedButton iconName = '' buttonText = 'Accept' backgroundColor = {colors.lightGreenColor} onPress = {this.onLoginAction} style = {{ width:85 , marginBottom:15}} textStyle = {{fontSize:16 }} buttonStyle = {{height:30 , borderRadius:10 }}/>
                        <RoundedButton iconName = '' buttonText = 'Reject' backgroundColor = {colors.redColor} onPress = {this.onLoginAction} style = {{ width:85 , marginBottom:0}} textStyle = {{fontSize:16 }} buttonStyle = {{height:30 , borderRadius:10 }}/>


                        </View>
                    </View>

                    
                </Card>
            </View>
        )
    }

    renderMyGroupSection = () => {
        return(
            <View style = {{flex:1, backgroundColor:'white'}}>
                <RadioGroup radioGroupList={radioMyGroupList} onChange = {this.onMyGroupRadioChange} 
                initialValue = {this.state.myGroupSelectedTab}
                buttonContainerStyle = {styles.radioContainerStyle}
                buttonTextStyle = {styles.radioTextStyle}
                buttonTextActiveStyle = {{color:colors.whiteColor}}
                buttonTextInactiveStyle = {{color:colors.lightGreenColor}}
                buttonContainerActiveStyle = {{backgroundColor:colors.lightGreenColor}}
                buttonContainerInactiveStyle = {{backgroundColor:colors.whiteColor}}
                />
                {this.state.myGroupSelectedTab === 1  && this.renderMyGroupSubGroupSection()}
                {this.state.myGroupSelectedTab === 2  && this.renderMyGroupInvitationsSection()}
                {this.state.myGroupSelectedTab === 3  && this.renderMyGroupEventsSection()}

            </View>
        )

    }

    renderCreateGroupSection = () => {
        return(
            <View style = {{backgroundColor:'white'}}>
                <ScrollView contentContainerStyle = {{width:800 , height:50}} bounces = {false}>
                    <RadioGroup radioGroupList={radioCreateGroupList} 
                    onChange = {this.onCreateGroupRadioChange} 
                    initialValue = {this.state.myGroupSelectedTab}
                    buttonContainerStyle = {styles.radioContainerStyle}
                    buttonTextStyle = {styles.radioTextStyle}
                    buttonTextActiveStyle = {{color:colors.whiteColor}}
                    buttonTextInactiveStyle = {{color:colors.lightGreenColor}}
                    buttonContainerActiveStyle = {{backgroundColor:colors.lightGreenColor}}
                    buttonContainerInactiveStyle = {{backgroundColor:colors.whiteColor}}
                    />
               </ScrollView>
               
                <ScrollView>
                    {this.state.createGroupSelectedTab === 1  && this.renderCreateGroupDetailsSection()}
                    {this.state.createGroupSelectedTab === 2  && this.renderCreateGroupSettingsSection()}
                    {this.state.createGroupSelectedTab === 3  && this.renderCreateGroupPhotoSection()}
                    {this.state.createGroupSelectedTab === 4  && this.renderCreateGroupMediaSection()}
                    {this.state.createGroupSelectedTab === 5  && this.renderCreateGroupCoverImageSection()}
                    {this.state.createGroupSelectedTab === 6  && this.renderCreateGroupInviteSection()}
                </ScrollView>

            </View>
        )

    }

    renderMyGroupSubGroupSection = () =>{
            return(
                <View style = {{flex:1}}>
                 <View style = {{justifyContent:'center',alignItems:'center'}}>         
                            <Card>
                            <Dropdown
                                value = {dropdownData[0].value}
                                data={dropdownData}
                                containerStyle = {{width:150 , paddingLeft:10  }}
                                overlayStyle = {{marginLeft:'15%', marginTop:'20%'}}
                                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                textColor = {'gray'}
                                fontSize = {18}
                                labelFontSize  = {18}
                                itemTextStyle = {{ fontWeight:'400'}}
                                dropdownOffset = {0}
                            />
                            </Card>
                        </View>
                    <FlatList
                    automaticallyAdjustContentInsets={false}
                     contentContainerStyle={{ paddingBottom: 20}}
                    style={{backgroundColor: colors.white }}
                    keyExtractor={(item, index) => index}
                    data={searchResultData}
                    renderItem={this.renderItem}
                    // ListHeaderComponent={()=> this.renderResultHeader()}
                    ref = {(ref)=> {this.commentsListRef = ref}}
                    ItemSeparatorComponent = {() => <View style = {{height:30,backgroundColor:'transparent' , }}/>}/>
                 </View>
            )
        }

    renderMyGroupInvitationsSection = () => {
        return(
            <View style = {{ backgroundColor:'white', flex:1}}>
                <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:5 , marginTop:'60%' , fontWeight:'500' , fontSize:20 , alignSelf:'center'}]} > You have no outstanding group invites </Text>
            </View>
        )
    }

    renderMyGroupEventsSection = () => {
        return(
            <View style = {{ backgroundColor:'white', flex:1}}>
                <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:5 , marginTop:'60%' , fontWeight:'500' , fontSize:20 , alignSelf:'center'}]} > No Events </Text>
            </View>
        )
    }

    renderCreateGroupDetailsSection = () => {
        return(
            <View style = {{ backgroundColor:'white', height:800 , marginTop:20}}>
                <Card style = {{height:140}}>
                <Text style = {[styles.textStyle,{color:colors.lightGrayColor , marginLeft:15 , marginTop:5}]}> Group Name(Required) </Text>
                <IconTextInput placeholder = "Enter Group Name" iconName = '' iconColor = {colors.lightGreenColor} />
                </Card>

                <Card style = {{height:200}}>
                <Text style = {[styles.textStyle,{color:colors.lightGrayColor , marginTop:20, marginLeft:15 , marginBottom:10}]}> Group Description(Required) </Text>
                <TextInput  style  = {[styles.textStyle, {height:150 , borderWidth:0.5 , borderColor:colors.lightGrayColor ,textColor:colors.blackColor}]} numberOfLines = {6} multiline placeholder = '        Enter Group Description'/> 
                </Card>

            </View>
        )
    }

    renderCreateGroupSettingsSection = () => {
        return(
            <View style = {{ backgroundColor:'white'}}>
                <Card style = {{padding:15 , height:600}}>
                    <Text style = {[styles.textStyle,{color:colors.lightGreenColor , marginLeft:15 , marginTop:5}]}> PRIVACY OPTIONS </Text>
                    <View style = {{flex:1 , justifyContent:'flex-start' , alignItems:'flex-start'}}>
                        <RadioGroupVertical radioButtons={this.state.data} onPress={this.onPress} />
                    </View>

                </Card>


            <Card style = {{padding:15 , height:350}}>
            <Text style = {[styles.textStyle,{color:colors.lightGreenColor , marginLeft:15 , marginTop:5}]}> GROUP INVITATIONS </Text>
            <Text style = {[styles.textStyle,{color:colors.lightGrayColor , marginLeft:15 , marginTop:15 ,  marginBottom:10 , fontSize:12}]}>Which members of this group are allowed to invite others </Text>
            <View style = {{flex:1 , justifyContent:'flex-start' , alignItems:'flex-start'}}>
                <RadioGroupVertical radioButtons={this.state.groupInvitationData} onPress={this.onPress} />
            </View>
            </Card>
         </View>
        )
    }

    renderCreateGroupPhotoSection = () => {
        return(
            <View style = {{flex:1, backgroundColor:'white'}}>
                <Text style = {[styles.textStyle , {marginTop:100 , textAlign:'center' , textColor:colors.lightGrayColor}]}>
                    Upload an image to use as profile photo for this group. The image will be shown on main group page ,and in search results. To skip the group profile photo upload process , hit the "Next Step" button .
                </Text>
                <Card style = {{padding:10, height:200}}>

                <Text style = {[styles.textStyle , {marginTop:20 , textAlign:'center' , textColor:colors.lightGrayColor , fontSize:22}].join(',')}>Select your file </Text>

                <Camera
                    containerStyle={{
                    height: 40,
                    marginLeft: "5%",
                    height: 50,
                    backgroundColor: "transparent",
                    width: 40
                    }}
                    imageWidth={40}
                    imageHeight={40}
                    showText={false}
                    onImageSelected={this.onImageSelected}
                />
                </Card>
            </View>
        )
    }

    renderCreateGroupMediaSection = () => {
        return(
            <Card style = {{padding:15 , height:350}}>
            <Text style = {[styles.textStyle,{color:colors.lightGrayColor , marginLeft:15 , marginTop:5 , fontSize:14}]}> Album Creation Control </Text>
            <Text style = {[styles.textStyle,{color:colors.lightGrayColor , marginLeft:15 , marginTop:15 ,  marginBottom:10 , fontSize:14}]}>Who can create Albums in this group </Text>
            <View style = {{flex:1 , justifyContent:'flex-start' , alignItems:'flex-start'}}>
                <RadioGroupVertical radioButtons={this.state.groupInvitationData} onPress={this.onPress} />
            </View>
            </Card>
        )
    }

    renderCreateGroupCoverImageSection = () => {
        return(
            <View style = {{flex:1, backgroundColor:'white'}}>
                <Text style = {[styles.textStyle , {marginTop:100 , textAlign:'center' , textColor:colors.lightGrayColor}]}>
                    The cover image will be used to customize the header of your group.
                </Text>
                <Card style = {{padding:10, height:200}}>

                <Text style = {[styles.textStyle , {marginTop:20 , textAlign:'center' , textColor:colors.lightGrayColor , fontSize:22}]}>Select your file </Text>

                <Camera
                    containerStyle={{
                    height: 40,
                    marginLeft: "5%",
                    height: 50,
                    backgroundColor: "transparent",
                    width: 40
                    }}
                    imageWidth={40}
                    imageHeight={40}
                    showText={false}
                    onImageSelected={this.onImageSelected}
                />
                </Card>
            </View>
        )
    }

    renderCreateGroupInviteSection = () => {
        return(
            <View>
            <Card style = {{padding:15 , height:350}}>
                <Text style = {[styles.textStyle,{color:colors.lightGrayColor , marginLeft:15 , marginTop:5 , fontSize:14}]}> Select people to invite from your friends list. </Text>
                <Text style = {[styles.textStyle,{color:colors.lightGrayColor , marginLeft:15 , marginTop:15 ,  marginBottom:10 , fontSize:14}]}>Who can create Albums in this group </Text>
                <View style = {{flex:1 , justifyContent:'flex-start' , alignItems:'flex-start'}}>
                    <RadioGroupVertical radioButtons={this.state.groupInviteSectionData} onPress={this.onPress} />
                </View>
            </Card>

            <RoundedButton iconName = '' buttonText = 'Next Step' backgroundColor = {colors.greenColor} onPress = {this.onLoginAction}/>
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
// )(Groups);
export default Groups;
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