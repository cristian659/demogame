import React from 'react';
import {View, ImageBackground, _View} from 'react-native';

import styles from './style';

const ListItem = props => {
  const {img} = props.animal;

  return (
    <View style={styles.Container}>
      <View style={styles.img}>
        <ImageBackground source={img} style={styles.image} />
      </View>
    </View>
  );
};

export default ListItem;
