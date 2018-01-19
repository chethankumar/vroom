import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
// import styles from './style';
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
      vehicleList.push(<TouchableOpacity onPress={this.props.onTap} key={index}>
        <Card style={styles.cardStyles} >
          <CardItem cardBody style={styles.imageContainer}>
            {this.props.selectedType === 'Bikes' ?
              <Image resizeMode="cover" source={{ uri: 'http://www.sagmart.com/car-images/royal-enfield-bullet/appearance-bullet.jpg' }} style={styles.imageStyles} />
                        :
              <Image resizeMode="cover" source={{ uri: 'http://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/hoda-activa-1469096847.jpg' }} style={styles.imageStyles} />
                    }
          </CardItem>
          <Text style={styles.textStyles}>{item.maker} {item.name}</Text>
          <CardItem cardBody style={styles.imageContainer}>
            <Left>
              <Text style={styles.contentText}>Available From : </Text>
              <Text>{item.availableFrom}</Text>
            </Left>
            <Right>
              <Text style={styles.contentText}>@{item.chargesPerKm}/km</Text>
            </Right>
          </CardItem>
        </Card>
                       </TouchableOpacity>);
    });

    return (
      <List bordered={false}>
        {vehicleList}
      </List>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Content style={styles.contentStyle}>
          <Text style={styles.headerStyle}>{this.props.selectedType}</Text>
          {this.renderList()}
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    fontFamily: 'Circular-Bold',
    fontSize: 50,
    paddingLeft: 15,
  },
  cardStyles: {
    marginBottom: 30,
    shadowOpacity: 0,
    borderWidth: 0,
    borderRadius: 0,
    padding: 15,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    elevation: 0,
  },
  imageContainer: {
    marginBottom: 20,
  },
  imageStyles: {
    height: 200,
    width: '100%',
    borderWidth: 0,
    borderRadius: 2,
  },
  rowStyle: {
    flexDirection: 'column',
  },
  contentStyle: {
    borderBottomWidth: 0,
    borderWidth: 0,
  },
  textStyles: {
    fontWeight: '800',
    fontSize: 30,
    fontFamily: 'Circular-Bold',
  },
  contentText: {
    fontSize: 15,
    fontFamily: 'Circular',
    fontWeight: '500',
  },
});
