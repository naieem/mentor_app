import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { colors } from "../../../themes";
import PropTypes from "prop-types";

const cameraIcon = require("../../../images/camera.png");

var ImagePicker = require("react-native-image-picker");
var images;
export default class Camera extends React.PureComponent {
  constructor(props) {
    super(props);
    images = new Array();
    this.state = { selectedImages: [] };
  }

  render() {
    // console.log(
    //   "Selected state image ",
    //   JSON.stringify(this.state.selectedImages)
    // );

    const { containerStyle, imageHeight, imageWidth, showText } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={this.onCameraIconPress}
      >
        {showText && (
          <Text style={styles.uploadPhotosStyle}>Upload Photos </Text>
        )}
        <View style={{ flexDirection: "row" }}>
          <Image
            source={cameraIcon}
            style={{ width: imageWidth, height: imageHeight }}
          />
          {this.state.selectedImages.map(
            (item, index) =>
              item.uri && (
                <Image
                  source={{ uri: item.uri }}
                  style={{
                    marginLeft: 10,
                    width: imageWidth,
                    height: imageHeight
                  }}
                  key={index}
                />
              )
          )}
        </View>
      </TouchableOpacity>
    );
  }

  onCameraIconPress = () => {
    var options = {
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      // console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // let source = { uri: response.uri };
        // const data = this.state.selectedImages;
        var tempImages = new Array();
        images.push(response);
        tempImages = tempImages.concat(images);
        this.setState({ selectedImages: tempImages });
        this.props.onImageSelected(tempImages);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    justifyContent: "center"
  },
  uploadPhotosStyle: {
    fontSize: 18,
    fontFamily: "GoogleSans-Regular",
    fontWeight: "300",
    color: colors.lightGrayColor
  }
});
Camera.defaultProps = {
  imageWidth: 75,
  imageHeight: 75,
  showText: true
};

Camera.PropTypes = {
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  showText: PropTypes.bool
};
