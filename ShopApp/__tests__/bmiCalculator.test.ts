import {calculateBMI, getBMICategory} from "../src/utils/bmiCalculator";

describe('BMI Calculator', () => {
    test('calculate BMI correctly', () => {
        expect(calculateBMI(70, 175)).toBe(22.9);
        expect(calculateBMI(90, 180)).toBe(27.8);
    })

    test('throws error for invalid inputs', () => {
        expect(() => calculateBMI(-1,175)).toThrow('Weight and height must be positive numbers');
        expect(() => calculateBMI(70, 0)).toThrow('Weight and height must be positive numbers')
    })

    test('return correct BMI category', () => {
        expect(getBMICategory(18)).toBe('Underweight');
        expect(getBMICategory(22)).toBe('Normal weight');
        expect(getBMICategory(27)).toBe('Overweight');
        expect(getBMICategory(32)).toBe('Obese');
    })
})
