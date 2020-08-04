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
          width: 180,
          height: 180,
          borderRadius: 400 / 2,
          paddingLeft: 30,
        }}
      />
      <Text
        style={{
          fontFamily: "Helvetica-Bold",
          fontSize: 45,
          paddingTop: 30,
        }}
      >
        Tim Cook
      </Text>
      <Text
        style={{
          fontFamily: "Helvetica",
          fontSize: 25,
          paddingTop: 8,
        }}
      >
        @timcook
      </Text>
    </View>
  );
}

export default nameBio;
