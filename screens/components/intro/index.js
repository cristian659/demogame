import React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';

import imagen from '../../assets/imagenesL/LogoJuego.png';

import {useNavigation} from '@react-navigation/native';

import Sound from 'react-native-sound';

import img from '../../assets/sonido/audiolog.png';

import StyledButton from '../styledButton';

let musciPath = require('../../assets/sonido/audio.mp4');
var music = new Sound(musciPath, error => {
  if (error) {
    Alert.alert('Falló la reproducción ...');
  }
});

const Intro = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Shifting Atencional</Text>
        <Image source={imagen} style={styles.ima} />
        <Text style={styles.texto}>
          Nombra los animales y Frutas que aparezcan
        </Text>
        <TouchableOpacity
          style={{marginTop: 15}}
          onPress={() => {
            music.play();
          }}>
          <Text
            style={{
              color: '#4398ff',
              fontSize: 20,
              fontFamily: 'Lato-BlackItalic',
            }}>
            reproduce el audio
          </Text>
          <Image source={img} style={styles.image} />
        </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <StyledButton
            type="primary"
            content={'Jugar'}
            onPress={() => navigation.navigate('Animales')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Intro;
