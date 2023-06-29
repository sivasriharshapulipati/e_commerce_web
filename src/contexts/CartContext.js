import React,{createContext,useState,useEffect} from 'react';
//create context
export const CartContext = createContext(

)
const CartProvider = ({children}) => {
  //cart state 
  const [cart,setCart] = useState([]);
  //add to cart
  const addToCart = (products,id)=>{
    const newItem = {...products,amount:1};
    //check if the item is already in the cart 
    const CartItem= cart.find((item) =>{
      return item.id ===id;
    });
    // if cart item is aldready in the cart 
    if (CartItem) {
      const newCart = [...cart].map(item=>{
        if (item.id === id) {
          return {...item,amount:CartItem.amount +1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart,newItem]);
    }
  };

  return <CartContext.Provider value={{cart,addToCart}}>{children}</CartContext.Provider>;
};

export default CartProvider;
