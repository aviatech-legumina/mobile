import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { darken } from 'polished';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#4978d0",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',//Colors[colorScheme ?? 'dark'].tint, // or any color you want
          borderRadius: 20, // this will make it pill-shaped
          height: 80, // adjust as per your need
          position: 'absolute', // this will detach it from the bottom
          //bottom: 30, // adjust as per your need
          left: 15, // adjust as per your need
          right: 15, // adjust as per your need
          elevation: 10, // this will add shadow on Android
          shadowColor: darken(0.8, "#fff"), // this will add shadow on iOS
          shadowOpacity: 0.2, // this will add shadow on iOS
          shadowOffset: { width: 0, height: 10 }, // this will add shadow on iOS
        },
      }}
    >

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={'clipboard-list'} color={color} iconFamily="FontAwesome5" />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} iconFamily="Ionicons" />
          ),
        }}
      />
      <Tabs.Screen
        name="fleet"
        options={{
          title: 'Fleet',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'user-circle' : 'user-circle-o'} color={color} iconFamily="FontAwesome" />
          ),
        }}
      />
    </Tabs>
  );
}
