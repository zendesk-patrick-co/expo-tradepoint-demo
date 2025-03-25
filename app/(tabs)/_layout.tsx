import { HapticTab } from '@/app/components/HapticTab';
import TabBarBackground from '@/app/components/ui/TabBarBackground';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffe500',
        tabBarInactiveTintColor: '#fff',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: '#252324',

          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: 'Browse',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="search-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Basket',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="basket-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: 'Stores',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="pin" color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="ellipsis-horizontal" color={color} />,
        }}
      />
    </Tabs>
  );
}
