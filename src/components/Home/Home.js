import React from 'react';
import styles from './style';
import { View } from 'react-native';
import VehicleList from '../List/List';
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

const defaultProps = {
    list: ['bikes', 'scooters']
}

export default class Home extends React.Component {
    constructor(props){
        super(props);

        this.renderSelectedTab = this.renderSelectedTab.bind(this);
        this.renderTabs = this.renderTabs.bind(this);
        
        this.state = {
            selectedTab: 'bikes' ,
            bikeList: [{
                name:'Fazer',
                maker: 'Yamaha',
                availableFrom: '17/10/2018',
                chargesPerKm: 10,
                imgurl: 'http://www.sagmart.com/car-images/royal-enfield-bullet/appearance-bullet.jpg'
            },{
                name:'Pulsar 220',
                maker: 'Bajaj',
                availableFrom: '17/10/2018',
                chargesPerKm: 10,
                imgurl: 'http://www.sagmart.com/car-images/royal-enfield-bullet/appearance-bullet.jpg'
            },{
                name:'Bullet Classic 350',
                maker: 'Royal Enfield',
                availableFrom: '17/10/2018',
                chargesPerKm: 12,
                imgurl: 'http://www.sagmart.com/car-images/royal-enfield-bullet/appearance-bullet.jpg'
            }],
            scooterList: [{
                name:'Activa',
                maker: 'Honda',
                availableFrom: '17/10/2018',
                chargesPerKm: 10,
                imgurl: 'http://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/hoda-activa-1469096847.jpg'
            },{
                name:'Access 125',
                maker: 'Suzuki',
                availableFrom: '17/10/2018',
                chargesPerKm: 10,
                imgurl: 'http://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/hoda-activa-1469096847.jpg'
            },{
                name:'Maestro',
                maker: 'Mahindra',
                availableFrom: '17/10/2018',
                chargesPerKm: 12,
                imgurl: 'http://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/hoda-activa-1469096847.jpg'
            }]
        };
    }
    renderSelectedTab () {
        switch (this.state.selectedTab) {
          case 'bikes':
            return (  <VehicleList listToRender={this.state.bikeList} selectedType='Bikes'/>);
          case 'scooters':
          return (  <VehicleList listToRender={this.state.scooterList} selectedType='Scooters'/>);
          default:
            return null;
        }
      }
      renderTabs() {
        const tabList =  [];
        this.props.list.map((tabItem, index) => {
          tabList.push(
            <Tab heading={ tabItem } key={index}>
                { tabItem === 'bikes' ? 
                <VehicleList listToRender={this.state.bikeList} selectedType='Scooters'/>  : 
                null}
            </Tab>,
          );
        });
    
        return(
          <Tabs>
            { tabList }
          </Tabs>
        );
      }
  render() {
      return(
        <Container>
            <Header>
                <Left>
                    <Text>Vrooom</Text>
                </Left>
            </Header>
            <Content>
                {this.renderSelectedTab()}
            </Content>
            <Footer>
                <FooterTab>
                    <Button active={this.state.selectedTab === 'bikes'} 
                    onPress={() => this.setState({ selectedTab: 'bikes' })} >
                        <Icon name="ios-apps-outline" />
                    </Button>
                    <Button active={this.state.selectedTab === 'scooters'}
                    onPress={() => this.setState({ selectedTab: 'scooters' })} >
                        <Icon name="camera" />
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
      );
  }
}
