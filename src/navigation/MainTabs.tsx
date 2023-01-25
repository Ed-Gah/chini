import React from 'react';
import {Text} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screeens/Home';

const MainTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
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
    </Tab.Navigator>
  );
};

export default MainTabs;
