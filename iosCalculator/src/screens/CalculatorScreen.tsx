import React from 'react'
import { Text, View } from 'react-native';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/CalculatorTheme';


export const CalculatorScreen = () => {

    //we define all elements our useCalculator hook expose
    const {
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
    } = useCalculator();

    return (
        <View style={styles.container}>
            {
                //we don't show last screen number if it's equal cero
                (lastScreenNumber !== '0') && (
                    <Text
                        style={styles.smallResult}> {lastScreenNumber}
                    </Text>
                )
            }

            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            > {
                    screenNumber}
            </Text>

            <View style={styles.row}>
                <CalculatorButton text="C" color="#9B9B9B" action={clearScreen} />
                <CalculatorButton text="+/-" color="#9B9B9B" action={definePositiveOrNegativeNumbers} />
                <CalculatorButton text="del" color="#9B9B9B" action={deleteLastScreenDigit} />
                <CalculatorButton text="/" color="#FF9427" action={divide} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="7" action={screenDigits} />
                <CalculatorButton text="8" action={screenDigits} />
                <CalculatorButton text="9" action={screenDigits} />
                <CalculatorButton text="x" color="#FF9427" action={multiply} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="4" action={screenDigits} />
                <CalculatorButton text="5" action={screenDigits} />
                <CalculatorButton text="6" action={screenDigits} />
                <CalculatorButton text="-" color="#FF9427" action={subtract} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="1" action={screenDigits} />
                <CalculatorButton text="2" action={screenDigits} />
                <CalculatorButton text="3" action={screenDigits} />
                <CalculatorButton text="+" color="#FF9427" action={sum} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="0" action={screenDigits} width />
                <CalculatorButton text="." action={screenDigits} />
                <CalculatorButton text="=" color="#FF9427" action={arithmeticOperation} />
            </View>

        </View>
    )
}
