import React, {useState, useEffect} from 'react';
import {View, Image, Alert, TouchableHighlight, Text} from 'react-native';
import {StyleSheet} from 'react-native';

import ImagenA from './animals';
import ImagenF from './frutas';

const juego = () => {
  const [bgColor, setbgColor] = useState('rgb(255, 255, 255)');
  const [touchNo, settouchNo] = useState(0);
  const colors = ['#1ea1e6', '#FFFFFF'];
  const [img, setImg] = useState('');
  const [imge, setImge] = useState('');
  const [imgActual, setImgActual] = useState(0);
  const [imgActual1, setImgActual1] = useState(0);
  const [misDatos, setMisDatos] = useState(ImagenA);
  const [misFrutas, setMisFrutas] = useState(ImagenF);
  const [puntos, setPuntos] = useState(0);
  const [correcta, setCorrecta] = useState('');
  const [correctaF, setCorrectaF] = useState('');

  const [animal, setAnimal] = useState('');
  const [fruta, setFruta] = useState('');

  useEffect(() => {
    NuevaImagen1();
    siguiente();
    changeBg();
  }, []);

  const NuevaImagen1 = () => {
    setImg(misDatos[imgActual].img);
    setImge(misFrutas[imgActual1].imge);
    setAnimal(misDatos[imgActual].animal);
    setFruta(misDatos[imgActual].fruta);
    setCorrecta(misDatos[imgActual].correcta);
    setCorrectaF(misDatos[imgActual].correctaF);
    changeBg();
  };

  const siguiente = () => {
    let index = Math.floor(Math.random() * (4 - 0)) + 0;
    while (index === imgActual) {
      index = Math.floor(Math.random() * (4 - 0)) + 0;
    }
    setImgActual(index);
    setImgActual1(index);
    NuevaImagen1();
  };

  const changeBg = () => {
    let index = Math.floor(Math.random() * (2 - 0)) + 0;

    while (index === colors) {
      index = Math.floor(Math.random() * (2 - 0)) + 0;
    }

    let newBgColor = colors[index];

    setbgColor(newBgColor);
    settouchNo(touchNo + 1);
    pasar();
  };

  const pasar = () => {
    if (touchNo === 40) {
      Alert.alert('se acabo el juego');
    }
  };
  const verificacionA = opcion => {
    if (bgColor === colors[1]) {
      if (opcion === correcta) {
        setPuntos(puntos + 1);
        console.log(puntos);
      }
      if (opcion != correcta) {
      }
    }
    siguiente();
  };
  const verificacionF = opcion => {
    if (bgColor === colors[0]) {
      if (opcion === correctaF) {
        setPuntos(puntos + 1);
        console.log(puntos);
      }
    }
    siguiente();
  };

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View style={styles.primero}>
        <TouchableHighlight
          style={styles.botonAnimal}
          onPress={() => {
            verificacionA(animal);
          }}>
          <Image source={img} style={styles.image1} />
        </TouchableHighlight>
      </View>

      <View style={styles.segundo}>
        <TouchableHighlight
          style={styles.botonAnimal}
          onPress={() => {
            verificacionF(fruta);
          }}>
          <Image source={imge} style={styles.image1} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#0071BC',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primero: {
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  segundo: {
    padding: 50,
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
