import React from 'react';
import { Text, Image, View } from 'react-native';
import { StyleSheet } from 'react-native';
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
            <Card style={styles.cardStyles} key={index}>
                <CardItem cardBody style={styles.imageContainer}>
                    {this.props.selectedType === 'Bikes' ?
                        <Image resizeMode="cover" source={{uri: 'http://www.sagmart.com/car-images/royal-enfield-bullet/appearance-bullet.jpg'}} style={{height: 200, width: '100%', borderWidth:0}}/>
                        :   
                        <Image resizeMode="cover" source={{uri: 'http://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/hoda-activa-1469096847.jpg'}} style={{height: 200, width: '100%', borderWidth:0}}/>
                    }
                </CardItem>
                <Text style={styles.textStyles}>{item.maker} {item.name}</Text>
                <CardItem cardBody style={styles.imageContainer}>
                    <Left>
                        <Text style={styles.contentText}>{item.availableFrom}</Text>
                    </Left>
                    <Right>
                        <Text style={styles.contentText}>{item.chargesPerKm} rs per km</Text>
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
        <Container style={styles.container}>
            <Text style={styles.headerStyle}>{this.props.selectedType}</Text>
            <Content style={styles.contentStyle}>
                {this.renderList()}
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    headerStyle: {
        fontFamily: 'Circular-Bold',
        fontSize: 50,
        paddingLeft: 15,
    },
    cardStyles:{
        marginBottom: 30,
        shadowOpacity: 0,
        borderWidth: 0,
        borderRadius: 0,
        padding: 15,
        borderTopWidth:0,
        borderBottomWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
    },
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
      textStyles: {
          fontWeight: "800",
          fontSize:30,
          fontFamily: 'Circular-Bold',
      },
      contentText: {
          fontSize: 15,
          fontFamily: 'Circular',
          fontWeight: "500"
      }
});  