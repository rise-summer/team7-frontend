import React from "react";
import { Text, View } from "react-native";

function NotFound() {
  return (
    <View style={{ flex: 1, flexDirection: "column", position: "absolute" }}>
      <Text>
        Page could not be found
      </Text>
    </View>
  );
}

export default NotFound;
