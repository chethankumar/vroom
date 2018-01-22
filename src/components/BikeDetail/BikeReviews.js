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
  Right,
  Card,
  Grid,
  Col,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../common/theme';
import StarRating from 'react-native-star-rating';


export default class BikeReviews extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        // this.props.reviews.map()
        return(
            <Card>
                <Text> I am a review</Text>
            </Card>
        )
    }
}
