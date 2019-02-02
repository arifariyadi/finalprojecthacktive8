// var apiPosts= { searchTerm:'', searchAttribute:'', ignoreCase: true, Posts: [] };
var apiPosts= [];
export default function(state=apiPosts, action){
  switch (action.type) {
    case "GET_POSTS": { apiPosts = action.payload;
      console.log(action, 'action');
      return apiPosts;
    }
      break;
  }
  return apiPosts;
}
