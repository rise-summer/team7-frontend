import React from "react";
import {Text, View, Image } from "react-native";

function nameBio() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Image
        source={{
          uri:
            "https://www.apple.com/leadership/images/bio/tim-cook_image.png.og.png?1594405778182",
        }}
        style={{ width: 180, height: 180, borderRadius: 400 / 2 }}
      />
      <Text
        style={{
          fontFamily: "Helvetica-Bold",
          fontSize: 50,
          paddingVertical: 30,
          marginHorizontal: 32,
        }}
      >
        Tim Cook
      </Text>
    </View>
  )
}

export default nameBio;
