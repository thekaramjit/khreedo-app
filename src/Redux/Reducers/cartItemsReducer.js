const initializeValue=[];
export const cartItemReducer=(state=initializeValue,action)=>{
    switch(action.type){
        case "cartItems":
            return state.concat(action.items)
        default:
            return initializeValue
    }
}