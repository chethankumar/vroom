import React from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import GridView from 'react-native-super-grid';
import { List, ListItem, Card, CardItem, Body, Left, Icon, Right, Content, Row, Col, Grid, Container } from 'native-base';
import theme from '../common/theme';
import styles from './style';

const defaultProps = {
  listToRender: [],
};

export default class VehicleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interfaceType: 'grid',
    };

    this.renderList = this.renderList.bind(this);
    this.renderGrid = this.renderGrid.bind(this);
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
              <Image resizeMode="cover" source={{ uri: item.imgurl }} style={theme.image} />
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

  renderGrid() {
    const vehicleList = [];
    this.props.listToRender.map((item, index) => {
      vehicleList.push(<TouchableOpacity onPress={() => { this.props.onTap(item); }} key={index}>
        <Card style={theme.card} key={index}>
          <CardItem cardBody style={styles.imageContainer}>
            {this.props.selectedType === 'Bikes' ?
              <Image resizeMode="cover" source={{ uri: item.imgurl }} style={theme.image} />
                        :
              <Image resizeMode="cover" source={{ uri: item.imgurl }} style={theme.image} />
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
      <GridView
        itemDimension={130}
        style={styles.container}
        items={this.props.listToRender}
        renderItem={item => (
          <TouchableOpacity onPress={() => { this.props.onTap(item); }} >
            <Card style={theme.card} >
              <CardItem cardBody style={styles.imageContainer}>
                {this.props.selectedType === 'Bikes' ?
                  <Image resizeMode="cover" source={{ uri: item.imgurl }} style={theme.image} />
                        :
                  <Image resizeMode="cover" source={{ uri: item.imgurl }} style={theme.image} />
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
          </TouchableOpacity>
        )}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Content style={styles.contentStyle}>
          <Text style={theme.heading}>{this.props.selectedType}</Text>
          {this.state.interfaceType === 'list' ?
          this.renderList()
          :
          this.renderGrid()}
        </Content>
      </View>
    );
  }
}
