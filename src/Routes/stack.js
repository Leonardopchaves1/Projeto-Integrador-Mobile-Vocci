import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../pages/Home/index';
import Categorias from '../pages/Categorias/index';
import Carrinho from '../pages/Carrinho/index';
import LiveVideo from '../pages/LiveEVideo/index';
import Mais from '../pages/Mais/index';

const Tab = createBottomTabNavigator();

const AZUL = '#4285F4';
const PRETO = '#222222';

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AZUL,
        tabBarInactiveTintColor: PRETO,
        tabBarLabelStyle: { fontSize: 13, fontWeight: '600' },
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          paddingBottom: 14,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Categorias}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-grid-plus-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarBadge: 5,
          tabBarBadgeStyle: {
            backgroundColor: AZUL,
            color: '#fff',
            fontSize: 12,
            fontWeight: '700',
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Live e Vídeo"
        component={LiveVideo}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="play-box-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mais"
        component={Mais}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="playlist-plus" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );