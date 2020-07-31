import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';
import "../css/InteractionButton.css";

function RequestsScreen({navigation}) {
    const [value, setValue] = useState(false);
    const InteractionButton = ({ isOn, handleToggle }) => {
        return (
          <>
            <input
              checked={isOn}
              onChange={handleToggle}
              className="react-switch-checkbox"
              id={`react-switch-new`}
              type="checkbox"
            />
            <label
              style={{ background: isOn && "#06D6A0", marginTop: 20}}
              className="react-switch-label"
              htmlFor={`react-switch-new`}
            >
              <span className={`react-switch-button`} />
            </label>
          </>
        );
    };

    return (
        <View>
            <View>Interactions</View>
            <InteractionButton isOn={value} handleToggle={() => setValue1(!value)} />
        </View>
    )
}

export default RequestsScreen