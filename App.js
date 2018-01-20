import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import Home from './src/components/Home/Home';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      'Circular-Bold': require('./src/assets/fonts/CircularStd-Bold.otf'),
      Circular: require('./src/assets/fonts/CircularStd-Medium.otf'),
    });
    this.setState({ fontLoaded: true });
  }
  componentDidMount() {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.statusBar} /> */}
        {this.state.fontLoaded ?
          <Home />
        : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // statusBar: {
  //   backgroundColor: '#fff',
  //   height: Constants.statusBarHeight,
  //   elevation: 0,
  //   shadowOffset:{width: 0, height: 0},
  //   shadowOpacity: 0,
  // },
});
