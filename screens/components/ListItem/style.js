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
    marginTop: 30,
    width: 200,
    height: 200,
  },
  img: {
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
