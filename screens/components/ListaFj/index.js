import React from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import frutas from './frutas';
import ListItemF from '../ListItemF';
import styles from './style';

import StyledButton from '../styledButton';

const ListaAF = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={frutas}
        renderItem={({item}) => <ListItemF frutas={item} />}
        keyExtractor={(item, index) => index.toString()}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={'Prueba'}
          onPress={() => navigation.navigate('prueba')}
        />
      </View>
    </View>
  );
};

export default ListaAF;
