import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import Home from './src/components/Home/Home';
import Login from './src/components/Login/Login';
import { getData } from './src/api/db';
import AppLaunchService from './src/assets/applaunch';

export const applaunchService = new AppLaunchService();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      isLoggedIn: false,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      FontAwesome: require('@expo/vector-icons/fonts/FontAwesome.ttf'),
      'Circular-Bold': require('./src/assets/fonts/CircularStd-Bold.otf'),
      Circular: require('./src/assets/fonts/CircularStd-Medium.otf'),
      'Circular-Light': require('./src/assets/fonts/CircularStd-Book.otf'),
      'Calibre-Light': require('./src/assets/fonts/Calibre-Light.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  componentDidMount() {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
    });

    getData('userId', (err, data) => {
      if (data && data.name) {
        this.setState({
          isLoggedIn: true,
        });
      }
    });
    this.renderScreens = this.renderScreens.bind(this);
  }

  renderScreens() {
    if (this.state.isLoggedIn) {
      return (<Home />);
    }
    return (<Login />);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ?
          this.renderScreens()
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
});
