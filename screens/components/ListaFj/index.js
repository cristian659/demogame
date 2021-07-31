import {TestScheduler} from 'jest';
import React from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';

import frutas from './frutas';
import ListItemF from '../ListItemF';
import styles from './style';

const ListaAF = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={frutas}
        renderItem={({item}) => <ListItemF frutas={item} />}
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
