import React, { useEffect, useState } from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import DropdownComponent from "./dropdown-input";
import cd from '../conversion-data.json'

const FormBox = () => {
    // console.log(cd["length"]);
    const [unit, setUnit] = useState(cd["unit_names"][0]["value"]);
    const [from_unit, setFrom_unit] = useState(null);
    const [to_unit, setTo_unit] = useState(null);
    const [inputData, setInputData] = useState(null);
    const [outputData, setOutputData] = useState('0.00');

    useEffect(() => {
        setFrom_unit(cd[unit][0]["value"]);
        setTo_unit(cd[unit][0]["value"]);
        setOutputData('0');
        setInputData(null);
    }, [unit])

    const calculate_conversion = (value) => {
        setInputData(value);
        let to_litre = Number(value) / from_unit;
        let to_final = to_litre * to_unit;
        setOutputData(to_final);
    }

    return (
        <View style={styles.container}>
            <DropdownComponent
                dta={cd["unit_names"]}
                value={unit}
                setValue={setUnit}
            />
            <DropdownComponent
                dta={cd[unit]}
                value={from_unit}
                setValue={setFrom_unit}
            />
            <TextInput
                style={styles.numberInput}
                value={inputData}
                placeholder="0"
                onChangeText={calculate_conversion}
                inputMode="numeric"
            />
            <DropdownComponent
                dta={cd[unit]}
                value={to_unit}
                setValue={setTo_unit}
            />
            <Text style={styles.outputData}>
                {outputData}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    numberInput: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        margin: 10
    },
    outputData: {
        fontSize: 30,
        margin: 10,
        textAlign: 'center'
    }
})

export default FormBox;