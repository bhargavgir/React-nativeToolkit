//import liraries
import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from './dataReducer';

// create a component
const HomeScreen = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <View>
            <Text style={styles.text}>{count}</Text>
            <Button title='Increment' onPress={() => dispatch(increment())} />
            <Button title='Decrement' onPress={() => dispatch(decrement())} />
            <Button title='IncrementByAmount' onPress={() => dispatch(incrementByAmount(10))} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    }, text: {
        fontSize: 25,
        color: '#000'
    }
});

//make this component available to the app
export default HomeScreen;
