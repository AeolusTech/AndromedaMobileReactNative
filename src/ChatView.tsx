import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const ChatView = ({ route }) => {
  const { name, profilePic } = route.params;

  return (
    <View>
      <View>
        <Image source={{ uri: profilePic }} />
        <Text>{name}</Text>
      </View>
      <View>
        {/* Chat messages here */}
      </View>
      <View>
        <TextInput placeholder="Type a message" />
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

export default ChatView;
