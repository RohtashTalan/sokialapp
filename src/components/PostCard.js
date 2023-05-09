import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PostCard = ({ post }) => {
  const { username, caption, imageUrl, likes, comments } = post;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
        />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.footer}>
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('./assets/heart.png')}
            />
            <Text style={styles.iconText}>{likes}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('./assets/comment.png')}
            />
            <Text style={styles.iconText}>{comments}</Text>
          </View>
        </View>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 300,
  },
  footer: {
    padding: 16,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  iconText: {
    fontSize: 14,
  },
  caption: {
    fontSize: 14,
  },
});

export default PostCard;
