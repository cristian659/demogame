import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './style';

const StyledButton = props => {
  const {type, content, onPress} = props;

  const backgroundColor = type == 'primary' ? '#690098' : '#FFFFFFA6';
  const textColor = type == 'primary' ? '#CBCBCB' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}>
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
