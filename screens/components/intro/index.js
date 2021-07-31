import {TestScheduler} from 'jest';
import React from 'react';
import {Button, Text, View, Image} from 'react-native';
import styles from './style';

import imagen from '../../assets/imagenesL/LogoJuego.png';

import {useNavigation} from '@react-navigation/native';

const Intro = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shifting Atencional</Text>
      <Image source={imagen} style={styles.ima} />
      <Text style={styles.texto}>
        Nombra los animales y Frutas que aparezcan
      </Text>

      <View style={styles.bt}>
        <Button
          title="ver Lista"
          onPress={() => navigation.navigate('Animales')}
        />
      </View>
    </View>
  );
};

export default Intro;
