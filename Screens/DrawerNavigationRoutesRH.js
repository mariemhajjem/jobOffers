// Import Navigators from React Navigation

import { createStackNavigator } from '@react-navigation/stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Import Screens
import HomeScreen from './HomeScreen';

import { Icon } from 'react-native-elements'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const homeScreenStack = ({ navigation }) => {

    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}

            />
           
        </Stack.Navigator>
    );
};


const DrawerNavigatorRoutesRH = (props) => {

    return (

        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#0379d4',
                inactiveTintColor: '#000',

            }}
        >
            <Tab.Screen
                name="homeScreenStack"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            color={color}
                            size={20}
                        />

                    ),
                }}
                component={homeScreenStack}
            />

        </Tab.Navigator>
    );
};

export default DrawerNavigatorRoutesRH;