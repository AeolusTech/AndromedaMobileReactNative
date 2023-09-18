import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const ChatList = () => {
    const chats = [
        { name: 'John', lastMessageTime: '10:30 AM', profilePic: '../assets/pictures/man-0.png' },
        { name: 'Jane', lastMessageTime: 'Yesterday', profilePic: '../assets/pictures/woman-0.png' },
    ];
    const navigation = useNavigation();

    const goToChat = (name: string, profilePic: string) => {
        navigation.navigate('ChatView', { name, profilePic });
      };

    return (
        <View style={styles.container}>
            {chats.map((chat, index) => (
                <TouchableOpacity onPress={() => goToChat(chat.name, chat.profilePic)}>
                    <View key={index} style={styles.chatBox}>
                        <View style={styles.profilePic}>
                            <Image style={styles.image} source={require('../assets/pictures/man-0.png')} />
                        </View>
                        <View style={styles.chatInfo}>
                            <Text style={styles.name}>{chat.name}</Text>
                            <Text style={styles.time}>{chat.lastMessageTime}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
