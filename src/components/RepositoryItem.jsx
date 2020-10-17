import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Image from "./Image";
import RepoMetadata from "./RepoMetadata";
import Text from "./Text";
import AppButton from "./AppButton";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    backgroundColor: "#fff",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  detailsRight: {
    paddingLeft: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  button: {
    alignSelf: "flex-start",
    flexBasis: 1,
  },
});

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image style={styles.image} uri={props.imageuri} />
        <View style={styles.detailsRight}>
          <Text
            style={{ marginVertical: 5 }}
            fontSize="subheading"
            fontWeight="bold"
          >
            {props.name}
          </Text>
          <Text style={{ marginVertical: 6 }} fontSize="subheading">
            {props.description}
          </Text>
          <AppButton buttonForm={false} title={props.language} />
        </View>
      </View>
      <RepoMetadata
        repoStars={props.repoStars}
        repoForks={props.repoForks}
        repoReviews={props.repoReviews}
        repoRating={props.repoRating}
      />
    </View>
  );
};

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  imageuri: PropTypes.string.isRequired,
  repoStars: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repoForks: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repoReviews: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repoRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default RepositoryItem;
