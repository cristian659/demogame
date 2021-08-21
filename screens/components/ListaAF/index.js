import {TestScheduler} from 'jest';
import React from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import animal from './Animal';
import ListItem from '../ListItem';
import styles from './style';

import StyledButton from '../styledButton';

const ListaAF = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={animal}
        renderItem={({item}) => <ListItem animal={item} />}
        keyExtractor={(item, index) => index.toString()}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={'Frutas'}
          onPress={() => navigation.navigate('Frutas')}
        />
      </View>
    </View>
  );
};

export default ListaAF;
