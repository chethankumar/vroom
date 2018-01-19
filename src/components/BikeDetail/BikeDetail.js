import React from 'react';
import { View, Image, ScrollView } from 'react-native';
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
import theme from '../common/theme';
import styles from './BikeDetailStyle';

export class BikeDetail extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomColor: '#fff',
    },
  };
  render() {
    return (
      <View style={theme.base_background}>
        <Image resizeMode="cover" source={{ uri: this.props.navigation.state.params.details.imgurl }} style={theme.image} />
        <Text style={theme.heading}>
          {this.props.navigation.state.params.details.name}
        </Text>
        <Text style={styles.text_normal}>
          Made by <Text style={styles.text_bold}>{this.props.navigation.state.params.details.maker}
                  </Text>
        </Text>
        <Text style={styles.text_normal} />
      </View>);
  }
}

export default StackNavigator({
  Home: {
    screen: BikeDetail,
  },
});
