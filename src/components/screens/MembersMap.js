import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet   , Text  , FlatList , Image , TextInput , ScrollView , TouchableOpacity , TouchableHighlight} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import idx from "idx";
import MapView , { PROVIDER_GOOGLE,Marker,Callout }from 'react-native-maps';
import RoundedButton from "../reusableComponents/Button/RoundedButton";


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

class MembersMap extends PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style = {styles.container}>
                <Navbar navBarTitle="Members Map" />
                {this.renderMap()}
            </View>
        )
    }

    renderMap = () => {
        return(
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

    onViewProfileAction = (item) => {
        console.log('VIew profiel click ',item);
        this.props.pushNewRoute('ProfileDetails')
        
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
// )(MembersMap);
export default MembersMap;
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