import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Button
} from "react-native";

function InteractionsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [interaction, setInteraction] = useState({
    name: '',
    description: '',
    price: 0,
    limit: 0
  });

  function onChangeTextField(key, e) {
    setInteraction({
      ...interaction,
      [key]: e
    })
  }
  
  function addInteraction() {
    console.log("...")
  }

   /*
  function addInteraction(){
    axios.post('http://localhost:3000/addinteraction', {
      'name': interaction.name,
      'description': interaction.description,
      'price': interaction.price,
      'limit': interaction.limit
    }, {withCredentials: true}).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    }).then(() => {
      navigation.navigate('Home');
    });
  }
  */

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <Text>Name</Text>
            <TextInput style={styles.inputBox} 
              backgroundColor='#1c313a' 
              placeholder="Type here..."
              placeholderTextColor = "black"
              onChangeText={e => onChangeTextField('name', e)}
            />
            <Text>Description</Text>
            <TextInput style={styles.inputBox} 
              backgroundColor='#1c313a' 
              placeholder="Type here..."
              placeholderTextColor = "black"
              onChangeText={e => onChangeTextField('description', e)}
            />
            <Text>Price</Text>
            <TextInput style={styles.inputBox} 
              backgroundColor='#1c313a' 
              placeholder="Type here..."
              placeholderTextColor = "black"
              onChangeText={e => onChangeTextField('price', e)}
            />
            <Text>Limit</Text>
            <TextInput style={styles.inputBox} 
              backgroundColor='#1c313a' 
              placeholder="Type here..."
              placeholderTextColor = "black"
              onChangeText={e => onChangeTextField('limit', e)}
            />
            <Button title="Submit" onPress={addInteraction} />
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default InteractionsScreen