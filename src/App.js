import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define a custom Paper theme for consistent styling
const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: '#fff',
    text: '#222',
    disabled: '#aaa',
    placeholder: '#999',
    backdrop: 'rgba(0,0,0,0.5)',
  },
};

// Align React Navigation theme with Paper theme for seamless integration
const navTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: paperTheme.colors.background,
    card: paperTheme.colors.primary,
    text: '#fff',
    border: 'transparent',
  },
};

// Bottom tab navigator configuration
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Movies') {
            iconName = 'movie';
          } else if (route.name === 'Favorites') {
            iconName = 'favorite';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: paperTheme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f6f6f6',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Movies" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: paperTheme.colors.primary,
              shadowColor: 'transparent', 
              elevation: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerTitleAlign: 'center', 
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ title: '🎬 Movie Search' }}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetailsScreen}
            options={{ title: 'Movie Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
