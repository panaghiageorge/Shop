import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: 'numeric' | 'default';
}

export const InputField: React.FC<InputFieldProps> = ({
                                                          placeholder,
                                                          value,
                                                          onChangeText,
                                                          keyboardType = 'numeric',
                                                      }) => (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
    />
);

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        width: '80%',
    },
});
