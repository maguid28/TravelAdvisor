import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/Discover';

//Stack object to allow users to navigate from one thing to another
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="Discover" component={Discover} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


