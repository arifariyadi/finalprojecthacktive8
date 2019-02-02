import {combineReducers} from 'redux';
import ReducerPosts from './ReducerPosts.js';
import ReducerPost from './ReducerPost.js';

const allReducers= combineReducers({
  postAll: ReducerPosts,
  postDetail: ReducerPost,
});

export default allReducers;
