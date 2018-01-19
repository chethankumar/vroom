import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import Home from './src/components/Home/Home';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      fontLoaded: false,
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
      'Circular-Bold' : require('./src/assets/fonts/CircularStd-Bold.otf'),
      'Circular' : require('./src/assets/fonts/CircularStd-Medium.otf')
    });
    this.setState({ fontLoaded: true });
  }
  componentDidMount(){
    Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
    });
  }
  render() {
    return (
      <View style={styles.container}>
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
});
