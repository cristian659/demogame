import React, {useState, useEffect} from 'react';
import {View, Image, Alert, TouchableHighlight} from 'react-native';
import {StyleSheet} from 'react-native';
import {} from 'react/cjs/react.production.min';

import ImagenA from './animals';
import ImagenF from './frutas';

const juego = () => {
  const [img, setImg] = useState('');
  const [imge, setImge] = useState('');

  let misDatos = ImagenA;
  let misFrutas = ImagenF;

  useEffect(() => {
    setImg(ImagenA[0].img);
    console.log(ImagenA[0].img, ImagenF[0].imge);
    setImge(ImagenF[0].imge);
  }, []);

  return (
    {(ImagenA[0]?.img): <View style={styles.container}>
    <View style={styles.primero}>
      <Image source={{uri: img}} style={styles.image1} />
    </View>

    <View style={styles.segundo}>
      <Image source={{uri: imge}} style={styles.image1} />
    </View>
  </View>?
  <Text>No hay data</Text>
  }
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6CF2B',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  segundo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image1: {
    width: 150,
    height: 150,
  },
});

export default juego;
