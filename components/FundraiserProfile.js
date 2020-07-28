import React, { useState } from "react";
import { View, Text } from "react-native";

import NamePicture from "./NamePicture";
import Bio from "./Bio";
import CausesSupported from "./CausesSupported";
import InteractionList from "./InteractionList";
import InteractionButton from "./InteractionButton";


// const causes = [
//   "https://www.wamc.org/sites/wamc/files/styles/x_large/public/202002/1497416271_de64.jpg",
//   "https://www.onlinevolunteering.org/sites/default/files/unicef-logo.jpg",
// ];

function Body() {
  const [value, setValue] = useState(false);
  return (
    // Vertical layout of entire profile
    <View
      style={{
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingVertical: 180,
        paddingHorizontal: 280,
      }}
    >
      <NamePicture />
      <View style={{ flexDirection: "row" }}>
        <Text style={{fontSize: 30, paddingTop: 15, paddingRight: 15}}>Accepting Interactions</Text>
        <InteractionButton isOn={value} handleToggle={() => setValue(!value)} />

      </View>

      <Bio />
      <CausesSupported />
      {/* <ItemCard/> */}
      <InteractionList isOn={value} />
    </View>
  );
}

export default Body;
