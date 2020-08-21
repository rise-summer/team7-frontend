import React from "react";
import { Text, View, Image } from "react-native";

function nameBio() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Image
        source={{
          uri:
            "https://www.apple.com/leadership/images/bio/tim-cook_image.png.og.png?1594405778182",
        }}
        style={{
          width: 163,
          height: 163,
          borderRadius: 400 / 2,
        }}
      />
      <Text
        style={{
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontSize: 25,
          fontWeight: 500,
          paddingTop: 25,
        }}
      >
        Devon Lane
      </Text>
      <Text
        style={{
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontSize: 21,
          fontWeight: "normal",
        }}
      >
        Product manager at Google
      </Text>
    </View>
  );
}

export default nameBio;
