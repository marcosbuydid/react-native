import { useRef, useState } from "react";

enum ArithmeticOperators {
    sum, subtract, multiply, divide
}

export const useCalculator = () => {
    const [screenNumber, setScreenNumber] = useState('0');
    const [lastScreenNumber, setLastScreenNumber] = useState('0');

    const lastArithmeticOperation = useRef<ArithmeticOperators>()

    const clearScreen = () => {
        setScreenNumber('0');
        setLastScreenNumber('0');
    }

    const screenDigits = (buttonNumber: string) => {

        //restrict one decimal point only
        if (screenNumber.includes('.') && buttonNumber === ('.')) return;

        if (screenNumber.startsWith('0') || screenNumber.startsWith('-0')) {

            //is a decimal character?
            if (buttonNumber === '.') {
                setScreenNumber(screenNumber + buttonNumber);
            }
            //has aditional ceros and there is a decimal point?
            else if (buttonNumber === '0' && screenNumber.includes('.')) {
                setScreenNumber(screenNumber + buttonNumber);
            }
            //number is not cero and there's not a decimal point
            else if (buttonNumber !== '0' && !screenNumber.includes('.')) {
                setScreenNumber(buttonNumber);
            }
            //avoid multiples ceros before decimal point 
            else if (buttonNumber === '0' && !screenNumber.includes('.')) {
                setScreenNumber(screenNumber);
            }
            else {
                setScreenNumber(screenNumber + buttonNumber)
            }
        }
        else {
            setScreenNumber(screenNumber + buttonNumber)
        }
    }

    const definePositiveOrNegativeNumbers = () => {
        if (screenNumber.includes('-')) {
            setScreenNumber(screenNumber.replace('-', ''))
        }
        else {
            setScreenNumber('-' + screenNumber)
        }
    }

    const deleteLastScreenDigit = () => {

        let negativeChar = '';
        let temporalNumber = screenNumber;
        if (screenNumber.includes('-')) {
            negativeChar = '-';
            temporalNumber = screenNumber.substring(1);
        }

        if (screenNumber.length > 1) {
            setScreenNumber(negativeChar + temporalNumber.slice(0, -1));
        }
        else {
            setScreenNumber('0');
        }

    }

    const rememberLastInputNumber = () => {
        if (screenNumber.endsWith('.')) {
            setLastScreenNumber(screenNumber.slice(0, -1));
        }
        else {
            setLastScreenNumber(screenNumber);
        }

        setScreenNumber('0');
    }

    const divide = () => {
        rememberLastInputNumber();
        lastArithmeticOperation.current = ArithmeticOperators.divide;
    }

    const multiply = () => {
        rememberLastInputNumber();
        lastArithmeticOperation.current = ArithmeticOperators.multiply;
    }

    const subtract = () => {
        rememberLastInputNumber();
        lastArithmeticOperation.current = ArithmeticOperators.subtract;
    }

    const sum = () => {
        rememberLastInputNumber();
        lastArithmeticOperation.current = ArithmeticOperators.sum;
    }

    const arithmeticOperation = () => {
        const firstElement = Number(screenNumber);
        const secondElement = Number(lastScreenNumber)

        switch (lastArithmeticOperation.current) {
            case ArithmeticOperators.sum:
                setScreenNumber(`${firstElement + secondElement}`);
                break;

            case ArithmeticOperators.subtract:
                setScreenNumber(`${secondElement - firstElement}`);
                break;

            case ArithmeticOperators.multiply:
                setScreenNumber(`${firstElement * secondElement}`);
                break;

            case ArithmeticOperators.divide:
                setScreenNumber(`${secondElement / firstElement}`);
                if (firstElement === 0) {
                    setScreenNumber("Error");
                }
                break;
        }
        setLastScreenNumber('0');

        //if we press multiple times equal button
        if(screenNumber.includes("Error")){
            setScreenNumber("Error");
        }

        if(lastScreenNumber.includes("Error")){
            setScreenNumber("Error");
        }
    }


    //we return all elements our custom hook expose
    return {
        screenNumber,
        lastScreenNumber,
        clearScreen,
        definePositiveOrNegativeNumbers,
        deleteLastScreenDigit,
        divide,
        multiply,
        subtract,
        sum,
        screenDigits,
        arithmeticOperation,
    }
}
