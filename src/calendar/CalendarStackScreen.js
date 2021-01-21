import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarPage from './CalendarPage';

const CalendarStack = createStackNavigator();

export default function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator
      screenOptions={{ title: 'Anstehende Termine' }}
      initialRouteName="Calendar">
      <CalendarStack.Screen name="Calendar" component={CalendarPage} />
    </CalendarStack.Navigator>
  );
}
