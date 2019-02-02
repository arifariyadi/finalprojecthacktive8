import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native'
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, List, ListItem, Icon, H1, H2} from 'native-base';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import moment from 'moment'
import HTML from 'react-native-render-html'

import PostPopular from './PostsPopular/PostsPopular'

class Home extends Component{
  render(){
    let { title, date, content, better_featured_image } = this.props.postDetail
    return(
      <Container>
        <Header style={styles.kurap}>
          <Left>
            <Button transparent onPress= {()=>Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Sawit Indonesia</Title>
          </Body>
          <Right>
          <Button transparent>
              <Icon name='heart' />
            </Button>
          </Right>
        </Header>
        <Content>
        <Image source={{uri: better_featured_image.source_url}} style={{height: 200, width: null, flex: 1}}/>
          <List>
            
            <ListItem><H2>{title.rendered}</H2></ListItem>
            <ListItem><Text note>{moment(date).format("D MMMM YYYY")} - {moment(date).fromNow()}</Text></ListItem>
            <ListItem>
              <HTML html={content.rendered} />
            </ListItem>
              
          </List>
          <View style={{ marginBottom: 50 }}><PostPopular/></View>
          
        </Content>
      </Container>
    );
  }
  
}
function mapStateToProps(state){
  return{
    postDetail : state.postDetail
  };
}
const styles = StyleSheet.create({
  kurap: {
    height: 85,
    paddingTop: 20,
    opacity: 60,
    // backgroundColor:"#d9534f",
  },
});
export default connect(mapStateToProps)(Home);
