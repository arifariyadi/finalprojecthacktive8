import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native'
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, List, ListItem, Icon, H1, H2} from 'native-base';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import moment from 'moment'
import HTML from 'react-native-render-html'

class SusunanRedaksi extends Component{
  render(){
    // let { title, date, content, better_featured_image } = this.props.postDetail
    const htmlContent = `
    <strong>PEMIMPIN REDAKSI</strong>: Qayuum Amri
    <br/>
    <strong>REDAKSI AHLI</strong>
    <ol>
       <li>Dr. Rusman Heriawan</li>
       <li>Dr. Dwi Asmono</li>
       <li>Dr. Darmono Taniwiryono</li>
       <li>Dr. M.Fadhil Hasan</li>
       <li>Maruli Gultom</li>
       <li>Tofan Mahdi</li>
       <li>Rino Afrino, ST, MM</li>
       <li>Wawan Diasomantri</li>
    </ol>
    <strong>SIDANG REDAKSI</strong>
    <ol>
       <li>Bebanbebe</li>
       <li>M.Agus</li>
       <li>Roby Fitrianto</li>
    </ol>
    <strong>ARTISTIK &amp; WEB</strong>
    Arif Ariyadi<br/>
    
    <strong>FOTOGRAFER</strong>
    Iman Saputra<br/>
    
    <strong>MARKETING</strong>
    Yasin Permana<br/>
    
    <strong>SIRKULASI</strong>
    Didi Wahyudi<br/>
    <strong>UMUM</strong>
    Abustomi`;
    return(
      <Container>
        <Header style={styles.kurap}>
          <Left>
            <Button transparent onPress= {()=>Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Susunan Redaksi</Title>
          </Body>
          <Right>
          
          </Right>
        </Header>
        <Content>
        <Image source={{uri: 'https://sawitindonesia.com/wp-content/uploads/2016/11/kecambah-sawit.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          <List>
            <ListItem>
              <HTML html={htmlContent} />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
  
}

const styles = StyleSheet.create({
  kurap: {
    height: 85,
    paddingTop: 20,
    opacity: 60,
    // backgroundColor:"#d9534f",
  },
});
export default SusunanRedaksi;
