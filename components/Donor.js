import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';



function DonorProfile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Fundraiser')}>
                <Text style={styles.buttonText}>View Tim Cook's Profile</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      }
})

DonorProfile.PropTypes = 1;


export default DonorProfile