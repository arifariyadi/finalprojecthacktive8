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
import Icon from 'react-native-vector-icons/Ionicons'

//redux
import {getPosts, getApiPosts, getPost} from '../../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Drawer from 'react-native-drawer'

import PostsPopularProps from './PostsPopularProps'

const { height, width } = Dimensions.get('window')

class PostsPopular extends Component {
    constructor(){
        super()
    }
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
        let { getApiPosts } = this.props
        getApiPosts()
    }

    render() {
        let postPopularFilter = this.props.postAll.filter(p => p.author === 1)
        console.log(postPopularFilter, '<----- popular filterssss')
        let postPopularMap = postPopularFilter.map((popular, index) => {
            return(
            <PostsPopularProps key={index} popular={popular}></PostsPopularProps>
            )
        })
        console.log(postPopularMap, '<----- popular filter')
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Popular Post
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {postPopularMap}
                                </ScrollView>
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
      postAll : state.postAll,
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