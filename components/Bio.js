import React from "react";
import { Text, View } from "react-native";

function bio(props) {
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
        {props.bio}
      </Text>
    </View>
  );
}

export default bio;
