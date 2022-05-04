export const incQuantity = () => {
  return {
    type: "increment",
  };
};

export const decQuantity = () => {
  return {
    type: "decrement",
  };
};

export const getId = (id) => {
  return {
    type: "getId",
    id
  };
};


export const totalPrice = (price,quantity) => {
  return {
    type: "totalPrice",
    price,
    quantity
  };
};


export const cartItems=(id)=>{
  return{
    type:"cartItems",
    items:[id]
  }
}