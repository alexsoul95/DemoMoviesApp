import React, {useState} from 'react';
import { View, Text, Touchable, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  const [count, setCount] = useState(0)

  
  return (
    <Pressable onPress={() => {setCount(count+1)}} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{count}</Text>
    </Pressable>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;