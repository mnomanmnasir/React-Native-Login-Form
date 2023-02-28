import React from 'react'
import { StyleSheet, ActivityIndicator, TextInput, FlatList, Text, TouchableOpacity, View, Image, ScrollView, Button, ImageBackground } from 'react-native';
import Navigation from '../config/Navigation';

function About(props) {
return(
    <View style={styles.container}>
        <Text style={{fontSize: 32}}>
            About 
    
        </Text>
        {/* <Button onPress={()=>props.navigation.navigate('Home')} title='Go to Home'> </Button> */}
    
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

export default About;