export const calculateBMI = (weight: number, height: number): number => {
    if (weight <= 0 || height <= 0) {
        throw new Error('Weight and height must be positive numbers');
    }
    const heightInMeters = height / 100;
    return Number((weight / (heightInMeters * heightInMeters)).toFixed(1));
};

export const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
};
