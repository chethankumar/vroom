import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  Container,
  Header,
  Text,
  Left,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Right,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Grid,
  Col,
} from 'native-base';
import StarRating from 'react-native-star-rating';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../common/theme';
import styles from './BikeDetailStyle';


export default class BikeReviews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const reviewList = [];
    this.props.details.reviews.map((review, index) => {
      reviewList.push(<Card style={[theme.noborder, theme.noshadow, theme.noelevation, styles.reviewsCard]}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: this.props.details.imgurl }} />
            <Body>
              <Text>{review.reviewer}</Text>
              <View style={{ width: 60, justifyContent: 'space-around' }}>
                <StarRating
                  disabled={false}
                  emptyStar="ios-star-outline"
                  fullStar="ios-star"
                  halfStar="ios-star-half"
                  iconSet="Ionicons"
                  maxStars={5}
                  starSize={15}
                  rating={review.rating}
                  starColor="#FF5722"
                />
              </View>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Text>{review.comment}</Text>
        </CardItem>
      </Card>);
    });
    return (
      <View>{reviewList}</View>
    );
  }
}
