import React, { Component } from 'react';
import { Left, Body, Text, List, ListItem, Thumbnail } from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';
import moment from 'moment'
import 'moment/min/moment-with-locales'

import {getPosts, getApiPosts, getPost} from '../../actions';

class Posts extends Component{
  render(){
    return(   
      <List dataArray={this.props.postAll}
        renderRow={(item) =>
        <ListItem thumbnail onPress={() => { Actions.Post(); this.props.getPost(item)}}>
          <Left><Thumbnail square large source={{ uri: item.better_featured_image.source_url }} style={{marginTop: 20, borderRadius: 5}} /></Left>
          <Body>
            <Text>{item.title.rendered}</Text>
              <Text note>
                {moment(item.date).format("D MMMM YYYY")} - {moment(item.date).fromNow()}
            </Text>  
          </Body>
        </ListItem>
        }
      >
      </List>
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
export default connect(mapStateToProps, matchDispatchToProps)(Posts);
