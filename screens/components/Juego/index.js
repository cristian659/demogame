import React, {useState, useEffect} from 'react';
import {View, Image, Alert, TouchableHighlight, Text} from 'react-native';
import {StyleSheet} from 'react-native';

import ImagenA from './animals';
import ImagenF from './frutas';

const juego = () => {
  const [bgColor, setbgColor] = useState('rgb(255, 255, 255)');
  const [touchNo, settouchNo] = useState(0);
  const colors = ['#0071BC', '#E6CF2B'];
  const [img, setImg] = useState('');
  const [imge, setImge] = useState('');
  const [imgActual, setImgActual] = useState(0);
  const [imgActual1, setImgActual1] = useState(0);
  const [misDatos, setMisDatos] = useState([]);
  const [misFrutas, setMisFrutas] = useState([]);

  useEffect(() => {
    setMisDatos(misDatos);
    setMisFrutas(misFrutas);
    NuevaImagen1();
    siguiente();
    changeBg();
  }, []);

  const NuevaImagen1 = () => {
    setImg(misDatos[imgActual].img);
    setImge(misFrutas[imgActual1].imge);
    changeBg();
  };

  const siguiente = () => {
    if (imgActual < misDatos.length) {
      setImgActual(imgActual + 1);
      setImgActual1(imgActual1 + 1);
      NuevaImagen1();
    } else {
      imgActual = 0;
    }
  };

  const changeBg = () => {
    const index = Math.random() * 10 < 0.5 ? 0 : 1;

    let newBgColor = colors[index];

    setbgColor(newBgColor);
    settouchNo(touchNo + 1);
    pasar();
  };

  const pasar = () => {
    if (touchNo === 9) {
      Alert.alert('se acabo el juego');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View style={styles.primero}>
        <TouchableHighlight
          style={styles.botonAnimal}
          onPress={() => {
            siguiente();
          }}>
          <Image source={img} style={styles.image1} />
        </TouchableHighlight>
      </View>

      <View style={styles.segundo}>
        <TouchableHighlight
          style={styles.botonAnimal}
          onPress={() => {
            siguiente();
          }}>
          <Image source={imge} style={styles.image1} />
        </TouchableHighlight>
      </View>
      <Text style={styles.button}>{touchNo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    backgroundColor: '#0071BC',
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
