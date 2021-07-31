import {TestScheduler} from 'jest';
import React from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';

import animal from './Animal';
import ListItem from '../ListItem';
import styles from './style';

const ListaAF = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={animal}
        renderItem={({item}) => <ListItem animal={item} />}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        snapToInterval={Dimensions.get('window').width}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListaAF;
