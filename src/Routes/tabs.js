import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Header from '../pages/Header'; // ajuste se você mover para components
import Home from '../pages/Home';
import Buscar from '../pages/Buscar';
import Carrinho from '../pages/Carrinho';
import Pedidos from '../pages/Pedidos';
import Perfil from '../pages/Perfil';

const Tab = createBottomTabNavigator(); // <- esta linha é a que está faltando

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        header: ({ navigation }) => <Header navigation={navigation} />,
        tabBarActiveTintColor: '#4A0F6B',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}