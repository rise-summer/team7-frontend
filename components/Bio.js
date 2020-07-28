import React from "react";
import { Text, View } from "react-native";

function bio() {
    return (
    <View style={{ flex: 3, justifyContent: "space-between", paddingTop: 20}}>
        <Text
        style={{
            fontFamily: "Helvetica-Bold",
            fontSize: 25,
            paddingVertical: 20,
        }}
        >
        Bio
        </Text>

        <Text
        style={{
            fontFamily: "Helvetica-Light",
            fontSize: 25,
            paddingVertical: 10,
        }}
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna ac
        consequat vel mi faucibus magna quisque vitae sit.
        </Text>
    </View>
    )
}

export default bio