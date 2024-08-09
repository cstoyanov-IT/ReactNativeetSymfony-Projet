import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuRight({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [widthAnim] = useState(new Animated.Value(60));

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      Animated.timing(widthAnim, {
        toValue: 60,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(widthAnim, {
        toValue: 340,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setMenuOpen(true);
      });
    }
  };

  return (
    <Animated.View style={[styles.menu, { width: widthAnim, shadowOpacity: menuOpen ? '#1a1a1a' : 'transparent' }]}>
      <TouchableOpacity 
        style={styles.toggleButton}
        onPress={toggleMenu}
      >
        <Ionicons name={menuOpen ? 'close' : 'menu'} size={30} color={menuOpen ? 'white' : 'black'} />
      </TouchableOpacity>
      {menuOpen && (
        <ScrollView style={styles.scrollView}>
          <ButtonRedirection text="Voir les utilisateurs" url="User" navigation={navigation} />
          <ButtonRedirection text="Voir les Exemples de Hooks" url="HooksExample" navigation={navigation} />
          <ButtonRedirection text="Menu principal" url="Home" navigation={navigation} />
          <Button></Button>
        </ScrollView>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#1a1a1a',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1000,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  toggleButton: {
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },
  scrollView: {
    width: '100%',
  },
});
