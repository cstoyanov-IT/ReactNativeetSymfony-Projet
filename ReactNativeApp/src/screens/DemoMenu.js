import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import MenuRight from '../components/MenuRight';
import Button from '../components/Button';

export default function DemoMenu({ navigation }) {
  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-5">
      <MenuRight navigation={navigation} />
      <Image source={require('../../assets/favicon.png')} className="w-36 h-36 mb-10" />
      <Text className="text-2xl font-bold mb-5 text-center text-gray-800">Bienvenue chez Location de Véhicules</Text>
      <Text className="text-lg text-gray-600 text-center mb-5">Réservez votre véhicule préféré facilement et rapidement</Text>
      <Button navigation={navigation} textButton={"Voir les utilisateurs"} url={"User"} color={"bg-indigo-700"}/>
      <Button navigation={navigation} textButton={"Voir les Exemples de Hooks"} url={"HooksExample"} color={"bg-lime-500"}/>
      <Button navigation={navigation} textButton={"Voir les Exemples de Hooks"} url={"HooksExample"} color={"bg-red-600"}/>
    </View>
  );
}
