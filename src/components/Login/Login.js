import React from 'react';
import { View, ScrollView, Platform, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Spinner from 'react-native-loading-spinner-overlay';
import { Constants, LinearGradient } from 'expo';
import {
  Container,
  Header,
  Text,
  Button,
  Content,
  Icon,
  Form,
  Item,
  Label,
  Input,
} from 'native-base';
import styles from './LoginStyles';
import theme from '../common/theme';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ shadowColor: '#fff' }}>
        <View style={styles.statusBar} />
        <View style={styles.view}>
          <LinearGradient
            colors={['#ff5722d4', '#ff5722e6', '#FF5722']}
            style={styles.contentContainer}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.imageContainer}>
              <Image resizeMode="contain" source={{ uri: 'https://i.imgur.com/dzu25yR.png' }} style={styles.image} />
            </View>
            <Text style={[theme.text_regular_large, styles.intro]}>Welcome to Vrooom.</Text>
            <Content style={styles.formWrapper}>
              <Form>
                <Item stackedLabel style={styles.formItem}>
                  <Label style={[theme.text_normal, theme.invert_color]}>Username</Label>
                  <Input />
                </Item>
                <Item stackedLabel style={styles.formItem}>
                  <Label style={[theme.text_normal, theme.invert_color]}>Password</Label>
                  <Input />
                </Item>
                <Button full style={[styles.createButton, styles.facebookButton]}>
                  <Text style={[theme.text_regular, theme.invert_color]}>Sign In</Text>
                </Button>
              </Form>
            </Content>
            <Content>
              <Button full style={[theme.secondary_btn, styles.facebookButton]}>
                <FontAwesome name="facebook" style={[theme.theme_color, styles.fbIcon]} width="40" height="40" />
                <Text style={[theme.text_regular, theme.theme_color]}>Continue with Facebook</Text>
              </Button>
            </Content>
          </LinearGradient>
        </View>
      </Container>
    );
  }
}
