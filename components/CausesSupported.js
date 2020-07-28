import React from "react";
import { Text } from "react-native";

function Causes() {
    return (
    <>
    <Text
        style={{
          fontFamily: "Helvetica-Bold",
          fontSize: 25,
          paddingTop: 20,
        }}
      >
        Causes they care about
    </Text>
    <CauseList/>
    </>
    );
}

function CauseList() {
    return (
        <ul
            style={{
                fontFamily: "Helvetica-Light",
                fontSize: 25
            }}>
                
                <li>
                    Red Cross
                </li>
                <li>
                    Unicef
                </li>
                <li>
                    Girls Who Code
                </li>
        </ul>
    )
}

export default Causes;