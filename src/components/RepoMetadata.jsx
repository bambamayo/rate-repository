import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import Text from "./Text";

const styles = StyleSheet.create({
  metaContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const RepoMetadata = (props) => {
  return (
    <View style={styles.metaContainer}>
      <View>
        <Text fontWeight="bold">{props.repoStars}</Text>
        <Text fontSize="subheading">Stars</Text>
      </View>
      <View>
        <Text fontWeight="bold">{props.repoForks}</Text>
        <Text fontSize="subheading">Forks</Text>
      </View>
      <View>
        <Text fontWeight="bold">{props.repoReviews}</Text>
        <Text fontSize="subheading">Reviews</Text>
      </View>
      <View>
        <Text fontWeight="bold">{props.repoRating}</Text>
        <Text fontSize="subheading">Rating</Text>
      </View>
    </View>
  );
};

RepoMetadata.propTypes = {
  repoStars: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repoForks: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repoReviews: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repoRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default RepoMetadata;
