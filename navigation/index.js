import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

// Import Screens
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen'; 
import HomeScreen from '../Screens/HomeScreen'; 

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}

        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function Navigation() {
    return (
      <NavigationContainer>
         <RootNavigator/>
      </NavigationContainer>
      
    );
  }

const Stack = createNativeStackNavigator();

function RootNavigator(){
  return(
    <Stack.Navigator> 
      <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
      <Stack.Screen
            name="SplashScreen"
            component={SplashScreen} 
            options={{ headerShown: false }}
          /> 
        <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          /> 
          
    </Stack.Navigator>
  )
  
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return(
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({color, size}) => <AntDesign name="home" size={size} color={color} />
      }}
      />

      <BottomTab.Screen
      name="Planner"
      component={Auth}
      options={{
        tabBarIcon: ({color, size}) => <MaterialIcons name="playlist-add" size={size} color={color}/>
      }}
      
      />
    </BottomTab.Navigator>
  )
}