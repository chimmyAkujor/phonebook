export default function reducer(state={
    user:{
        first:"Jessica",
        last:"Webb",
        phone:"452-745-3125"
    },
    fetching:false 
},action){
    switch(action.type){
        case "SET_USER":{
            state = {...state,user:action.payload}
            break;
        }
    }
    return state;
}