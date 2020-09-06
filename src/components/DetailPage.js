import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { View } from 'react-native';
import DetailItem from './DetailItem';

class DetailPage extends React.Component {
  renderItem = ({ item }) => <DetailItem {...item} />;

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { drawResults, route } = this.props;
    const { category } = route.params;
    const items = drawResults[category];
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={items}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => ({
  drawResults: state.drawResults,
});

export default connect(mapStateToProps, null)(DetailPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  separator: {
    backgroundColor: 'gray',
    height: 0.5,
  },
});
