export default function(state= null, action){
  switch (action.type) {
    case "GET_POST": return action.payload;
      break;
  }
  return state;
}
