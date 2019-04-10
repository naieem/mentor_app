import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity,ImageBackground } from "react-native";
import { colors } from "../../../themes";
import { connect } from "react-redux";
import { NavActions } from "../../../redux/actions";

//@flow


var backIcon = require("../../../images/back_white.png");
var navBarBG = require("../../../images/navbar_bg.png");
class Navbar extends React.Component {
  render() {
    const {
      style,
      backButton,
      textStyle,
      navBarTitle,
      rightView,
      hideBackBtn,
    } = this.props;
    return (
      <View style={[styles.container, this.props.style]}>
        <ImageBackground source = {navBarBG} style = {[styles.container, this.props.style]}>
        <View style={{ top: 5, flexDirection: "row" }}>
          {hideBackBtn
            ? null
            : backButton
              ? backButton()
              : this.renderBackButton()}
          <Text
            style={[
              styles.navBarText,
              textStyle,
            ]}
          >
            {" "}
            {navBarTitle}
          </Text>
          <View style={styles.rightParentView}>
            {rightView ? rightView : null}
          </View>
        </View>
        </ImageBackground>
      </View>
      
    );
  }
  renderBackButton = () => {
    const backIconImage = this.props.backIconImage
      ? this.props.backIconImage
      : backIcon;
    return (
      <TouchableOpacity
        style={{
          alignSelf: "flex-start",
          alignItems: "center",
          top: 0,
          marginLeft: "2%",
          marginRight: "2%"
        }}
        onPress={this.onPress}
      >
        <Image source={backIconImage}  />
      </TouchableOpacity>
    );
  };
  onPress = () => {
    if (this.props.onBackCallback) {
      this.props.onBackCallback();
    } else {
      // this.props.popRoute();
      console.log(this.props);
    }
  };
}

function mapStateToProps(state) {
  return {};
}

// export default connect(
//   mapStateToProps,
//   {
//     ...NavActions
//   }
// )(Navbar);
export default Navbar;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: colors.whiteColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrayColor
  },
  navBarText: {
    alignSelf: "center",
    fontSize: 24,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "transparent",
    
    color:colors.whiteColor,
    marginLeft:'15%'
  },
  rightParentView: {
    flex: 1,
    maxHeight: "50%",
    marginLeft: "3%",
    marginRight: "3%",
    alignItems: "flex-end",
    backgroundColor: "transparent"
  }
});
