import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
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
  Right,
  Card,
  Grid,
  Col,
} from 'native-base';
import theme from '../common/theme';
import DateTimePicker from 'react-native-modal-datetime-picker';

const defaultProps = {
  isShow: false,
};
export default class BookBike extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <View style={{ flex: 1 }}>
        <DateTimePicker
          isVisible={this.props.isShow}
          onConfirm={() => { this.props.onBook(); }}
          onCancel={() => { this.props.hideBookPage(); }}
          mode="time"
        />
    );
      // </View>);
  }
}
