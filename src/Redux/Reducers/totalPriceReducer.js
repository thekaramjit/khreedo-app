const initializeValue=0;
export const totalPriceReducer=(state,action)=>{
    switch(action.type){
        case "totalPrice":
            return state=action.price*action.quantity;
        default:
            return initializeValue
            
    }
}