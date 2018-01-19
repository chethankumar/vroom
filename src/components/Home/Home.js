import React from 'react';
import { View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
import styles from './style';
import VehicleList from '../List/List';
import BikeDetail from '../BikeDetail/BikeDetail';

const defaultProps = {
  list: ['bikes', 'scooters'],
};

export class Home extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomColor: '#fff',
    },
  };

  constructor(props) {
    super(props);

    this.renderSelectedTab = this.renderSelectedTab.bind(this);
    this.showDeatil = this.showDeatil.bind(this);
    // this.renderTabs = this.renderTabs.bind(this);

    this.state = {
      selectedTab: 'bikes',
      bikeList: [{
        name: 'Fazer',
        maker: 'Yamaha',
        availableFrom: '17/10/2018',
        chargesPerKm: 10,
        imgurl: 'https://cdn1.droom.in//photos/mmt_gallery/2241/_nd3913411120170728.jpg',
      }, {
        name: 'Pulsar 220',
        maker: 'Bajaj',
        availableFrom: '17/10/2018',
        chargesPerKm: 10,
        imgurl: 'https://www.thrustzone.com/wp-content/uploads/sansys_photo_gallery/307/2017-Bajaj-Pulsar-220-BSIV-Review-12.jpg',
      }, {
        name: 'Bullet Classic 350',
        maker: 'Royal Enfield',
        availableFrom: '17/10/2018',
        chargesPerKm: 12,
        imgurl: 'http://www.sagmart.com/car-images/royal-enfield-bullet/appearance-bullet.jpg',
      }, {
        name: 'Fazer',
        maker: 'Yamaha',
        availableFrom: '17/10/2018',
        chargesPerKm: 10,
        imgurl: 'https://cdn1.droom.in//photos/mmt_gallery/2241/_nd3913411120170728.jpg',
      }, {
        name: 'Pulsar 220',
        maker: 'Bajaj',
        availableFrom: '17/10/2018',
        chargesPerKm: 10,
        imgurl: 'https://www.thrustzone.com/wp-content/uploads/sansys_photo_gallery/307/2017-Bajaj-Pulsar-220-BSIV-Review-12.jpg',
      }, {
        name: 'Bullet Classic 350',
        maker: 'Royal Enfield',
        availableFrom: '17/10/2018',
        chargesPerKm: 12,
        imgurl: 'http://www.sagmart.com/car-images/royal-enfield-bullet/appearance-bullet.jpg',
      }, {
        name: 'Fazer',
        maker: 'Yamaha',
        availableFrom: '17/10/2018',
        chargesPerKm: 10,
        imgurl: 'https://cdn1.droom.in//photos/mmt_gallery/2241/_nd3913411120170728.jpg',
      }, {
        name: 'Pulsar 220',
        maker: 'Bajaj',
        availableFrom: '17/10/2018',
        chargesPerKm: 10,
        imgurl: 'https://www.thrustzone.com/wp-content/uploads/sansys_photo_gallery/307/2017-Bajaj-Pulsar-220-BSIV-Review-12.jpg',
      }, {
        name: 'Bullet Classic 350',
        maker: 'Royal Enfield',
        availableFrom: '17/10/2018',
        chargesPerKm: 12,
        imgurl: 'http://www.sagmart.com/car-images/royal-enfield-bullet/appearance-bullet.jpg',
      }, {
        name: 'Fazer',
        maker: 'Yamaha',
        availableFrom: '17/10/2018',
        chargesPerKm: 10,
        imgurl: 'https://cdn1.droom.in//photos/mmt_gallery/2241/_nd3913411120170728.jpg',
      }, {
        name: 'Pulsar 220',
        maker: 'Bajaj',
        availableFrom: '17/10/2018',
        chargesPerKm: 10,
        imgurl: 'https://www.thrustzone.com/wp-content/uploads/sansys_photo_gallery/307/2017-Bajaj-Pulsar-220-BSIV-Review-12.jpg',
      }],
      scooterList: [{
        name: 'Activa',
        maker: 'Honda',
        availableFrom: '17/10/2018',
        chargesPerKm: 10,
        imgurl: 'http://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/hoda-activa-1469096847.jpg',
      }, {
        name: 'Access 125',
        maker: 'Suzuki',
        availableFrom: '17/10/2018',
        chargesPerKm: 10,
        imgurl: 'http://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/hoda-activa-1469096847.jpg',
      }, {
        name: 'Maestro',
        maker: 'Mahindra',
        availableFrom: '17/10/2018',
        chargesPerKm: 12,
        imgurl: 'http://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/hoda-activa-1469096847.jpg',
      }],
    };
  }


  showDeatil(details) {
    this.props.navigation.navigate('BikeDetail', { details });
  }

  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case 'bikes':
        return (<VehicleList
          listToRender={this.state.bikeList}
          selectedType="Bikes"
          onTap={(details) => { this.showDeatil(details); }}
        />);
      case 'scooters':
        return (<VehicleList
          listToRender={this.state.scooterList}
          selectedType="Scooters"
          onTap={(details) => { this.showDeatil(details); }}
        />);
      default:
        return null;
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ScrollView>
          {this.renderSelectedTab()}
        </ScrollView>
        <Footer>
          <FooterTab>
            <Button
              active={this.state.selectedTab === 'bikes'}
              onPress={() => this.setState({ selectedTab: 'bikes' })}
            >
              <MaterialCommunityIcons name="motorbike" size={32} color="#2874F0" />
            </Button>
            <Button
              active={this.state.selectedTab === 'scooters'}
              onPress={() => this.setState({ selectedTab: 'scooters' })}
            >
              <Icon name="camera" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: Home,
  },
  BikeDetail: {
    screen: BikeDetail,
  },
});

