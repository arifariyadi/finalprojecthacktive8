import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Icon } from 'native-base';


//redux
import {getPosts, getApiPosts, getPost} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Drawer from 'react-native-drawer'

//import file
import SideBar from '../Reusable/SideBar'
import FooterTabs from '../Reusable/FooterTabs'
import Posts from '../Reusable/Posts'
import PostsPopular from '../Reusable/PostsPopular/PostsPopular'
import PostFeatured from '../Reusable/PostFeatured/PostFeatured'

//moment
import moment from 'moment'
import 'moment/min/moment-with-locales'

class Home extends Component{
  
  componentWillMount(){
    // this.props.getApiPosts();
    let { getApiPosts } = this.props
    getApiPosts()
  }
  closeDrawer() {
    this._drawer.close()  
  };
  openDrawer() {
    this._drawer.open()
  };
  

  render(){
    let { postAll } = this.props

    let postFeaturedFilter = this.props.postAll.filter(f => f.featured_media === 10820)
    console.log(postFeaturedFilter, '<----- featured filterssss')
    let postFeaturedMap = postFeaturedFilter.map((featured, index) => {
        return(
          <PostFeatured key={index} featured={featured}></PostFeatured>
        )
    })
    console.log(postFeaturedMap, '<----- featured filter')

    if(postAll.length === 0){
      return(
        <Container>
          <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10}}>
            <Text style= {{fontSize: 30, fontWeight: 'bold', marginTop: 300, marginBottom: 10, textAlign: 'center'}}>Loading our latest posts, Please wait</Text>
            {/* <Spinner /> */}
            <Image
              style={{width: '40%', height: 100}}
              source={{uri: 'https://loading.io/spinners/color-bar/lg.colorful-progress-loader.gif'}}
            />
          </Content>
        </Container>
      );
    }
    else if(postAll.length !== 0){
      return(
        <Drawer
          type="overlay"
          tapToClose={true}
          openDrawerOffset={0.3} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          ref={(ref) => { this._drawer = ref; }}
          content={<SideBar navigator={this.navigator} />}
        >
          <Container>
              <Header danger style={styles.kurap}>
                <Left>
                  <Button transparent onPress={() => this.openDrawer()}>
                    <Icon name='menu' />
                  </Button>
                </Left>
                <Body>
                    <Title>Sawit Indonesia</Title>
                </Body>
                <Right />
              </Header>
              <Content>
              <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search...."
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                  <PostsPopular/>
                  {postFeaturedMap}
                  <Posts/>
              </Content>
              {/* <FooterTabs/> */}
          </Container>
        </Drawer>
      );
    } 
  }
}

function mapStateToProps(state){
  return{
    postAll : state.postAll,
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({getPosts: getPosts, getApiPosts: getApiPosts, getPost: getPost}, dispatch)
}
const styles = StyleSheet.create({
  kurap: {
    height: 85,
    paddingTop: 20,
    // backgroundColor:"#d9534f",
  },
  searchTopMargin: {
    paddingTop: -Platform.OS === 'android' ? 0 : 0,
  }
});
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
export default connect(mapStateToProps, matchDispatchToProps)(Home);

