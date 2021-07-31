import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  _View,
  ViewComponent,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

import StyledButton from '../styledButton';

const ListItemF = props => {
  const {name, img} = props.frutas;
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <ImageBackground source={img} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={'Jugar'}
          onPress={() => navigation.navigate('Juego')}
        />
      </View>
    </View>
  );
};

export default ListItemF;
