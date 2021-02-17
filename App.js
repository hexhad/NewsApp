import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Messages from './screens/Messages';
import Notifications from './screens/Notifications';
import Settings from './screens/Settings';

import TabComponent from './components/Tab';

import Header from './header/Header';

const Tab = createBottomTabNavigator(
 //increase bottom nav hei coz that will suits for the design 
);

const AkvafinBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

function App() {
  return (
    <>
      <AkvafinBar backgroundColor='#5C6BCA' barStyle="light-content" />
      <Header title="akvafin"/>
      <NavigationContainer >
        <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 64,
          }
        }}
        >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
          tabBarButton: (props)=> <TabComponent label="Home" {...props}/>
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
          tabBarButton: (props)=> <TabComponent label="Messages" {...props} />
        }}/>
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
          tabBarButton: (props)=> <TabComponent label="Notifications" {...props} />
        }}/>
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
          tabBarButton: (props)=> <TabComponent label="Settings" {...props} />
        }}/>
      </Tab.Navigator>
    </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
 statusBar: {
    height: 35,
  },
});

export default App;
