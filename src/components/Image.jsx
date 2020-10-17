import React from "react";
import PropTypes from "prop-types";
import { Image as NativeImage } from "react-native";

const Image = (props) => {
  return <NativeImage style={props.style} source={{ uri: props.uri }} />;
};

Image.propTypes = {
  style: PropTypes.object.isRequired,
  uri: PropTypes.string.isRequired,
};

export default Image;
