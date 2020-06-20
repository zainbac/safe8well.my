import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home,
  SectionFifa,
  Order,
  OrderDetail,
  ScanQRCode,
  ForgotPassword,
  Safe8well,
  Loading,
  Youtube,
  GoogleMaps,
  Rentkatil,
  Homes,
  Facebook,
} from './../../container/pages';
import Login from './../../components/organism/Login';
import Signup from './../../components/organism/SignUp';
import Dashboard from './../../components/organism/Dashboard';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='SectionFifa'
          component={SectionFifa}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        <Stack.Screen
          name='Facebook'
          component={Facebook}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='GoogleMaps'
          component={GoogleMaps}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='Order'
          component={Order}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='OrderDetail'
          component={OrderDetail}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        <Stack.Screen
          name='Homes'
          component={Homes}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='ScanQRCode'
          component={ScanQRCode}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='Loading'
          component={Loading}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        {/* //FIREBASEW */}
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
            opacity: 1,

            title: 'Login',

            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='Safe8well'
          component={Safe8well}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='Youtube'
          component={Youtube}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />

        <Stack.Screen
          name='Rentkatil'
          component={Rentkatil}
          options={{
            headerShown: false,
            opacity: 1,
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
