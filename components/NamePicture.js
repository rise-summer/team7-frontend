import React from "react";
import { Text, View, Image } from "react-native";

function nameBio(props) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Image
        source={{
          uri:
            `https://avatars.dicebear.com/api/jdenticon/${props.name}.svg?w=163&h=163`,
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
        {props.name}
      </Text>
      <Text
        style={{
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontSize: 21,
          fontWeight: "normal",
        }}
      >
        {props.occupation}
      </Text>
    </View>
  );
}

export default nameBio;
