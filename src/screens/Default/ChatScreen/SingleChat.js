import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;
    const newMessage = {
      id: messages.length + 1,
      text: inputText.trim(),
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.message}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.messagesContainer}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="Type your message here"
          placeholderTextColor="#999999"
          returnKeyType="send"
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  messagesContainer: {
    padding: 16,
  },
  messageContainer: {
    backgroundColor: '#e6e6e6',
    borderRadius: 16,
    marginBottom: 8,
    maxWidth: '75%',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  message: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    fontSize: 16,
    color: '#000000',
  },
  sendButton: {
    backgroundColor: '#007aff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ChatScreen;
