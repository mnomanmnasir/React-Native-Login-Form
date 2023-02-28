import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import CameraApp from '../screens/Camera';


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen name="Contact" component={Contact} />

                <Stack.Screen name="About" component={About} />

                <Stack.Screen name="Camera" component={CameraApp} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;  