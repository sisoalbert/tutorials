import { StyleSheet, Text, View, Button,TextInput , Image} from 'react-native'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../redux/features/counter/counterSlice';

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Image of redux */}
      <Image source={require('../../assets/redux.png')} style={styles.logo} />
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => dispatch(increment())}
          color="#841584"
          accessibilityLabel="Increment the count"
        />
        <Button
          title="Decrement"
          onPress={() => dispatch(decrement())}
          color="#841584"
          accessibilityLabel="Decrement the count"
        />
      </View>

      <Button
          title="Increment Async"
          onPress={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          color="#841584"
          accessibilityLabel="Increment the count async"
        />

      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          placeholder="Enter Increment Amount"
          onChangeText={text => setIncrementAmount(text)}
          value={incrementAmount}
        />
        
      </View>
      <Button
          title="Increment by amount"
          onPress={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
          color="#841584"
          accessibilityLabel="Increment the count by amount"
        />

    </SafeAreaView>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: 300,
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: 300,
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    width: "100%",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }

})