// In App.js in a new project

import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/store';
import HomeScreen from './src/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  //const store = configureStore()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'
// import { store } from '../demo/src/store'
// import { Provider } from 'react-redux'
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )