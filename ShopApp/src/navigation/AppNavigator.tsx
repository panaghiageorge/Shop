import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BMIScreen } from '../screens/BMIScreen';
import { ResultsScreen } from '../screens/ResultsScreen';

const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="BMI">
            <Stack.Screen name="BMI" component={BMIScreen} />
            <Stack.Screen name="Results" component={ResultsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);
