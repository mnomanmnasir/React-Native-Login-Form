import React from 'react'
import { StyleSheet, ActivityIndicator, TextInput, FlatList, Text, TouchableOpacity, View, Image, ScrollView, Button, ImageBackground } from 'react-native';
import Navigation from '../config/Navigation';

function Contact() {
return(
    <View style={styles.container}>
        <Text style={{fontSize: 32}}>
            Contact 
        </Text>
    </View>
)
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
}
})  

export default Contact;