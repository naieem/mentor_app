import React, {PureComponent , Component} from 'react'
import {colors} from '../../themes'
import { View , StyleSheet  , Image , TouchableOpacity , Text , ImageBackground , Dimensions} from "react-native";
import Collapsible from 'react-native-collapsible';
import Avatar from '../reusableComponents/Avatar/Avatar'

var closeIcon = require("../../images/close_icon.png");
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export default class MenuScreen extends Component{
    constructor(props){
        super(props)
        this.state = { collapsedFirst: true,collapsedSecond: true,collapsedThird: true,collapsedFourth: true,collapsedFifth: true  }
    }

    toggleExpanded = (id) => {
        switch (id) {
            case 1:
                this.setState({ collapsedFirst: !this.state.collapsedFirst });
            break;

            case 2:
                this.setState({ collapsedSecond: !this.state.collapsedSecond });
            break;

            case 3:
                this.setState({ collapsedThird: !this.state.collapsedThird });
                // this.props.navigation.navigate('MyCommunity')

            break;
        case 4:
            this.setState({ collapsedFourth: !this.state.collapsedFourth });
        break;

        case 5:
            this.setState({ collapsedFifth: !this.state.collapsedFifth });
        break;

        case 6:
            this.setState({collapsedSixth: !this.state.collapsedSixth });
        break;
            default:
            break;
        }
      };
   
    findAMentorAction = () =>{
    //    this.props.navigation.closeDrawer() 
       this.props.navigation.navigate('FindAMentor')
    }

    becomeAMentorAction = () =>{
        //    this.props.navigation.closeDrawer() 
           this.props.navigation.navigate('BecomeAMentor')
    }

    myMentorAction = (index) => {
        if(index === 3){
            this.props.navigation.navigate('MembersMap',{selectedTab:index})
        }
        else{
            this.props.navigation.navigate('Connections',{selectedTab:index})
        }
    }

    contributionAction = () => {
        this.props.navigation.navigate('Contributions')
    }

    webinarsAndQAAction = () => {
        this.props.navigation.navigate('WebinarAndQA')
    }

    groupsAction = (index) => {
            this.props.navigation.navigate('Groups',{selectedTab:index})
    }

    myCommunityAction = () => {
        this.props.navigation.navigate('MyCommunity')
    }

    eventsAction = () => {
        this.props.navigation.navigate('Events')
    }


    render(){
        return(
        <View style = {styles.container}>
             <ImageBackground source = {require("../../images/menu_bg.png")} style = {{flex:1}}>
             <View style = {{position:'absolute' , top:'6%' , left:'55%' , zIndex:1}}>
                <Avatar/>
             </View>
            <View style = {{marginTop:100 }}>
                {this.renderFirstAccordion()}
                {this.renderSecondAccordion()}
                {this.renderThirdAccordion()}
                {this.renderFourthAccordion()}
                {this.renderFifthAccordion()}
                {this.renderSixthAccordion()}
            </View>

        <TouchableOpacity onPress = {this.props.navigation.closeDrawer} style = {{marginTop:screenHeight-100, alignSelf:'center' , position:'absolute'}}>
            <Image source = {closeIcon} style = {{ width:75,height:75 }}/>
        </TouchableOpacity>
        </ImageBackground>
        </View>
        )
    }

    renderFirstAccordion = () => {
        return(
            <View>
                <TouchableOpacity onPress={()=>this.toggleExpanded(1)}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Mentor</Text>
                        <Image source = {require('../../images/arrow_down.png')} style = {{ width:30,height:25 }}/>
                    </View>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.collapsedFirst} align="center">
                <TouchableOpacity style={styles.content} onPress = {this.findAMentorAction}>
                    <Text style = {styles.contentText}>Find a Mentor</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress = {this.becomeAMentorAction}>
                    <Text style = {styles.contentText}>Become a Mentor</Text>
                </TouchableOpacity>
    
            </Collapsible>
          </View>
        )
    }

    renderSecondAccordion = () => {
        return(
            <View>
                <TouchableOpacity onPress={()=>this.toggleExpanded(2)}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Connections</Text>
                        <Image source = {require('../../images/arrow_down.png')} style = {{ width:30,height:25 }}/>
                    </View>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.collapsedSecond} align="center">
                <TouchableOpacity style={styles.content} onPress = { () => this.myMentorAction(0)}>
                    <Text style = {styles.contentText}>My Mentors</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress = { () => this.myMentorAction(1)}>
                    <Text style = {styles.contentText}>My Mentees</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress = { () => this.myMentorAction(1)}>
                    <Text style = {styles.contentText}>Requests</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress = { () => this.myMentorAction(3)}>
                    <Text style = {styles.contentText}>Members Map</Text>
                </TouchableOpacity>
    
            </Collapsible>
          </View>
        )
    }

    renderThirdAccordion = () => {
        return(
            <View>
                <TouchableOpacity onPress={()=>this.toggleExpanded(3)}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Community</Text>
                        <Image source = {require('../../images/arrow_down.png')} style = {{ width:30,height:25 }}/>
                    </View>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.collapsedThird} align="center">
                <TouchableOpacity style={styles.content} onPress = { () => this.myCommunityAction()}>
                    <Text style = {styles.contentText}>My Community</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress = { () => this.eventsAction()}>
                    <Text style = {styles.contentText}>Events</Text>
                </TouchableOpacity>
    
            </Collapsible>
            </View>
        )
    }

    renderFourthAccordion = () => {
        return(
            <View>
                <TouchableOpacity onPress={()=>this.toggleExpanded(4)}>

                    <View style={styles.header}>
                        <Text style={styles.headerText}>Contributions</Text>
                        <Image source = {require('../../images/arrow_down.png')} style = {{ width:30,height:25 }}/>
                    </View>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.collapsedFourth} align="center">
                <TouchableOpacity style={styles.content}  onPress = { () => this.contributionAction()}>
                    <Text style = {styles.contentText}>Contributions</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress = { () => this.webinarsAndQAAction()}>
                    <Text style = {styles.contentText}>Webinars and Q&A</Text>
                </TouchableOpacity>
    
            </Collapsible>
          </View>
        )
    }

    renderFifthAccordion = () => {
        return(
            <View>
            <TouchableOpacity onPress={()=>this.toggleExpanded(5)}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Groups</Text>
                        <Image source = {require('../../images/arrow_down.png')} style = {{ width:30,height:25 }}/>
                    </View>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.collapsedFifth} align="center">
                <TouchableOpacity style={styles.content} onPress = { () => this.groupsAction(0)}>
                    <Text style = {styles.contentText}>All Groups</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress = { () => this.groupsAction(1)}>
                    <Text style = {styles.contentText}>My Groups</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress = { () => this.groupsAction(1)}>
                    <Text style = {styles.contentText}>Create Groups</Text>
                </TouchableOpacity>
    
            </Collapsible>
          </View>
        )
    }
    renderSixthAccordion = () => {
        return(
            <View>
                <TouchableOpacity onPress={()=>this.toggleExpanded(5)}>

                    <View style={styles.header}>
                        <Text style={styles.headerText}>Log Out</Text>
                        <Image source = {require('../../images/arrow_down.png')} style = {{ width:30,height:25 }}/>
                    </View>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.collapsedFifth} align="center">
                <TouchableOpacity style={styles.content}>
                    <Text style = {styles.contentText}>Find a Mentor</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content}>
                    <Text style = {styles.contentText}>Become a Mentor</Text>
                </TouchableOpacity>
    
            </Collapsible>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.greenColor
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
      },
      header: {
        backgroundColor: 'transparent',
        padding: '7%',
        paddingLeft:'15%',
        flexDirection:'row'
      },
      headerText: {
        textAlign: 'left',
        fontSize: 22,
        fontWeight: '500',
        color:colors.whiteColor
      },
      content: {
        padding: 10,
        paddingLeft:'20%',
        backgroundColor: 'transparent',
        color:colors.whiteColor
      },
      contentText: {
        color:colors.whiteColor,
        fontSize: 20,
      },
      active: {
        backgroundColor: 'rgba(255,255,255,1)',
      },
      inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
      },
      selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
      },
      activeSelector: {
        fontWeight: 'bold',
      },
      selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
      },
      multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
      },
      multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
      },
  });