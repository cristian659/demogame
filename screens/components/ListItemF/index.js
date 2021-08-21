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
  const {img} = props.frutas;
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View style={styles.img}>
        <ImageBackground source={img} style={styles.image} />
      </View>
    </View>
  );
};

export default ListItemF;
