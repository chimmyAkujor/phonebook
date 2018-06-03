export function setActiveId(i){
    console.log("active user clicked::"+i);
    return{
        type: "SET_ACTIVE_ID",
        payload: i
    }
}