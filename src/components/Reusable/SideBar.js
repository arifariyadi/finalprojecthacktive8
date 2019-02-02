import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Button, Icon } from "native-base";
import { Actions } from 'react-native-router-flux';
export default class SideBar extends React.Component {
  closeDrawer() {
    this._drawer.close()
  };
  
  render() {
    const goToHome = () => {
      Actions.Home()
    }
    const goToAbout = () => {
      Actions.AboutUs()
    }
    const goToRedaksi = () => {
      Actions.SusunanRedaksi()
    }
    const goToPembelianMajalah = () => {
      Actions.PembelianMajalah()
    }
    
    return (
      <Container>
        <Content>
        <Image source={{uri: 'https://sawitindonesia.com/wp-content/uploads/2016/11/buah-sawit-terbelah.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          <List>
              <ListItem>
                <Button transparent onPress={goToHome}>
                  <Text>Beranda</Text>
                </Button>
              </ListItem>
              <ListItem>
                <Button transparent onPress={goToAbout}>
                  <Text>Tentang Kami</Text>
                </Button>
              </ListItem>
              <ListItem>
                <Button transparent onPress={goToRedaksi}>
                  <Text>Susunan Redaksi</Text>
                </Button>
              </ListItem>
              <ListItem>
                <Button transparent onPress={goToPembelianMajalah}>
                  <Text>Pembelian Majalah</Text>
                </Button>
              </ListItem>
              <ListItem>
                <Button transparent onPress={goToHome}>
                  <Text>Tutup Menu</Text>
                </Button>
              </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
