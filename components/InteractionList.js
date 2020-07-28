import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
];

export default function interactionList(props) {
  var arr = [1, 2, 3, 4, 5];
  return (
    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
      {interactions.map(function (interaction, index) {
        return (
          <View style={styles.container}>
            <Text
              key={index}
              style={
                props.isOn
                  ? [styles.toggleControl, styles.interactionHeader]
                  : styles.interactionHeader
              }
            >
              {" "}
              {interaction.name}{" "}
            </Text>
            <Text
              key={index}
              style={
                props.isOn
                  ? [styles.toggleControl, styles.interactionText]
                  : styles.interactionText
              }
            >
              {" "}
              {interaction.description}{" "}
            </Text>
            <Text
              key={index}
              style={
                props.isOn
                  ? [styles.toggleControl, styles.interactionText]
                  : styles.interactionText
              }
            >
              {" "}
              {interaction.cost}{" "}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  interactionHeader: {
    fontFamily: "Helvetica-Bold",
    fontSize: 20,
    alignItems: "baseline",
    // alignContent: "center",
  },
  interactionText: {
    fontFamily: "Helvetica-Light",
    fontSize: 20,
    // color: "red"
    // alignContent: 'flex-start',
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
