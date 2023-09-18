import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ChatView = ({ route, navigation }) => {
  const { name, profilePic } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={profilePic} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View>
        {/* Chat messages here */}
      </View>
      <View style={styles.footer}>
        <TextInput placeholder="Type a message" style={styles.input} />
        <TouchableOpacity>
          {/* Microphone Icon */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* Send Icon */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  backButton: {
    fontSize: 24,
    marginRight: 16,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 16,
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
  },
  input: {
    flex: 1,
  },
});

export default ChatView;
