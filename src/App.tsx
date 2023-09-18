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
import ChatList from './ChatList';  // Importing ChatList

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ChatList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
