import React from 'react';
import { Text, View } from 'react-native';
import { buttonColor, buttonWidth, CalcButton } from '../components/CalcButton';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

export const MainScreen = () => {

    const {
        memory,
        number,
        handleReset,
        handleSign,
        handleDelete,
        handleNumber,
        handleOp,
        handleResolve,
    } = useCalculator();

    return (
        <View style={ styles.container }>
            {
                memory !== '0' &&
                <Text style={ styles.memory }>{ memory }</Text>
            }
            <Text
                style={ styles.result }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                { number }
            </Text>
            <View style={ styles.buttonRow }>
                <CalcButton text="C"    bgColor={ buttonColor.SecondaryOP } action={ handleReset } />
                <CalcButton text="+/-"  bgColor={ buttonColor.SecondaryOP } action={ handleSign } />
                <CalcButton text="del"  bgColor={ buttonColor.SecondaryOP } action={ handleDelete } />
                <CalcButton text="÷"    bgColor={ buttonColor.PrimaryOP } action={ handleOp } />
            </View>
            <View style={ styles.buttonRow }>
                <CalcButton text="7" action={ handleNumber } />
                <CalcButton text="8" action={ handleNumber } />
                <CalcButton text="9" action={ handleNumber } />
                <CalcButton text="x" bgColor={ buttonColor.PrimaryOP } action={ handleOp } />
            </View>
            <View style={ styles.buttonRow }>
                <CalcButton text="4" action={ handleNumber } />
                <CalcButton text="5" action={ handleNumber } />
                <CalcButton text="6" action={ handleNumber } />
                <CalcButton text="-" bgColor={ buttonColor.PrimaryOP } action={ handleOp } />
            </View>
            <View style={ styles.buttonRow }>
                <CalcButton text="1" action={ handleNumber } />
                <CalcButton text="2" action={ handleNumber } />
                <CalcButton text="3" action={ handleNumber } />
                <CalcButton text="+" bgColor={ buttonColor.PrimaryOP } action={ handleOp } />
            </View>
            <View style={ styles.buttonRow }>
                <CalcButton text="0" width={ buttonWidth.Double } action={ handleNumber } />
                <CalcButton text="." action={ handleNumber } />
                <CalcButton text="=" bgColor={ buttonColor.PrimaryOP } action={ handleResolve } />
            </View>
        </View>
    );
};
