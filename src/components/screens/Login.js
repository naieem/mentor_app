import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  AsyncStorage,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { colors } from "../../themes";
import IconTextInput from "../reusableComponents/TextInput/IconTextinput";
import RoundedButton from "../reusableComponents/Button/RoundedButton";
// import { CheckBox, Button } from "react-native-elements";
// import { NavActions } from "../../redux/actions";
// import { loginRequest } from "../../redux/actions/loginAction";
// import { APP_STATE_KEY } from "../../constants";
// import Loader from "../ReusableComponents/Loader";
import * as utils from "../../utility/utils";
// import { CheckBox} from 'react-native-elements';
import { CheckBox , Button, Icon} from 'native-base';
// var logo = require("../../images/logo_splash_logo.png");

// type Props = {};

class Login extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      rememberMe: false,
      loading: false,

    };
  }
  componentDidMount() {
    // AsyncStorage.getItem("rememberme").then(value => {
    //   this.setState({ rememberme: value });
    //   if (value === "true") {
    //     this.setState({ loggedInCheckBoxChecked: true });
    //   } else {
    //     this.setState({ loggedInCheckBoxChecked: false });
    //   }
    // });

    // AsyncStorage.getItem("emailId").then(value => {
    //   this.setState({ emailId: value });
    // });

    // AsyncStorage.getItem("password").then(value => {
    //   this.setState({ password: value });
    // });
  }

  emailChange = (text) => {
    this.setState({emailId:text})
  }

  render() {
    return (
      <ScrollView  style={styles.container}>
        <ImageBackground source = {require("../../images/bg.png")} style = {{flex:1}}>
          <Image source = {require('../../images/logo.png')} style = {{justifyContent :'center',width:400,height:280 }}/>
          <View style = {{marginTop:'0%'}}>
            <IconTextInput placeholder = "Username OR Email Address" iconName = 'person' iconColor = {colors.lightGreenColor} onChange = {(text) => this.emailChange(text)} />
            <IconTextInput placeholder = "Password" iconName = 'lock' iconColor = {colors.lightBlueColor} isPasswordField  onChange = {(text) => {this.setState({password:text})}} />
          <View style = {{flexDirection:'row' , padding:15 , paddingLeft:'15%'}}>
            <CheckBox checked={this.state.rememberMe} style = {{width:20,height:20 , borderRadius:4 , borderColor:colors.blackColor}} onPress = {()=> this.setState({rememberMe:!this.state.rememberMe})}/>
            <Text style = {{paddingLeft:15}}> Remember Me </Text>

          <TouchableOpacity onPress={this.onForgotPwdAction} >
            <Text style={styles.forgotPwdBtnStyle}>
              Forgot Password?
            </Text>
            </TouchableOpacity>
          </View>
          <RoundedButton iconName = '' buttonText = 'Login' backgroundColor = {colors.greenColor} onPress = {this.onLoginAction}/>
          <RoundedButton iconName = 'logo-googleplus' buttonText = 'Login with Google' backgroundColor = {colors.gplusRedColor} onPress = {this.onPress}/>
          <RoundedButton iconName = 'logo-linkedin' buttonText = 'Login with Linkedin' backgroundColor = {colors.linkedinBlueColor} onPress = {this.onPress}/>
         
          </View>

          <TouchableOpacity style = {{flexDirection:'row',justifyContent:'center'}}>
            <Text style = {[styles.forgotPwdBtnStyle , {color:colors.whiteColor , fontSize:22 , paddingLeft:0}]}> Don't have an account </Text>
            <Text style = {[styles.forgotPwdBtnStyle , {fontSize:22 , paddingLeft:0}]}> Sign up? </Text>

          </TouchableOpacity>
          </ImageBackground>
      </ScrollView >
    );
  }


  onPress = () => {
    console.log('BUtton pressed');
  }
  onPasswordChangeText = text => {
    this.setState({ password: text });
    if (utils.hasWhiteSpace(text)) {
      setTimeout(() => {
        Alert.alert(
          " Error",
          "Password cannot contain spaces",
          [
            {
              text: "Ok",
              onPress: () => {}
            }
          ],
          { cancelable: false }
        );
      }, 100);
    }
  };

  onLoginAction = async () => {
    // this.props.navigation.replace('HomeScreenNavigator')
    // return
    this.setState({ loading: true });
    var bodyFormData = new FormData();
    bodyFormData.append('username',this.state.emailId)
    bodyFormData.append('password',this.state.password)
    bodyFormData.append('method',"wp_login")
    bodyFormData.append('action','rtmedia_api')

    const config = {
      // headerKeys: { 'content-type': `multipart/form-data`},
      baseURL: "https://mentor.geeksquadsglobal.site/wp-admin/admin-ajax.php"
    };
    AsyncStorage.setItem("emailId", this.state.emailId);
    AsyncStorage.setItem("password", this.state.password);



    
    // const { response, error } = await this.props.loginRequest(config, {
    //   username: this.state.emailId,
    //   password: this.state.password,
    //   method :"wp_login",
    //   action:'rtmedia_api'
    // });

    const { response, error } = await this.props.loginRequest(config, bodyFormData);
    this.setState({ loading: false });
    // this.props.navigation.replace("HomeScreenNavigator");

    if (!error) {
      AsyncStorage.setItem("campusid", response.campusid);
      AsyncStorage.setItem("firstname", response.firstname);
      AsyncStorage.setItem("lastname", response.lastname);
      AsyncStorage.setItem("institutionname", response.institutionname);

      // this.props.navigation.pushNewRoute("HomeScreenNavigator");
      this.props.navigation.replace("HomeScreenNavigator");
    } else {
      setTimeout(() => {
        Alert.alert(
          " Error",
          error.data.error_description ||
            "Something went wrong , please try again",
          [
            {
              text: "Ok",
              onPress: () => {}
            }
          ],
          { cancelable: false }
        );
      }, 100);
    }
  };

  onSignUpAction = () => {
    this.props.pushNewRoute("SignUpInitial");
  };

  onForgotPwdAction = () => {
    this.props.pushNewRoute("ForgotPassword");
  };
}
function mapStateToProps(state) {
  return {};
}

// export default connect(
//   mapStateToProps,
//   {
//     ...NavActions,
//     loginRequest
//   }
// )(Login);

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBGColor
  },
  imageBackgroundComponent: {
    flex: 0.5,
    backgroundColor: "transparent",
    alignItems: "center",
    marginTop: 30,
    height: "10%"
  },
  headerImageStyle: {
    width: 160,
    height: 140
  },
  loginContainer: {
    flex: 0.5,
    backgroundColor: "transparent",
    marginTop: 10
  },
  loginButtonStyle: {
    backgroundColor: colors.orangeColor,
    width: "100%",
    height: 65,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    top: 15
  },
  forgotPwdBtnStyle: {
    backgroundColor: "transparent",
    paddingLeft:'20%',
    color:colors.greenColor,
  },
  regButtonStyle: {
    backgroundColor: colors.whiteColor,
    width: "100%",
    height: 65,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    top: 15
  },
  activeAccTextStyle: {
    backgroundColor: "transparent",
    color: colors.whiteColor,
    marginTop: 20,
    fontSize: 12,
    textAlign: "center"
  }
});
