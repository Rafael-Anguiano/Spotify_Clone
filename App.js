/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Icon} from 'native-base';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import MusicScreen from './src/screens/Music';
import PodcastsScreen from './src/screens/Podcasts';

const LibraryStack = createStackNavigator();

function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="Music" component={MusicScreen} options={{
          headerTitle: 'Music',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Podcasts"
              color="gray"
            />
          ),
        }} />
      <LibraryStack.Screen name="Podcasts" component={PodcastsScreen} />
    </LibraryStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: 'gray',
              activeBackgroundColor:'#333333',
              inactiveBackgroundColor:'#333333'
            }}
          >
          
            <Tab.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                tabBarLabel:'Home',
                tabBarIcon: ({}) => (
                  <Icon name='home-outline' style={{color:'gray'}}/>
                )
              }}
            />

            <Tab.Screen 
              name="Search" 
              component={SearchScreen} 
              options={{
                tabBarLabel:'Search',
                tabBarIcon: ({}) => (
                  <Icon name='search-outline' style={{color:'gray'}}/>
                )
              }}
            />

            <Tab.Screen 
              name="Library" 
              component={LibraryStackScreen} 
              options={{
                tabBarLabel:'Your Library',
                tabBarIcon: ({}) => (
                  <Icon name='library' style={{color:'gray'}}/>
                )
              }}

            />
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

/*
<>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
    */
