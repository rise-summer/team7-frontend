import React from "react";
import { Text, View } from "react-native";

function bio() {
  return (
    <View style={{ flex: 1, flexDirection: "column", position: "absolute" }}>
      <Text
        style={{
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontSize: 18,
          fontWeight: 500,
          color: "#848484",
          paddingTop: 300,
        }}
      >
        ABOUT
      </Text>

      <Text
        style={{
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontSize: 16,
          fontWeight: "normal",
          paddingTop: 12,
          lineHeight: 20,
        }}
      >
        I currently work on the Google Maps team. I studied Computer Science at
        Carnegie Mellon University and I love hiking and baking in my free time!
      </Text>
    </View>
  );
}

export default bio;
