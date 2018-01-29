import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
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
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { getData, saveData } from '../../api/db';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../common/theme';
import styles from './BikeDetailStyle';
import StarRating from 'react-native-star-rating';
import BikeReviews from './BikeReviews';
import BookBike from './Bookbike';
import { applaunchService } from '../../../App';

export class BikeDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBookModal: false,
      showTestBookModal: false,
      isBooked: false,
      showStatusBar: false,
      bookingPosition: 'sticky',
      hasTestDriveFeature: false,
      testDriveButtonText: 'Book',
      testDriveButtonColor: '#FF5722',
      testDriveButtonCornerRadius: 50,
    };

    this.showBookPage = this.showBookPage.bind(this);
    this.hideBookPage = this.hideBookPage.bind(this);
    this.bookAbike = this.bookAbike.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.showTestBookPage = this.showTestBookPage.bind(this);
    this.hideTestBookPage = this.hideTestBookPage.bind(this);
    this.bookTestdrive = this.bookTestdrive.bind(this);
  }

  componentDidMount = () => {
    // check for bookings
    getData('booking', (err, data) => {
      if (data && data.length > 0) {
        data.map((item) => {
          if (item.name === this.props.navigation.state.params.details.name) {
            this.setState({
              isBooked: true,
            });
          }
        });
      }
    });

    applaunchService.hasFeatureWith('_tr40xzif0', (val) => {
      if (val) {
        this.setState({ hasTestDriveFeature: true });
        applaunchService.getValueFor('_tr40xzif0', '_hxrp9jh49', (err, text) => {
          if (text) {
            this.setState({ testDriveButtonText: text });
          }
        });
      }
    });

    applaunchService.hasFeatureWith('_f4dn5s8pu', (val) => {
      if (val) {
        applaunchService.getValueFor('_f4dn5s8pu', '_bllfx2mda', (err, text) => {
          if (text) {
            this.setState({ bookingPosition: text });
          }
        });
      }
    });
  }


  handleScroll(event: Object) {
    // console.log(event.nativeEvent.contentOffset.y);
    // if (event.nativeEvent.contentOffset.y > 50) {
    //   this._setAnimation(true);
    //   this.setState({
    //     showStatusBar: true,
    //   });
    // } else {
    //   this._setAnimation(false);
    //   this.setState({
    //     showStatusBar: false,
    //   });
    // }
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

  showTestBookPage() {
    this.setState({
      showTestBookModal: true,
    });
  }
  hideTestBookPage() {
    this.setState({
      showTestBookModal: false,
    });
  }
  // book a test drive
  bookTestdrive() {
    console.log('test drive');
    this.setState({
      showTestBookModal: false,
      isBookedTestDrive: true,
    });
    let currentTestDriveBooking = [];
    getData('testDriveBooking', (err, data) => {
      if (data && data.length > 0) {
        currentTestDriveBooking = data;
      }
      if (currentTestDriveBooking && currentTestDriveBooking.length > 0) {
        currentTestDriveBooking.push({
          name: this.props.navigation.state.params.details.name,
          booked: true,
        });
      } else {
        currentTestDriveBooking = [{
          name: this.props.navigation.state.params.details.name,
          booked: true,
        }];
      }
      saveData('testDriveBooking', currentTestDriveBooking);
    });
  }
  bookAbike() {
    console.log('Booked!');
    this.setState({
      showBookModal: false,
      isBooked: true,
    });
    let currentBooking = [];
    getData('booking', (err, data) => {
      if (data && data.length > 0) {
        currentBooking = data;
      }
      if (currentBooking && currentBooking.length > 0) {
        currentBooking.push({
          name: this.props.navigation.state.params.details.name,
          booked: true,
        });
      } else {
        currentBooking = [{
          name: this.props.navigation.state.params.details.name,
          booked: true,
        }];
      }
      saveData('booking', currentBooking);
    });

    // booking: [{name: asdf, booked: '11/12'}]
  }

  render() {
    return (
      <Container>
        <ParallaxScrollView
          style={[styles.wrapper, theme.base_background]}
          onScroll={this.handleScroll}
          parallaxHeaderHeight={300}
          backgroundColor="#FF5722"
          renderForeground={() => (
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
            </View>
           )}
        >
          <View style={styles.container}>
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

            {this.state.hasTestDriveFeature ?
              <View style={styles.testDriveWrapper}>
                <Button full style={{ backgroundColor: this.state.testDriveButtonColor, borderColor: this.state.testDriveButtonColor, borderRadius: this.state.testDriveButtonCornerRadius }}>
                  <Text style={[theme.text_normal, theme.invert_color]}>
                    {this.state.testDriveButtonText}
                  </Text>
                </Button>
              </View>
          : null}

            <Card style={[theme.noborder, theme.noshadow, theme.noelevation, styles.detailsCard]}>
              <Grid>
                <Col>
                  <Text style={[theme.text_bold, styles.detailsTextWrapper, theme.theme_color]}>{this.props.navigation.state.params.details.totalAvailable}</Text>
                  <Text style={[theme.text_light, styles.detailsTextWrapper]}>available</Text>
                </Col>
                <Col>
                  <Text style={[theme.text_bold, styles.detailsTextWrapper, theme.theme_color]}>{this.props.navigation.state.params.details.kmsFree}</Text>
                  <Text style={[theme.text_light, styles.detailsTextWrapper]}>kms free</Text>
                </Col>
                <Col>
                  <Text style={[theme.text_bold, styles.detailsTextWrapper, theme.theme_color]}>{this.props.navigation.state.params.details.chargesPerKm}<Text style={[theme.text_regular_large, styles.detailsTextWrapper, theme.theme_color]}> ₹</Text></Text>
                  <Text style={[theme.text_light, styles.detailsTextWrapper]}>charges after</Text>
                </Col>
              </Grid>
            </Card>
            <Card style={[theme.noborder, theme.noshadow, theme.noelevation, styles.aboutCard]}>
              <Text style={[theme.text_normal]}>About the Bike</Text>
              <Text />
              <Text style={[theme.text_light]}>{this.props.navigation.state.params.details.about}</Text>
            </Card>
            <BikeReviews
              style={{ backgroundColor: '#fff' }}
              details={this.props.navigation.state.params.details}
            />
          </View>
          <BookBike hideBookPage={this.hideBookPage} isShow={this.state.showBookModal} onBook={this.bookAbike} />

          {this.state.bookingPosition === 'sticky' ?
          null :
          <View>
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
          </View>
            }
        </ParallaxScrollView>
        {this.state.bookingPosition === 'sticky' ?
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
        : null}
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
