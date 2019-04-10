import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet   , Text  , FlatList , Image , TextInput , ScrollView , TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { NavActions } from "../../redux/actions";
import Navbar from "../reusableComponents/NavigationHeader/Navbar";
import RoundedButton from "../reusableComponents/Button/RoundedButton";
import { CheckBox , Button, Icon, Card} from 'native-base';
import RadioGroup from 'react-native-custom-radio-group';
import { Dropdown } from 'react-native-material-dropdown';
import CollapsableCard from "../reusableComponents/Card/CollapsableCard";
import Camera from "../reusableComponents/Camera/Camera";

var shareIcon = require("../../images/icon_share.png");
var msgIcon = require("../../images/icon_message.png");
var pinIcon = require("../../images/icon_pinned.png");
var clockIcon = require("../../images/icon_clock.png");
var deleteIcon = require("../../images/icon_delete.png");



const commentsData = [
    {
      profileImage:'https://pbs.twimg.com/profile_images/1414081392/abhi.PNG',
      heading:'Hello Its me ',
      name:'Abhi',
      wallImage:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg',

    },
    {
      profileImage:'https://ubisoft-avatars.akamaized.net/e882b63c-8659-4370-99f2-f145b4bc13ad/default_256_256.png',
      heading:'Nice it is ',
      name:'Tom',
      wallImage:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg',
    },
    {
      profileImage:'http://api.ning.com/files/MVK7fFWlQ9KNSbyVwsfScsgOyyuLk-FRdvob5j7w-eITJSB*CUxFwjxCvtOMAfOrywERQeD9L4jQea8JHbPWXNT0E*jx*NCH/528397783.jpeg?xgip=0%3A104%3A1586%3A1586%3B%3B&width=184&height=184&crop=1%3A1',
      heading:'ABCxys',
      name:'Sam',
      wallImage:'http://cssslider.com/sliders/demo-5/data1/images/road_forest_trees_tree_trip_nature_leaves_season.jpg',
    }
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
      <View style = {{height:350 , paddingLeft:10, paddingRight:10}}>
        <View style = {{flexDirection:'row' , backgroundColor:'white' }}>
            <Text style={{fontWeight:'300'  , fontSize:24,  width:250 , margin:10 , color:colors.greenColor}}>{props.heading}</Text>
            <TouchableOpacity onPress = {props.onDeletePress}>
                <Image source = {deleteIcon} style = {{width:30, height:30 , marginRight:15 , tintColor:'red'}} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {props.onNextPress}>
                <Image source = {deleteIcon} style = {{width:30, height:30 , tintColor:'red'}}/>
            </TouchableOpacity>
        </View>

        <View style = {{flexDirection:'row' , height:20 }}>
            <Image source = {{uri:props.profileImage}} style = {{width:50,height:50,borderRadius:25 , marginLeft:15}}/>
            <Text style={{fontWeight:'200', fontSize:18,  maxWidth:250 , margin:10}}>
                {props.name}
            </Text>
        </View>
        <Image source = {{uri:props.wallImage}} style = {{flex:1 , maxWidth:400, maxHeight:200, marginLeft:30,marginRight:30 , backgroundColor:'transparent'}} resizeMode = 'center'/>
        <Text style={{fontWeight:'200', fontSize:16,  maxWidth:250 , marginLeft:10}}>
                {props.heading}
        </Text>

        <View style = {{flexDirection:'row' , justifyContent:'space-between' , marginTop:5}}>
            <TextIconLeft iconImage = {clockIcon} text = 'June 4,2018'/>
            <TextIconLeft iconImage = {msgIcon} text = '50'/>
            <TextIconLeft iconImage = {pinIcon} text = 'Podcasts'/>
            <TextIconLeft iconImage = {shareIcon} text = 'Share'/>
        </View>
      </View>
    )
  }
  

const dropdownData = [{value:'Everything'}, {value:'Last Active'}]


class Contributions extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            contributeCardCollapsed:true
        }
    }

    render(){
        return(
            <ScrollView contentContainerStyle={{height:1200}}>
            <View style = {styles.container}>
            <Navbar navBarTitle="Contributions" />
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
        {this.renderContributionFormPost()}
        {this.renderBottomList()}
    </View>
    </ScrollView>

        )
    }

    renderContributionFormPost = () => {
        return(
          <CollapsableCard isCollapsed = {this.state.contributeCardCollapsed} headerText = 'Contribute' cardClicked = {() => this.setState({contributeCardCollapsed:!this.state.contributeCardCollapsed})}>
            <View style = {{backgroundColor:'white',  height : 500 }}>
                <Card style = {{ marginLeft: 20,marginRight: 20, marginTop:15}}>
                    <TextInput
                    style={styles.titleTextInput} placeholder = {"Enter Title"}>
                    </TextInput>
                </Card>

                <Card style = {{ marginLeft: 20,marginRight: 20, marginTop:15}}>
                        <TextInput
                        style={[styles.titleTextInput , {height:100 , marginTop:20 , justifyContent:'flex-start'}]} placeholder = {"Enter Post"}>
                        </TextInput>
                </Card>

             
                <Text style = {[styles.textStyle , {marginLeft:10 , marginTop:3}]}> CATEGORIES </Text>
                    <View style = {{flexDirection:'row'  , backgroundColor:'white' , flexWrap:'wrap', margin:5}}>
                        <CheckBox checked={this.state.checked} style = {{width:18,height:18 , borderRadius:4 , borderColor:colors.lightGreenColor , marginLeft:20 , marginBottom:10}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 ,marginTop:2 , color:colors.lightGrayColor}]}> BLOG </Text>

                        <CheckBox checked={this.state.checked} style = {{width:18,height:18 , borderRadius:4 , borderColor:colors.lightGreenColor, marginLeft:20, marginBottom:10}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 ,marginTop:2 , color:colors.lightGrayColor}]}> PODCASTS </Text>

                        <CheckBox checked={this.state.checked} style = {{width:18,height:18 , borderRadius:4 , borderColor:colors.lightGreenColor, marginLeft:20, marginBottom:10}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 ,marginTop:2 , color:colors.lightGrayColor}]}> VIDEOS </Text>

                        <CheckBox checked={this.state.checked} style = {{width:18,height:18 , borderRadius:4 , borderColor:colors.lightGreenColor, marginLeft:20, marginBottom:10}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 ,marginTop:2 , color:colors.lightGrayColor}]}> UNCATEGORIZED </Text>

                        
                    </View>


                <Text style = {[styles.textStyle , {marginLeft:10 , marginTop:3}]}> TAGS </Text>
                    <View style = {{flexDirection:'row'  , backgroundColor:'white' , flexWrap:'wrap', margin:5}}>
                        <CheckBox checked={this.state.checked} style = {{width:18,height:18 , borderRadius:4 , borderColor:colors.lightGreenColor , marginLeft:20 , marginBottom:10}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 ,marginTop:2 , color:colors.lightGrayColor}]}> 34 </Text>

                        <CheckBox checked={this.state.checked} style = {{width:18,height:18 , borderRadius:4 , borderColor:colors.lightGreenColor, marginLeft:20, marginBottom:10}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 ,marginTop:2 , color:colors.lightGrayColor}]}> 35 </Text>

                        <CheckBox checked={this.state.checked} style = {{width:18,height:18 , borderRadius:4 , borderColor:colors.lightGreenColor, marginLeft:20, marginBottom:10}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 ,marginTop:2 , color:colors.lightGrayColor}]}> 36 </Text>

                        <CheckBox checked={this.state.checked} style = {{width:18,height:18 , borderRadius:4 , borderColor:colors.lightGreenColor, marginLeft:20, marginBottom:10}} onPress = {()=> this.setState({checked:!this.state.checked})}/>
                        <Text style = {[styles.textStyle , {marginLeft:15 ,marginTop:2 , color:colors.lightGrayColor}]}> 37 </Text>
                        
                    </View>

                <Text style = {[styles.textStyle , {marginLeft:10 , marginTop:3}]}>UPLOAD COVER IMAGE/VIDEO/AUDIO</Text>
                {/* <Button primary style = {{backgroundColor:colors.primaryBGColor , height:35 , width:120 , justifyContent:'center' , margin:10}}>
                    <Text style = {[styles.greenTextStyle, {color:colors.whiteColor}]}>Upload</Text>
                </Button> */}
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

                <RoundedButton iconName = '' buttonText = 'Upload Post' backgroundColor = {colors.primaryBGColor} onPress = {this.onUploadPostAction} style = {{margin:15}}/>

          </View>
          </CollapsableCard>
        )
      }


      renderBottomList = () => {
        return(
            <FlatList
            automaticallyAdjustContentInsets={false}
            style={{backgroundColor: colors.white , marginTop:10}}
            keyExtractor={(item, index) => index}
            data={commentsData}
            renderItem={this.renderItem}
            ref = {(ref)=> {this.commentsListRef = ref}}
            ItemSeparatorComponent = {() => <View style = {{height:5,backgroundColor:colors.whiteColor , }}/>}
            />
        )
      }

      renderItem = (item) => {
        return(
            <Card>
              <CommentCardView wallImage = {item.item.wallImage} heading = {item.item.heading} profileImage = {item.item.profileImage} 
                name = {item.item.name}
                onDeletePress = {this.onDeletePress}
                onNextPress = { () => this.onNextPress(item.index)}
              />
            </Card>
        )
      }

      onImageSelected = selectedImages => this.setState({ selectedImages });

      onNextPress = (index) => {
        console.log('Next press called');
        const item = commentsData[index]
        this.props.pushNewRoute('ContributionDetails', {selectedItem:item})
      }

      onDeletePress = () => {

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
// )(Contributions);
export default Contributions;
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