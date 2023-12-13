import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [goal, setGoal] = useState(0);
  const [customGoal, setCustomGoal] = useState('');
const [para,setpara]=useState()
  useEffect(() => {
    checkGoal();
  }, [inputValue]);

  const checkGoal = () => {
    if (inputValue >= goal && goal>=1000) {
     if(goal==inputValue || goal>=inputValue){
      setpara(`Congratulations!  You have reached your goal of ${goal} ml!`)
     } 
    }
  };

  const handleAdd = (amount) => {
    if(goal>=1000){
    setInputValue(inputValue + amount);
    }
  };

  const setCustomGoalHandler = () => {
    const newGoal = parseInt(customGoal, 10);
    if (!isNaN(newGoal) && newGoal >= 1000) {
      setGoal(newGoal);
      Alert.alert('Goal Set', `Your new goal is ${newGoal} ml.`);
      setCustomGoal('')
    } else {
      Alert.alert('Minimum 1000 ml is allowed');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Water Tracker</Text>
        <Text style={styles.litersText}>Water Intake: {inputValue} ml</Text>
        <Text style={styles.goalDisplay}>Goal: {goal} ml</Text>
      </View>

      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>Set Goal:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter goal in ml"
          keyboardType="numeric"
          value={customGoal}
          onChangeText={(text) => setCustomGoal(text)}
        />
        <TouchableOpacity style={styles.setGoalButton} onPress={setCustomGoalHandler}>
          <Text style={styles.setGoalButtonText}>Set Goal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.setGoalButton} onPress={()=>{setGoal(0),setInputValue(0),setCustomGoal(''),setpara()}}>
<Text style={styles.setGoalButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
<Text>{para}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleAdd(250)}>
          <Text style={styles.buttonText}>+250 ml</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleAdd(500)}>
          <Text style={styles.buttonText}>+500 ml</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleAdd(1000)}>
          <Text style={styles.buttonText}>+1 liter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleAdd(2000)}>
          <Text style={styles.buttonText}>+2 liters</Text>
        </TouchableOpacity>
      </View>

     

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  litersText: {
    fontSize: 18,
    color: '#555',
  },
  goalDisplay: {
    fontSize: 16,
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#4CAF50',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  goalContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalText: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  setGoalButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
  },
  setGoalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
