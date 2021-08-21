import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: Dimensions.get('window').height,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
  },
  img: {
    padding: 12,
    backgroundColor: 'darkorange',
    display: 'flex',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
