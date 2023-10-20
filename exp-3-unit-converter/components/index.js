import React, { useEffect, useState } from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import DropdownComponent from "./dropdown-input";
import conversion_data from '../conversion-data.json'

const FormBox = () => {
    // console.log(conversion_data["length"]);
    const [unit, setUnit] = useState(conversion_data["unit_names"][0]["value"]);
    const [from_unit, setFrom_unit] = useState(null);
    const [to_unit, setTo_unit] = useState(null);

    useEffect(() => {
        setFrom_unit(conversion_data[unit][0]["value"]);
        setTo_unit(conversion_data[unit][0]["value"]);
    }, [unit])

    return (
        <View>
            <DropdownComponent dta={conversion_data["unit_names"]} value={unit} setValue={setUnit} />
            <DropdownComponent dta={conversion_data[unit]} value={from_unit} setValue={setFrom_unit} />
            <DropdownComponent dta={conversion_data[unit]} value={to_unit} setValue={setTo_unit} />
        </View>
    )
}

const styles = StyleSheet.create({
})

export default FormBox;