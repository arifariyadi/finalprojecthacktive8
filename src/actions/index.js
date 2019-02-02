import axios from 'axios'
export const getApiPosts = () => {
  return function(dispatch, getState) {
    fetch('https://sawitindonesia.com/wp-json/wp/v2/posts')
    .then(e => e.json())
      .then(function(response){
        console.log(response);
        var arr = response.slice(0,20);
        dispatch(getPosts(arr))
      }).catch((error) => {
           console.error(error,"ERRRRRORRR");
       });
  }
}


//posts
export const getPosts = (payload) => ({
  type: 'GET_POSTS',
  payload
})

//post
export const getPost = (payload) => ({
  type: 'GET_POST',
  payload
})