import React from 'react';
import { Text, Image, View } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../common/theme';
// import styles from './style';
import { List, ListItem, Card, CardItem, Body, Left, Icon, Right, Content, Row, Col, Grid, Container } from 'native-base';

const defaultProps = {
    listToRender: [],
}

export default class VehicleList extends React.Component {
  constructor(props){
      super(props);

      this.renderList = this.renderList.bind(this);
  }
  renderList(){
      const vehicleList = [];
      this.props.listToRender.map((item, index) => {
        vehicleList.push( 
            <Card style={theme.card} key={index}>
                <CardItem cardBody style={styles.imageContainer}>
                    {this.props.selectedType === 'Bikes' ?
                        <Image resizeMode="cover" source={{uri: 'http://www.sagmart.com/car-images/royal-enfield-bullet/appearance-bullet.jpg'}} style={theme.image}/>
                        :   
                        <Image resizeMode="cover" source={{uri: 'http://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/hoda-activa-1469096847.jpg'}} style={theme.image}/>
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
        );
      });

      return(
          <List bordered={false}>
              {vehicleList}
          </List>
      )
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

const styles = StyleSheet.create({
    imageContainer: {
        marginBottom: 20,
    },
    rowStyle:{
        flexDirection:'column',
    },
    contentStyle: {
        borderBottomWidth: 0,
        borderWidth: 0,
      },
});  