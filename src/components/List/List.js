import React from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../common/theme';
import styles from './style';
import { List, ListItem, Card, CardItem, Body, Left, Icon, Right, Content, Row, Col, Grid, Container } from 'native-base';

import BikeDetail from '../BikeDetail/BikeDetail';

const defaultProps = {
  listToRender: [],
};

export default class VehicleList extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    const vehicleList = [];
    this.props.listToRender.map((item, index) => {
      vehicleList.push(<TouchableOpacity onPress={() => { this.props.onTap(item); }} key={index}>
        <Card style={theme.card} key={index}>
          <CardItem cardBody style={styles.imageContainer}>
            {this.props.selectedType === 'Bikes' ?
              <Image resizeMode="cover" source={{ uri: item.imgurl }} style={theme.image} />
                        :
              <Image resizeMode="cover" source={{ uri: 'http://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/hoda-activa-1469096847.jpg' }} style={theme.image} />
                    }
          </CardItem>
          <Text style={theme.text_bold}>{item.maker} {item.name}</Text>
          <CardItem cardBody style={styles.imageContainer}>
            <Left>
              <Text style={theme.text_normal}>Available From {item.availableFrom}</Text>
            </Left>
            <Right>
              <Text style={theme.text_normal}>@{item.chargesPerKm}/km</Text>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>);
    });

    return (
      <List bordered={false} style={styles.container}>
        {vehicleList}
      </List>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Content style={styles.contentStyle}>
          <Text style={theme.heading}>{this.props.selectedType}</Text>
          {this.renderList()}
        </Content>
      </View>
    );
  }
}
