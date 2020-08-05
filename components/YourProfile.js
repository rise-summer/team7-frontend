import React, { useState, useEffect } from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function YourProfileScreen({ navigation, route }) {
    const initialUser = {id: null, name: 'John Doe', description: 'SWE @ Google', organization: 'Red Cross Foundation', email: 'john_doe@email.com'}
    const [currentUser, setCurrentUser] = useState(initialUser)

    function changeUserField(new_name, new_description, new_organization, new_email) {
      setCurrentUser({
        name: new_name,
        description: new_description,
        organization: new_organization,
        email: new_email
      });
    }

    useEffect(() => {
      if (route.params?.status) {
        console.log("Done")
        changeUserField(route.params.name, route.params.description, route.params.organization, route.params.email)
      } 
    }, [route.params?.status, route.params?.name, route.params?.description, route.params?.organization, route.params?.email])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image 
                        source={{
                        uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                        }}
                        size={80}
                    />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                        marginTop:15,
                        marginBottom: 5,
                        }]}>{currentUser.name}</Title>
                        <Caption style={styles.caption}>{currentUser.description}</Caption>
                    </View>
                    </View>
                </View>
            
                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="#777777" size={20}/>
                        <Text style={{color:"#777777", marginLeft: 20}}>{currentUser.organization}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20}/>
                        <Text style={{color:"#777777", marginLeft: 20}}>{currentUser.email}</Text>
                    </View>
                </View>
            </View>
        
            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>$140</Title>
                    <Caption>Amount Raised</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Interactions</Caption>
                </View>
            </View>
        
            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => navigation.navigate('Interactions')}>
                <View style={styles.menuItem}>
                    <Icon name="heart-outline" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>Services Offered</Text>
                </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="share-outline" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>Tell Your Friends</Text>
                </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="account-check-outline" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>Ratings</Text>
                </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => navigation.navigate('EditProfile')}>
                <View style={styles.menuItem}>
                    <Icon name="settings-outline" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>Edit Profile</Text>
                </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
      );
    };

export default YourProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
});