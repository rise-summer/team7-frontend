import React, { useState } from "react";
import { View } from "react-native";

import NamePicture from "./NamePicture";
import Bio from "./Bio";
import CausesSupported from "./CausesSupported";
import InteractionList from "./InteractionList";
import SocialLinks from "./SocialLinks";

// import Modal from "./Modal"

// const causes = [
//   "https://www.wamc.org/sites/wamc/files/styles/x_large/public/202002/1497416271_de64.jpg",
//   "https://www.onlinevolunteering.org/sites/default/files/unicef-logo.jpg",
// ];

function Body() {
  const [value] = useState(false);
  // const [show,setShow] = useState(false);
  return (
    // Vertical layout of entire profile
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        paddingLeft: 201,
        paddingTop: 64,
        paddingRight: 84,
      }}
    >
      <View style={{ width: "20%" }}>
        <NamePicture />
        <Bio />
        <SocialLinks />
      </View>

      <View style={{ width: "70%" }}>
        <CausesSupported />
        <InteractionList isOn={value} />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   row: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignItems: "flex-start",
//     // paddingVertical: 180,
//     paddingHorizontal: 280,
//   },
//   column: {
//     flexDirection: "column",
//   },
// });

export default Body;

// ModalConductor.js
// global variable triggeredModal

// switch(triggererdModal)
//   case ModalTypeA:
//       return <ModalTypeA/>
//   case ModalTypeB:
//       return <ModalTypeB/>
//   default:
//       return <></>
