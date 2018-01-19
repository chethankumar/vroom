import React from 'react';
import { View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  Container,
  Header,
  Text,
  Button,
  Content,
  Icon,
  Left,
  Tab,
  Tabs,
  Footer,
  FooterTab,
} from 'native-base';

export class BikeDetail extends React.Component {
  render() {
    return (
      <View>
        <Text>
        Bike detail
        </Text>
      </View>);
  }
}

export default StackNavigator({
  Home: {
    screen: BikeDetail,
  },
});
