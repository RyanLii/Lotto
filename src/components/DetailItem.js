import { View, StyleSheet, Text, FlatList } from 'react-native';
import React, { PureComponent } from 'react';
import moment from 'moment';

export default class DetailItem extends PureComponent {
  _renderItems = (item, isPrimary) => {
    return (
      <View
        style={[
          styles.numberContainer,
          { backgroundColor: isPrimary ? 'red' : 'blue' },
        ]}>
        <Text style={styles.numberText}>{item}</Text>
      </View>
    );
  };

  _renderNumbers = (numbers, isPrimary) => {
    return (
      <FlatList
        horizontal={true}
        data={numbers}
        renderItem={({ item }) => this._renderItems(item, isPrimary)}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    );
  };

  render() {
    const {
      DrawDate,
      DrawDisplayName,
      DrawLogoUrl,
      PrimaryNumbers,
      SecondaryNumbers,
    } = this.props;
    const date = moment(DrawDate).format('DD');
    const month = moment(DrawDate).format('MMMM');
    const year = moment(DrawDate).format('yyyy');
    return (
      <View style={styles.container}>
        <View style={styles.columnContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dayText}>{date}</Text>
            <View style={styles.columnContainer}>
              <Text>{month}</Text>
              <Text>{year}</Text>
            </View>
          </View>
          <Text>{DrawDisplayName}</Text>
        </View>
        <View style={([styles.columnContainer], { marginLeft: 20 })}>
          {this._renderNumbers(PrimaryNumbers, true)}
          {this._renderNumbers(SecondaryNumbers, false)}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  dateContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  columnContainer: {
    flexDirection: 'column',
  },
  dayText: {
    fontSize: 30,
    padding: 5,
    fontWeight: 'bold',
  },
  numberContainer: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  numberText: {
    color: 'white',
  },
});
