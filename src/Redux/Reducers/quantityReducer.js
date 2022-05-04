const initializeValue=0;

export const quantityReducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        default:
            return initializeValue
    }
}