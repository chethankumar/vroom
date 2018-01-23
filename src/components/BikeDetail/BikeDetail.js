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
import styles from './BikeDetailStyle';
import StarRating from 'react-native-star-rating';
import BikeReviews from './BikeReviews';
import BookBike from './Bookbike';

export class BikeDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBookModal: false,
      isBooked: false,
    };

    this.showBookPage = this.showBookPage.bind(this);
    this.hideBookPage = this.hideBookPage.bind(this);
    this.bookAbike = this.bookAbike.bind(this);
  }
  showBookPage() {
    this.setState({
      showBookModal: true,
    });
  }
  hideBookPage() {
    this.setState({
      showBookModal: false,
    });
  }
  bookAbike() {
    console.log('Booked!');
    this.setState({
      showBookModal: false,
      isBooked: true,
    });
  }
  render() {
    return (
      <Container>
        <ScrollView style={[styles.wrapper, theme.base_background]}>
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
                Made by
                <Text style={styles.text_bold}> {this.props.navigation.state.params.details.maker}</Text>
              </Text>
              <Text style={styles.text_normal} />
            </View>
            <Card style={[theme.noborder, theme.noshadow, theme.noelevation, styles.detailsCard]}>
              <Grid>
                <Col style={styles.detailsTextWrapper}>
                  <Text style={[theme.text_bold, styles.detailsTextWrapper, theme.theme_color]}>{this.props.navigation.state.params.details.totalAvailable}</Text>
                  <Text style={[theme.text_light, styles.detailsTextWrapper]}>available</Text>
                </Col>
                <Col style={styles.detailsTextWrapper}>
                  <Text style={[theme.text_bold, styles.detailsTextWrapper, theme.theme_color]}>{this.props.navigation.state.params.details.kmsFree}</Text>
                  <Text style={[theme.text_light, styles.detailsTextWrapper]}>kms free</Text>
                </Col>
                <Col style={styles.detailsTextWrapper}>
                  <Text style={[theme.text_bold, styles.detailsTextWrapper, theme.theme_color]}>{this.props.navigation.state.params.details.chargesPerKm}<Text style={[theme.text_regular_large, styles.detailsTextWrapper, theme.theme_color]}> ₹</Text></Text>
                  <Text style={[theme.text_light, styles.detailsTextWrapper]}>charges after</Text>
                </Col>
              </Grid>
            </Card>
            <Card style={[theme.noborder, theme.noshadow, theme.noelevation, styles.aboutCard]}>
              <Text style={[theme.text_normal]}>About the Bike</Text>
              <Text style={[theme.text_light]}>{this.props.navigation.state.params.details.about}</Text>
            </Card>
            <BikeReviews details={this.props.navigation.state.params.details} />
          </View>
          <BookBike hideBookPage={this.hideBookPage} isShow={this.state.showBookModal} onBook={this.bookAbike} />
        </ScrollView>
        <Footer style={styles.footer}>
          <Left style={styles.buttonWrapper}>
            <Text style={theme.text_normal}>INR {this.props.navigation.state.params.details.baseTarrif}</Text>
            <StarRating
              disabled={false}
              emptyStar="ios-star-outline"
              fullStar="ios-star"
              halfStar="ios-star-half"
              iconSet="Ionicons"
              maxStars={5}
              starSize={15}
              rating={this.props.navigation.state.params.details.ratings}
              starColor="#FF5722"
            />
          </Left>
          <Right style={styles.buttonWrapper}>
            {this.state.isBooked ?
              <Button full style={[theme.secondary_btn]}>
                <Icon name="ios-checkmark-circle-outline" style={theme.theme_color} />
                <Text style={[theme.text_normal, styles.bookedText]}>Booked</Text>
              </Button>
            :
              <Button full style={[theme.primary_btn]} onPress={() => { this.showBookPage(); }}>
                <Text style={theme.text_normal}>Select Time</Text>
              </Button>
            }
          </Right>
        </Footer>
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
