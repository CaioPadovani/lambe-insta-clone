import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import Feed from "./screens/Feed";
import AddPhoto from "./screens/AddPhoto";
import Profile from "./screens/Profile";

const MenuRoutes = {
  Feed: {
    name: 'Feed',
    component: Feed,
    navigationOptions: {
      title: 'Feed',
      tabBarIcon: ({ color, size }) => (
        <Icon name='home' size={size} color={color} />
      ),
    },
  },
  Add: {
    name: 'AddPhoto',
    component: AddPhoto,
    navigationOptions: {
      title: 'Add Photo',
      tabBarIcon: ({ color, size }) => (
        <Icon name='camera' size={size} color={color} />
      ),
    },
  },
  Profile: {
    name: 'Profile',
    component: Profile,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <Icon name='user' size={size} color={color} />
      ),
    },
  },
}

const MenuConfig = {
  initialRouteName: 'Feed',
  screenOptions: {
    tabBarShowLabel: false,
    headerShown: false
  }
}

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <Tab.Navigator {...MenuConfig}>
      {Object.keys(MenuRoutes).map(routeName => (
        <Tab.Screen
          key={routeName}
          name={MenuRoutes[routeName].name}
          component={MenuRoutes[routeName].component}
          options={MenuRoutes[routeName].navigationOptions}
        />
      ))}
    </Tab.Navigator>
  );
}
