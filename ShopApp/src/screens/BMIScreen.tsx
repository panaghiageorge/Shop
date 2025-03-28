import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputField } from '../components/InputField';
import { calculateBMI, getBMICategory } from '../utils/bmiCalculator';

export const BMIScreen: React.FC = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const navigation = useNavigation();

    const handleCalculate = () => {
        try {
            const bmi = calculateBMI(Number(weight), Number(height));
            const category = getBMICategory(bmi);
            navigation.navigate('Results', { bmi, category });
        } catch (error) {
            alert('Please enter valid weight and height');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculate Your BMI</Text>
            <InputField
                placeholder="Weight (kg)"
                value={weight}
                onChangeText={setWeight}
            />
            <InputField
                placeholder="Height (cm)"
                value={height}
                onChangeText={setHeight}
            />
            <Button title="Calculate" onPress={handleCalculate} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});
