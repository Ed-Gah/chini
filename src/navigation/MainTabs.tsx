import React from 'react';
import {Text} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screeens/Home';
import Tribes from '../screeens/Tribes';
import Profile from '../screeens/Profile';

const MainTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen
        name="Tribes"
        component={Tribes}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({color, size}: any) => (
            <>
              <Text>Tribe</Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({color, size}: any) => (
            <>
              <Text>Home</Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({color, size}: any) => (
            <>
              <Text>Profile</Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
