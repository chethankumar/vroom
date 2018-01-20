import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
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
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../common/theme';
import styles from './BikeDetailStyle';

export class BikeDetail extends React.Component {
  render() {
    return (
      <Container>
        <ScrollView style={[theme.base_background]}>
          <View style={styles.container}>
            <Image resizeMode="cover" source={{ uri: this.props.navigation.state.params.details.imgurl }} style={[styles.image, styles.backgroundContainer]} />
            <View style={styles.back}>
              <TouchableOpacity
                onPress={() => { this.props.navigation.goBack(null); }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={32}
                  color="#fff"

                />
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <Text style={theme.heading}>
                {this.props.navigation.state.params.details.name}
              </Text>
              <Text style={styles.text_normal}>
          Made by <Text style={styles.text_bold}>{this.props.navigation.state.params.details.maker}
          </Text>
              </Text>
              <Text style={styles.text_normal} />
            </View>
          </View>
        </ScrollView>
      </Container>);
  }
}

export default StackNavigator({
  Home: {
    screen: BikeDetail,
  },
}, {
  headerMode: 'none',
});
