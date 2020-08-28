import React, { useState, useEffect } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';
import {
  Avatar
} from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

function EditProfileScreen({ navigation }) {

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const stuff = useEffect(async () => await getPermissionAsync());

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        updateProfile({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const [profile, updateProfile] = useState({
    image: 'https://api.adorable.io/avatars/80/abott@adorable.png',
    name: '',
    description: '',
    organization: '',
    email: ''
  });

  function onChangeTextField(key, e) {
    updateProfile({
      ...profile,
      [key]: e
    });
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="name" value={profile.name} onChangeText={e => onChangeTextField('name', e)}/>  
      <TextInput placeholder="description" value={profile.description} onChangeText={e => onChangeTextField('description', e)}/>  
      <TextInput placeholder="organization" value={profile.organization} onChangeText={e => onChangeTextField('organization', e)}/>  
      <TextInput placeholder="email" value={profile.email} onChangeText={e => onChangeTextField('email', e)}/>  
      <Avatar.Image 
        source={{uri: profile.image}}
        size={80}
      />
      <Button title="Select Profile Image" onPress={_pickImage}/>
      <Button title="Submit"
        onPress={() => {
          navigation.navigate('YourProfile', { 
            status: true,
            name: profile.name,
            description: profile.description,
            organization: profile.organization,
            email: profile.email
          });
        }}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
});

export default EditProfileScreen

/*
  const selectImage = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      updateProfile({image: path});
    })
  }
  */

  /*
  const selectImage = async () => {
    ImagePicker.openPicker({noData:true, mediaType:'photo'}, (response) => {
      console.log('Response =', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        updateProfile({
          image: response.uri,
        });
      }
    })
  }
  */

  /*
  
  */