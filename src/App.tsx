// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import { ChatList } from './src/ChatList';

// const contacts = [
//   { name: 'John', id: '1' },
//   { name: 'Jane', id: '2' },
//   // ... more contacts
// ];

// const HomeScreen = ({ navigation }) => (
//   <FlatList
//     data={contacts}
//     keyExtractor={item => item.id}
//     renderItem={({ item }) => (
//       <TouchableOpacity onPress={() => navigation.navigate('Chat', { name: item.name })}>
//         <Text>{item.name}</Text>
//       </TouchableOpacity>
//     )}
//   />
// );

// const ChatScreen = ({ navigation }) => (
//   <View>
//     <Text>Chat with {navigation.getParam('name')}</Text>
//   </View>
// );

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Chat: ChatScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// export default createAppContainer(AppNavigator);

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from './ChatList';
import ChatView from './ChatView';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Chats"
          component={ChatList}
        />
        <Stack.Screen
          name="ChatView"
          component={ChatView}
          options={{headerShown: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
