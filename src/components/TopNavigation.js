import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TopNavigation = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/instagram.png')}
      />
      <View style={styles.icons}>
        <Image
          style={styles.icon}
          source={require('./assets/search.png')}
        />
        <Image
          style={styles.icon}
          source={require('./assets/heart.png')}
        />
        <Image
          style={styles.icon}
          source={require('./assets/profile.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});

export default TopNavigation;
