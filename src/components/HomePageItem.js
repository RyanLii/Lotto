import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { PureComponent } from 'react';

const OzLotto = require('../assets/OzLotto.png');
const Powerball = require('../assets/Powerball.png');
const TattsLotto = require('../assets/TattsLotto.png');

const HomePageImageMap = {
  OzLotto,
  Powerball,
  TattsLotto,
};

export default class HomePageItem extends PureComponent {
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.item}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={HomePageImageMap[title]}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'beige',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  icon: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 25,
  },
});
