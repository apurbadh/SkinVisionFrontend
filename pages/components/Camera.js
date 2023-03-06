import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CameraIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cameraContainer}>
      <Ionicons name="ios-camera" size={30} color="#ffff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    marginBottom : 40,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#337cbd',
    borderRadius: 50,
    padding:  10,

  },
});

export default CameraIcon;



