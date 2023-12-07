import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Posts from './components/posts';
import Update from './components/update';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="posts" component={Posts} />
          <Stack.Screen name="update" component={Update} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


