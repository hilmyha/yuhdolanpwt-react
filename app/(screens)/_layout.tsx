import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Home",
          tabBarIcon: ({focused}) => <Ionicons name="home" size={20} color={focused ? 'black' : 'gray'} />,
        }}
      />
      <Tabs.Screen
        name="Blog"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Blog",
          tabBarIcon: ({focused}) => <Ionicons name="md-book" size={20} color={focused ? 'black' : 'gray'} />,
        }}
      />
      <Tabs.Screen
        name="Interest"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Favorite",
          tabBarIcon: ({focused}) => <Ionicons name="md-heart" size={20} color={focused ? 'black' : 'gray'} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Profile",
          tabBarIcon: ({focused}) => <Ionicons name="person" size={20} color={focused ? 'black' : 'gray'} />,
        }}
      />
    </Tabs>
  );
}
