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

let musciPath = require('../../assets/sonido/audio2.mp4');
var music = new Sound(musciPath, error => {
  if (error) {
    Alert.alert('Falló la reproducción ...');
  }
});

const IntroPrueba = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>AnFu</Text>
        <Image source={imagen} style={styles.ima} />
        <Text style={styles.texto}>
          Instrucción: Ahora vas a ver unos dibujos con un animal y una fruta.
          Toca el animal si el fondo del dibujo es amarillo y la fruta si el
          fondo es azul
        </Text>
        <TouchableOpacity
          style={{marginTop: 15}}
          onPress={() => {
            music.play();
          }}>
          <Text
            style={{
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
            onPress={() => navigation.navigate('Juego')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default IntroPrueba;
