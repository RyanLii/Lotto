import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchLatestLottoResults } from '../actions/index';
import HomePageItem from './HomePageItem';
import { NativeModules } from 'react-native';
var CameraManager = NativeModules.CameraManager;

class HomePage extends React.Component {
  async componentDidMount() {
    const { fetchLatestLottoResults } = this.props;
    await fetchLatestLottoResults();
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <HomePageItem
        title={item}
        onPress={() => navigation.navigate('Details', { category: item })}
      />
    );
  };
  onPressCamera = () => {
    CameraManager.openPhotoLibrary();
  };
  render() {
    const { drawResults } = this.props;
    const items = Object.keys(drawResults);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={items}
          renderItem={this.renderItem}
          onpre
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
        <Button
          onPress={this.onPressCamera}
          title="Open Photos"
          color="#841584"
        />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => ({
  drawResults: state.drawResults,
});

export default connect(mapStateToProps, {
  fetchLatestLottoResults,
})(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
