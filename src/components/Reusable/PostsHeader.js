import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import { Left, Body, List, ListItem, Thumbnail } from 'native-base';

import moment from 'moment'
import 'moment/min/moment-with-locales'

import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../../Reusable/Category'

//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';
import {getPosts, getApiPosts, getPost} from '../../../actions';


const { height, width } = Dimensions.get('window')

class PostsPopular extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
        let { getApiPosts } = this.props
        getApiPosts()
    }

    render() {
        let { postAlls } = this.props
        let postFilter = postAlls.filter(f => f.author > 2)
        console.log(postFilter, '<------')
        let postPopular = postFilter.map((post, index) => {
            return(
                <Category key={index} post={post}></Category>
            )
           
        })
        console.log(postPopular, '<------popular')
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
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
                                placeholder="Try New Delhi"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={1000}
                    >
                    
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Berita Terpopuler
                            </Text>
                            
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >   
                                    {postPopular}     
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Berita Terbaru
                                </Text>
                                {/* <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of homes verified for quality & comfort

                                </Text> */}
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri: 'this.postAll.better_featured_image.source_url'}}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
function mapStateToProps(state){
    return{
      postAlls : state.postAll,
    };
  }
  function matchDispatchToProps(dispatch){
    return bindActionCreators({getPosts: getPosts, getApiPosts: getApiPosts, getPost: getPost}, dispatch)
  }
  export default connect(mapStateToProps, matchDispatchToProps)(PostsPopular);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});