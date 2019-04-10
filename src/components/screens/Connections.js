import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet   , Text  , FlatList , Image , SectionList} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import RoundedButton from "../reusableComponents/Button/RoundedButton";
import { CheckBox , Button, Icon, Card} from 'native-base';
import RadioGroup from 'react-native-custom-radio-group';
import { Dropdown } from 'react-native-material-dropdown';


const dropdownData = [{value:'Everything'}, {value:'Last Active'}]

const searchResultData = [
    {
      name: 'Mr Bean',
      location:'Brampton, ON ,Canada',
      profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
      occupation:'Mentor',
      wallImage:'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
      interests:'Football,Driving,Swimming,Singing'
    },
    {
        name: 'Mr Abhi',
        location:'Bangalore, KA ,India',
        profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
        occupation:'Mentor',
        wallImage:'https://www.reduceimages.com/img/image-after.jpg',
        interests:'Football,Driving,Swimming,Singing'

      },
    {
        name: 'Steve Jobs',
        location:'Brampton, ON ,Canada',
        profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
        occupation:'Founder & CEO'  ,
        wallImage:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg',
        interests:'Football,Driving,Swimming,Singing'

    },
    {
        name: 'Steve Jobs',
        location:'Brampton, ON ,Canada',
        profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
        occupation:'Founder & CEO'  ,
        wallImage:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg',
        interests:'Football,Driving,Swimming,Singing'

    },
   
  ]

  const reqResultData = [
    {title: 'Today', data: [{name:'Abhi', lastActive:'6hours ago', profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',},
    {name:'Pinto', lastActive:'1hour ago',profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG'}]},
    {title: 'Yesterday', data: [{name:'Ram', lastActive:'2days ago',profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',}]},
  ]

const radioGroupList = [{
    label: 'My Mentor',
    value: 1
  }, {
    label: 'My Mentees',
    value: 2
  }, {
    label: 'Requests',
    value: 3
  }];

class Connections extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            selectedTab:1
        }
    }
    
    render(){
        let result = this.checkForReqTabSelected()
        return(
            <View style = {styles.container}>
                <Navbar navBarTitle="Connections" />
                    <RadioGroup radioGroupList={radioGroupList} onChange = {this.onRadioChange} 
                    initialValue = {this.state.selectedTab}
                    buttonContainerStyle = {styles.radioContainerStyle}
                    buttonTextStyle = {styles.radioTextStyle}
                    buttonTextActiveStyle = {{color:colors.whiteColor}}
                    buttonTextInactiveStyle = {{color:colors.lightGreenColor}}
                    buttonContainerActiveStyle = {{backgroundColor:colors.lightGreenColor}}
                    buttonContainerInactiveStyle = {{backgroundColor:colors.whiteColor}}
                    />
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
                {(this.state.selectedTab === 1 || this.state.selectedTab === 2) && this.renderResultSection()}
                {result === true ? this.renderRequestSection() : null}

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

    renderSection = (section) => {
        return(
            null
            // <View><Text style={styles.sectionHeader}>{section.title} </Text> </View>
        )
    }

    renderResultSection = () => {
        return(
            <View style = {{flex:1}}>
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
                                Location:
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:20 , fontWeight:'400' , fontSize:15,alignSelf:'flex-start'}]} >
                                {item.item.location}
                            </Text>
                    </View>

                    <View style = {{flexDirection:'row' , height:20 }}>
                            <Text style={[styles.greenTextStyle , {color:colors.blackColor , marginLeft:5 , fontWeight:'400' , fontSize:15 , alignSelf:'flex-start'}]} >
                                Interests:
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:20 , fontWeight:'400' , fontSize:15,alignSelf:'flex-start'}]} >
                                {item.item.interests}
                            </Text>
                    </View>

                    <View style = {{flexDirection:'row' , height:20}}>
                            <Text style={[styles.greenTextStyle , {color:colors.blackColor , marginLeft:5 , fontWeight:'400' , fontSize:15 , alignSelf:'flex-start'}]} >
                                Occupation:
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:20 , fontWeight:'400' , fontSize:15,alignSelf:'flex-start'}]} >
                                {item.item.occupation}
                            </Text>
                    </View>

                    <View style = {{flexDirection:'row' , height:100 , justifyContent:'space-evenly' , marginTop:10}}>
                    <RoundedButton iconName = '' buttonText = 'Message' backgroundColor = {colors.greenColor} onPress = {this.onLoginAction} style = {{ width:175 }} textStyle = {{fontSize:18}}/>
                    <RoundedButton iconName = '' buttonText = 'Cancel Mentorship' backgroundColor = {colors.redColor} onPress = {this.onLoginAction} style = {{ width:185 }} textStyle = {{fontSize:18 }}/>
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

                    <View style = {{height:110 , backgroundColor:'red' , width:5 , borderBottomLeftRadius:5 , borderTopLeftRadius:5 , flexDirection:'row' , marginTop:-5}}/>

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

    onRadioChange = (index) =>{
        console.log('INdex is ',index);
        this.setState({selectedTab:index})
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
// )(Connections);
export default Connections;
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
    }
})