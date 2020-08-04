import React from "react";
import { View } from "react-native";
import { Button } from "@chakra-ui/core";

function DonorProfile({ navigation }) {
  const InteractionList = (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        variantColor="green"
        variant="solid"
        onClick={() => navigation.navigate("Fundraiser")}
        border="0px"
        size="lg"
      >
        View Profile
      </Button>
    </View>
  );
  return InteractionList;
}

// const styles = StyleSheet.create({
//   button: {
//     width: 300,
//     backgroundColor: "#1c313a",
//     borderRadius: 10,
//     marginVertical: 10,
//     marginHorizontal: 15,
//     paddingVertical: 13,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#ffffff",
//     textAlign: "center",
//   },
// });

DonorProfile.PropTypes = 1;

export default DonorProfile;
