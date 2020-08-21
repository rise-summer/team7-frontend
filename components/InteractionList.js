import React from "react";
import { Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

// this.state = {
//   isActive: true
// }

var interactions = [
  {
    name: "Resume Review",
    description:
      "Get a professional to review your resume in preparation for industry",
    cost: "$10",
  },
  {
    name: "Portfolio Help",
    description:
      "After years in the industry, I can pass on my advice for a good design portfolio to you",
    cost: "$20",
  },
  {
    name: "Coffee Chat",
    description:
      "I'd love to grab a cup of coffee and talk about any questions you have about my career, advice, or life in general",
    cost: "$10",
  },
  {
    name: "Shadow at Work",
    description: "Come join me for a quick tour of what I do for a living.",
    cost: "$50",
  },
];

function interactionList(props) {
  const availableInteractions = props.isOn;

  if (availableInteractions) {
    if (interactions.length != 0) {
      return interactionsListedOut(props);
    } else {
      return <Text>No interactions currently available</Text>;
    }
  }
  return (
    <Text
      style={{
        fontFamily: "Helvetica-Bold",
        fontSize: 30,
      }}
    >
      Im not currently taking any requests
    </Text>
  );
}

interactionList.propTypes = {
  isOn: PropTypes.bool.isRequired,
};

function interactionsListedOut() {
  return (
    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
      {interactions.map(function (interaction, index) {
        return (
          <View key={index} style={styles.container}>
            <Text key={index.key} style={styles.interactionHeader}>
              {" "}
              {interaction.name}{" "}
            </Text>
            <Text key={index.key} style={styles.interactionText}>
              {" "}
              {interaction.description}{" "}
            </Text>
            <Text key={index.key} style={styles.interactionText}>
              {" "}
              {interaction.cost}{" "}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

// function interactionsListedOut(props) {
//   return (
//     <Box maxW="sm" borderWidth="1px" rounded="lg" backgroundColor="red">
//       <Text> HI </Text>
//     </Box>
//   )
// }

const styles = StyleSheet.create({
  interactionHeader: {
    fontFamily: "Helvetica-Bold",
    fontSize: 20,
    // alignItems: "baseline",
  },
  interactionText: {
    fontFamily: "Helvetica-Light",
    fontSize: 20,
    margin: 10,
    textAlign: "left",
  },
  image: {
    height: 100,
    width: 300,
  },
  toggleControl: {
    color: "gray",
  },
  container: {
    flex: 1,
    backgroundColor: "#c8c8c8", // Set your own custom Color
    flexDirection: "column",
    paddingTop: 20,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    alignContent: "center",
  },
});

export default interactionList;
