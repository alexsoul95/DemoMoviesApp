import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import MovieScreen from '../screens/MovieScreen';

export type MainStackParams = {
  MainScreen: undefined;
  MovieScreen: {
    id: string;
  };
};
const MainStack = createNativeStackNavigator<MainStackParams>();

const MainNavigator = () => (
  <MainStack.Navigator screenOptions={{headerShown: false}}>
    <MainStack.Screen name={'MainScreen'} component={MainScreen} />
    <MainStack.Screen name={'MovieScreen'} component={MovieScreen} />
  </MainStack.Navigator>
);

export default MainNavigator;
