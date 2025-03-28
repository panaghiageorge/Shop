import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type ResultsScreenRouteProp = RouteProp<{ params: { bmi: number; category: string } }, 'params'>;

interface Props {
    route: ResultsScreenRouteProp;
}

export const ResultsScreen: React.FC<Props> = ({ route }) => {
    const { bmi, category } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your BMI Result</Text>
            <Text style={styles.result}>BMI: {bmi}</Text>
            <Text style={styles.category}>Category: {category}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
    result: { fontSize: 20 },
    category: { fontSize: 18, marginTop: 10 },
});
