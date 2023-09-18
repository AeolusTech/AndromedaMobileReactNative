import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChatList = () => {
  const chats = [
    { name: 'John', lastMessageTime: '10:30 AM' },
    { name: 'Jane', lastMessageTime: 'Yesterday' },
  ];

  return (
    <View style={styles.container}>
      {chats.map((chat, index) => (
        <View key={index} style={styles.chatBox}>
          <View style={styles.profilePic}>
            <Image style={styles.image} source={require('../assets/pictures/man-0.png')} />
          </View>
          <View style={styles.chatInfo}>
            <Text style={styles.name}>{chat.name}</Text>
            <Text style={styles.time}>{chat.lastMessageTime}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chatBox: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
  },
  profilePic: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  time: {
    color: 'gray',
  },
});

export default ChatList;
