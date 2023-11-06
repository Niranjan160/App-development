import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Task from './components/task';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState(null);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
      }}
        keyboardShouldPersistTaps='handled'>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>
            Task List's
          </Text>
          <View style={styles.tasklist}>
            {/* tasks here... */}

          </View>
        </View >

      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tasklist: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
