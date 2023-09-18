import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const contacts = [
  { name: 'John', id: '1' },
  { name: 'Jane', id: '2' },
  // ... more contacts
];

const HomeScreen = ({ navigation }) => (
  <FlatList
    data={contacts}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Chat', { name: item.name })}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )}
  />
);

const ChatScreen = ({ navigation }) => (
  <View>
    <Text>Chat with {navigation.getParam('name')}</Text>
  </View>
);

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
