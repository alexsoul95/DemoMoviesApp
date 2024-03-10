import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
    <MainStack.Navigator>
        <MainStack.Screen name={'MainScreen'} component={MainScreen}/>
    </MainStack.Navigator>
}