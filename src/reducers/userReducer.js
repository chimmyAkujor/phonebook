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
            console.log("set user "+action.payload.first);
            return{
                user:{first:action.payload.first,
                      last:action.payload.last}
            }
            break;
        }
        default:{
            return {...state.user};
        }
    }
    
}