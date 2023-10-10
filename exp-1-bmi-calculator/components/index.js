import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";

const BmiForm = () => {
    //Defined useStates to keep track of values 
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');
    // the func calculates bmi and updates the bmi value
    function calculate_bmi() {
        let h = Number(height) / 100;
        let w = Number(weight);
        let r = (w / (h * h)).toFixed(1);
        if (r > 0) {
            setBmi("BMI: " + r);
        } else {
            setBmi('Invalid data');
        }
    }
    return (
        <View>
            <Text style={styles.label}>
                Height
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                keyboardType="number-pad"
                placeholder="in cms"
            />
            <Text style={styles.label}>Weight</Text>
            <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                keyboardType="number-pad"
                placeholder="in kgs"
            />
            <Button
                style={styles.button}
                title="Compute BMI"
                onPress={calculate_bmi}
            />
            <Text style={styles.bmiLabel}>
                {bmi}
            </Text>
        </View >
    );
};

const styles = StyleSheet.create({
    input: {
        flex: 0,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        margin: 8,
        padding: 8,
        width: 300,
    },
    button: {
        borderColor: 'blue',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    bmiLabel: {
        fontSize: 40,
        margin: 10,
        justifyContent: 'center'
    }
})

export default BmiForm;