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
  StatusBar
} from 'react-native';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, Tabs, Button, Tab, Header, Content, Container} from 'native-base';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import MusicScreen from './src/screens/Music';
import PodcastsScreen from './src/screens/Podcasts';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Sc' }}/>
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} options={{ title: 'Search Sc' }}/>
    </SearchStack.Navigator>
  );
}

const LibraryStack = createStackNavigator();

function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="Music" component={MusicScreen} options={{ title: 'Music' }}/>
      <LibraryStack.Screen name="Podcasts" component={PodcastsScreen} options={{ title: 'Overview' }}/>
    </LibraryStack.Navigator>
  );
}

const TabNav = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>    
          <TabNav.Navigator
            tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: 'gray',
              activeBackgroundColor:'#333333',
              inactiveBackgroundColor:'#333333'
            }}
          >
            <TabNav.Screen 
              name="HomeTab" 
              component={HomeStackScreen} 
              options={{
                tabBarLabel:'Home',
                tabBarIcon: ({focused}) => (
                  <Icon name={focused ?'home' : 'home-outline'} style={{color: focused ? 'white' : 'gray'}}/>
                )
              }}
            />
          
            <TabNav.Screen 
              name="SearchTab" 
              component={SearchStackScreen} 
              options={{
                tabBarLabel:'Search',
                tabBarIcon: ({focused}) => (
                  <Icon name={focused ?'search' : 'search-outline'} style={{color: focused ? 'white' : 'gray'}}/>
                )
              }}
            />

            <TabNav.Screen 
              name="LibraryTab" 
              component={LibraryStackScreen} 
              options={{
                tabBarLabel:'Your Library',
                tabBarIcon: ({focused}) => (
                  <Icon name={focused ?'library' : 'library-outline'} style={{color: focused ? 'white' : 'gray'}}/>
                )
              }}
            />
          </TabNav.Navigator>
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
<Tabs>
            <Tab heading="Tab1">
            </Tab>
            <Tab heading="Tab2">
            </Tab>
          </Tabs>
*/

/*
options={{
                    tabBarIcon: ({focused}) => (
                      <Image 
                        source={icons.user}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                      />
                    ),
                  }}
*/

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
