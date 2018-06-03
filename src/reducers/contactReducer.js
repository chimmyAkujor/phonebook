export default function reducer(state={
    contacts:[
        {firstName: "John",lastName: "Deere",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "1Jeff",lastName:"Gibberman",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "Nia",lastName:"Long",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "Michelle",lastName:"Bigsby",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "Adrian",lastName:"Young",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "2Brian",lastName:"McManaman",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "joyce",lastName:"Jefferson",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "Zack",lastName:"Brewer",address:"1500 nowhere avenue, long island, CA"},
        ].sort(function(a,b){
        return (a.firstName.toUpperCase() > b.firstName.toUpperCase()) ? 1 : ((b.firstName.toUpperCase() > a.firstName.toUpperCase()) ? -1 : 0);
    }),
    activeId:-1
},action){
    switch(action.type){
        case "SET_ACTIVE_ID":{ 
            console.log('clicked!!!')
            state = {...state, activeId:action.payload}
            break;
        }
        default:
            return state;
    }
}
