/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput, TouchableOpacity, Switch, Button, Alert
} from 'react-native';

import {
  Header,
  Colors
} from 'react-native/Libraries/NewAppScreen';

import SwitchExample from './components/switch_example.js'

const App: () => React$Node = () => {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [result, setResult] = useState("0");

  calculate = (operator = "") => {
    let list = []

    console.log(number1.toString(), number2.toString(), number3.toString())
    console.log(checked1, checked2, checked3)

    if (checked1) list.push(parseInt(number1))
    if (checked2) list.push(parseInt(number2))
    if (checked3) list.push(parseInt(number3))
    
    if (list.length === 0) {
      setResult("Please select fields");
      return
    }

    if (list.length === 1) {
      setResult("At least need 2 fields selected");
      return
    }

    let total = list[0];
    for (let idx = 1; idx < list.length; idx++) {
      if (operator==="+") total += list[idx];
      if (operator==="-") total -= list[idx];
      if (operator==="*") total *= list[idx];
      if (operator==="/") total /= list[idx];
    }
    
    setResult(total)
  }

  toggleSwitch1 = (value) => {
    setChecked1(value)
    // console.log('Switch 1 is: ' + checked1)
  }

  toggleSwitch2 = (value) => {
    setChecked2(value)
    // console.log('Switch 2 is: ' + checked2)
  }

  toggleSwitch3 = (value) => {
    setChecked3(value)
    // console.log('Switch 3 is: ' + checked3)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Simple calculator</Text>
              </View>
            
              <View style={styles.containerForm} >

                <View style={styles.inlineForm} >
                  <TextInput 
                    style={styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Input number"
                    keyboardType={'numeric'} 
                    placeholderTextColor = "#9a73ef"
                    onChangeText={text => setNumber1(text)}
                    value={number1}
                  />
                  <Switch 
                      style={styles.inputswitch}
                      onValueChange = {toggleSwitch1}
                      value = {checked1} />
                </View>

                <View style={styles.inlineForm} >
                  <TextInput 
                    style={styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Input number"
                    keyboardType={'numeric'} 
                    placeholderTextColor = "#9a73ef"
                    onChangeText={text => setNumber2(text)}
                    value={number2}
                  />
                  <Switch 
                      onValueChange = {toggleSwitch2}
                      value = {checked2} />
                </View>

                <View style={styles.inlineForm} >
                  <TextInput 
                    style={styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Input number"
                    keyboardType={'numeric'} 
                    placeholderTextColor = "#9a73ef"
                    onChangeText={text => setNumber3(text)}
                    value={number3}
                  />
                  <Switch 
                      onValueChange = {toggleSwitch3}
                      value = {checked3} />
                </View>

                <View style={styles.inlineButton}  >
                  <View style={styles.btnOperator} >
                    <Button title="+" onPress={() => {calculate('+')}} />
                  </View>

                  <View style={styles.btnOperator} >
                    <Button title="-" onPress={() => {calculate('-')}} />
                  </View>

                  <View style={styles.btnOperator} >
                    <Button title="*" onPress={() => {calculate('*')}} />
                  </View>

                  <View style={styles.btnOperator} >
                    <Button title="/" onPress={() => {calculate('/')}} />
                  </View>
                </View>

                <View>
                  <Text style={styles.sectionTitle}>{ result }</Text>
                </View>
              </View>

          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.black,
    marginTop: 32,
    marginBottom: 32,
    textAlign: "center"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  containerForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  inlineForm: {
    display: 'flex',
    flexDirection: 'row'
  },
  inlineButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 32,
    alignContent: 'space-around'
  },
  
  btnOperator : {
    width: 60,
    margin : 10,
  },

  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: '60%'
  },
  inputswitch: {
    width: '10%'
  }

});

export default App;
