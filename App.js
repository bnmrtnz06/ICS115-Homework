import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state= {
      resultText: "",
      resultCal: ""
    }
  }
  calculatedRes() {
    const text = this.state.resultText
    this.setState({
      resultCal: eval(text)
    })
    
  }
  buttonPressed(text)  
  {
    if (text == '='){
    return this.calculatedRes()
  }
    this.setState({
      resultText: this.state.resultText+text
    })
  }
  render() {
    return (
      <View style={styles.container}>
  
        <View style = {styles.calculation}>
          <Text style={styles.TextCalculation}>{this.state.resultText}</Text> 
        </View>
  
        <View style={styles.result}>
          <Text style={styles.TextResult}>{this.state.resultCal}</Text>
        </View>
  
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style ={styles.row}>
            <TouchableOpacity style={styles.numBtn} onPress={() =>this.buttonPressed("1")}><Text style={styles.btnTxt}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numBtn} onPress={() =>this.buttonPressed("2")}><Text style={styles.btnTxt}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numBtn} onPress={() =>this.buttonPressed("3")}><Text style={styles.btnTxt}>3</Text></TouchableOpacity>
          </View>
  
          <View style ={styles.row}>
          <TouchableOpacity style={styles.numBtn} onPress={() =>this.buttonPressed("4")}><Text style={styles.btnTxt}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numBtn} onPress={() =>this.buttonPressed("5")}><Text style={styles.btnTxt}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numBtn} onPress={() =>this.buttonPressed("6")}><Text style={styles.btnTxt}>6</Text></TouchableOpacity>
          </View>
  
          <View style ={styles.row}>
          <TouchableOpacity style={styles.numBtn}onPress={() =>this.buttonPressed("7")}><Text style={styles.btnTxt}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numBtn}onPress={() =>this.buttonPressed("8")}><Text style={styles.btnTxt}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numBtn}onPress={() =>this.buttonPressed("9")}><Text style={styles.btnTxt}t>9</Text></TouchableOpacity>
          </View>
  
          <View style ={styles.row}>
          <TouchableOpacity style={styles.numBtn} onPress={() =>this.buttonPressed("0")}><Text style={styles.btnTxt}>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numBtn} onPress={() =>this.buttonPressed(".")}><Text style={styles.btnTxt}>.</Text></TouchableOpacity>
            <TouchableOpacity style={styles.numBtn} onPress={() =>this.buttonPressed("=")}><Text style={styles.btnTxt}>=</Text></TouchableOpacity>
          </View>
  
          </View>
          <View style={styles.operations}>
          <TouchableOpacity onPress={() =>this.buttonPressed("+")}><Text style={styles.opeTxt}>+</Text></TouchableOpacity>
          <TouchableOpacity onPress={() =>this.buttonPressed("-")}><Text style={styles.opeTxt}>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={() =>this.buttonPressed("*")}><Text style={styles.opeTxt}>*</Text></TouchableOpacity>
          <TouchableOpacity onPress={() =>this.buttonPressed("/")}><Text style={styles.opeTxt}>/</Text></TouchableOpacity>
          </View>
          
        </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  numBt: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: 20,
    justifyContent: 'center',
  }, 
  row:{
    flexDirection: 'row',
    flex: 100,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  opeTxt: {
    color: 'white',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40
    
  },
  calculation: {
    flex: 2,
    backgroundColor: 'black',
  },
  TextCalculation: {
    fontSize: 35,
    color: 'white',
    paddingTop: 50,
    justifyContent: 'flex-end', 
    alignItems: 'flex-end',
  },
  result:{
    flex: 1,
    backgroundColor: 'black',
  },
  TextResult: {
    fontSize: 40,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
  },
});