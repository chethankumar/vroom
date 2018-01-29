import React from 'react';
import { View, ScrollView, Platform, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Spinner from 'react-native-loading-spinner-overlay';
import { v1 } from 'uuid';
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
import { getData, saveData } from '../../api/db';
import Home from '../Home/Home';
import { applaunchService } from '../../../App';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userSaved: false,
    };
    this.createUser = this.createUser.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
  }

  componentDidMount() {
    // const user = getData('userId');
    // console.log(`User is ${user}`);
  }

  onChangeUserName(e) {
    this.setState({ userName: e.nativeEvent.text });
  }

  createUser() {
    console.log('saving user');
    saveData('userId', { name: this.state.userName });
    this.setState({
      userSaved: true,
    });

    let betaTester = false;
    if (this.state.userName === 'Chethan') {
      betaTester = true;
    }
    // 4d70d446-a84a-4b80-8300-dabbbe99b942
    applaunchService.initialize('us-south', 'ad237ea7-f850-49d2-9f79-d926477dce19', 'f8adac30-ca10-4d72-96dc-afc47936a043', v1(), null, { userId: this.state.userName, platform: 'iOS' }, { 'beta tester': betaTester }).then((res) => {
      console.log(`init ${JSON.stringify(res)}`);
    }).catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
  }

  render() {
    if (this.state.userSaved) {
      return (<Home />);
    }
    return (
      <Container style={{ shadowColor: '#fff' }}>
        <View style={styles.statusBar} />
        <View style={styles.view}>
          <LinearGradient
            colors={['#ff5722d4', '#ff5722e6', '#FF5A5F']}
            style={styles.contentContainer}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.imageContainer}>
              {/* https://i.imgur.com/dzu25yR.png */}
              <Image resizeMode="contain" source={require('../../assets/images/logo.png')} style={styles.image} />
            </View>
            <Text style={[theme.text_regular_large, styles.intro]}>Welcome to Vrooom.</Text>
            <Content style={styles.formWrapper}>
              <Form>
                <Item stackedLabel style={styles.formItem}>
                  <Label style={[theme.text_regular, theme.invert_color]}>Username</Label>
                  <Input
                    style={[theme.text_normal, theme.invert_color]}
                    onChange={e => this.onChangeUserName(e)}
                  />
                </Item>
                <Item stackedLabel style={styles.formItem}>
                  <Label style={[theme.text_regular, theme.invert_color]}>Password</Label>
                  <Input secureTextEntry style={[theme.text_normal, theme.invert_color]} />
                </Item>
                <Button
                  full
                  style={[styles.createButton, styles.facebookButton]}
                  onPress={() => this.createUser()}
                >
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
