import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: Dimensions.get('window').height,
    height: Dimensions.get('window').width,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    flex: 1,
  },

  buttonsContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    marginBottom: 70,
  },
});

export default styles;
