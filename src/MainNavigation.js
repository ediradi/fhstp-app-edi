import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserPage from './user/UserPage';
import PeoplePage from './people/PeoplePage';
import MailPage from './mail/MailPage';
import CalendarStackScreen from './calendar/CalendarStackScreen';
import FilesPage from './files/FilesPage';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Files" component={FilesPage} />
        <Tab.Screen name="People" component={PeoplePage} />
        <Tab.Screen name="Mails" component={MailPage} />
        <Tab.Screen name="Calendar" component={CalendarStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
