import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet  , ScrollView , TouchableOpacity , Text , FlatList , Image} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import {Card} from 'native-base'
import IconTextInput from "../reusableComponents/TextInput/IconTextinput";
import RoundedButton from "../reusableComponents/Button/RoundedButton";
import Slider from 'react-native-slider'
import Swiper from 'react-native-swiper';

const AvatarUrl = 'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG'


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
  


class FindAMentor extends PureComponent{

    constructor(props){
        super(props)
        this.state = {
            sliderValue:50
        }
    }
    render(){
        return(
            <ScrollView contentContainerStyle={{height:1800}}>
                <View style = {styles.container}>
                        <Navbar navBarTitle="Find a Mentor" />
                        {this.renderSearchMentorCard()}
                        {this.renderResultSection()}
                        {this.renderReviewsSection()}

                </View>

             </ScrollView>


        )
    }

    renderSearchMentorCard = () => {
        return(
        <View style = {{padding:10}}>
        <Card >
            <Text style = {[styles.greenTextStyle , {fontSize:20 , paddingTop:10}]}>Find A Mentor</Text>
            <View>
                <Text style = {[styles.greenTextStyle , {color:colors.lightGrayColor , marginTop:'10%' , marginLeft:'5%' , fontWeight:'500' , alignSelf:'flex-start'}]}>INTERESTS</Text>
                <IconTextInput placeholder = "Enter your Interests" containerHeight = {40}/>
            </View>
            <View>
                <Text style = {[styles.greenTextStyle , {color:colors.lightGrayColor , marginTop:'10%' , marginLeft:'5%' , fontWeight:'500' , alignSelf:'flex-start'}]}>LOCATION</Text>
                <IconTextInput placeholder = "Enter Location" containerHeight = {40}/>
            </View>
            <View>
            <View style = {{flexDirection:'row', margin:'1%' , justifyContent:'space-between'}}>
                <Text style = {[styles.greenTextStyle , {color:colors.lightGrayColor , marginTop:'10%' , marginLeft:'5%' , fontWeight:'400' }]}>LOCATION</Text>
                <Text style = {[styles.greenTextStyle , {color:colors.lightGrayColor , marginTop:'10%' , marginRight:'5%' , fontWeight:'400' }]}>{this.state.sliderValue}MILES</Text>
            </View>
             <Slider
             style = {{marginLeft:25,marginRight:25 , marginBottom:30}}
                value={this.state.sliderValue}
                minimumValue ={10}
                maximumValue = {100}
                step={10}
                thumbTintColor = {colors.lightGreenColor}
                maximumTrackTintColor = {colors.lightGrayColor}
                onValueChange={(value) => this.setState({sliderValue:value})} 
                /> 
            </View>

            <RoundedButton iconName = '' buttonText = 'Search Mentor' backgroundColor = {colors.greenColor} onPress = {this.onLoginAction} style = {{marginTop:'92%' ,  marginBottom:0 , width:250 , alignSelf:'center' , position:'absolute'}}/>
        </Card>
        </View>
        )
    }

    renderResultSection = () => {
        return(
            <View style = {{flex:1}}>
                <FlatList
                 contentContainerStyle={{ paddingBottom: 20}}
                style={{backgroundColor: colors.white }}
                keyExtractor={(item, index) => index}
                data={searchResultData}
                renderItem={this.renderItem}
                ListHeaderComponent={()=> this.renderResultHeader()}
                ref = {(ref)=> {this.commentsListRef = ref}}
                ItemSeparatorComponent = {() => <View style = {{height:30,backgroundColor:'transparent' , }}/>}/>
             </View>
        )
    }

    renderResultHeader = () =>{
        return(
            <View style = {{height:30, justifyContent:'center' , marginTop:10}}>
                <Text style = {[styles.greenTextStyle , {color:colors.blackColor , marginLeft:'5%' , fontWeight:'500' , fontSize:22}]}>Our Most Popular Mentors</Text>
            </View>
        )
    }

    renderItem = (item) => {
        return(
            <View style = {{height:300 , margin:10}}>
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

                    <View style = {{flexDirection:'row' , height:70 , justifyContent:'space-evenly'}}>
                    <RoundedButton iconName = '' buttonText = 'Message' backgroundColor = {colors.greenColor} onPress = {this.onLoginAction} style = {{ width:175 }} textStyle = {{fontSize:18}}/>
                    <RoundedButton iconName = '' buttonText = 'Cancel Mentorship' backgroundColor = {colors.redColor} onPress = {this.onLoginAction} style = {{ width:185 }} textStyle = {{fontSize:18 }}/>
                    </View>
                </Card>
            </View>
        )

    }

    renderReviewsSection = () => {
        return(
            <View style = {{height:200, justifyContent:'center' , marginTop:10 }}>
                <Text style = {[styles.greenTextStyle , {color:colors.blackColor , marginLeft:'5%' , fontWeight:'500' , fontSize:22}]}>What does they say about Mentoring</Text>
                <Swiper bounces = {false}>
                <View style = {{height:130}}>
                    <Card style = {{height:130}}>
                        <Text numberOfLines= {3} style = {[styles.greenTextStyle , {color:colors.blackColor , marginLeft:'5%' , marginTop:15 , fontWeight:'400' , fontSize:18}]}>We make a living by what we get, we make life by what we give </Text>

                    <View style = {{flexDirection:'row' , height:75 }}>
                        <Image source = {{uri:AvatarUrl}} style = {{width:60,height:60,borderRadius:30 , margin:10}}/>

                        <View style = {{width:250  , justifyContent:'center'}}>
                            <Text style={[styles.greenTextStyle , {color:colors.blackColor , marginLeft:5 , fontWeight:'400' , fontSize:18 , alignSelf:'flex-start'}]} >
                                Junot Diaz
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:5 , fontWeight:'300' , fontSize:14,alignSelf:'flex-start' , marginTop:5}]} >
                                American writer
                            </Text>
                        </View>

                    </View>
                    </Card>
                </View>

                <View style = {{height:130}}>
                    <Card style = {{height:130}}>
                        <Text numberOfLines= {3} style = {[styles.greenTextStyle , {color:colors.blackColor , marginLeft:'5%' , fontWeight:'400' , fontSize:18 , marginTop:15}]}>We make a living by what we get, we make life by what we give </Text>

                    <View style = {{flexDirection:'row' , height:75 }}>
                        <Image source = {{uri:AvatarUrl}} style = {{width:60,height:60,borderRadius:30 , margin:10}}/>

                        <View style = {{width:250  , justifyContent:'center'}}>
                            <Text style={[styles.greenTextStyle , {color:colors.blackColor , marginLeft:5 , fontWeight:'500' , fontSize:20 , alignSelf:'flex-start'}]} >
                                Junot Diaz
                            </Text>
                            <Text style={[styles.greenTextStyle , {color:colors.lightGrayColor , marginLeft:5 , fontWeight:'300' , fontSize:14,alignSelf:'flex-start' , marginTop:5}]} >
                                American writer
                            </Text>
                        </View>

                    </View>
                    </Card>
                </View>
                </Swiper>
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {};
  }
  
//   export default connect(
//     mapStateToProps,
//     {
//       ...NavActions,
//     }
//   )(FindAMentor);
export default FindAMentor;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(250,250,250,1)',
    },
    greenTextStyle:{
        fontSize:18,
        color:colors.lightGreenColor,
        justifyContent:'center',
        alignSelf:'center'
    }
})