import React,{createContext,useState,useEffect} from 'react';
import { IoMdTabletLandscape } from 'react-icons/io';
//create context
export const CartContext = createContext(

)
const CartProvider = ({children}) => {
  //cart state 
  const [cart,setCart] = useState([]);
  // item amount state 
  const [itemAmount,setItemAmount] = useState(0);

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

// remove from cart 
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear cart 
  const clearCart = () =>{
    setCart([]);
  };

  //increase amount 
  const increaseAmount = (id) =>{
    const cartitem = cart.find((item) => item.id === id);
    addToCart(cartitem,id);
  };

  
//decrease amount 
const decreaseAmount = (id) => {
  const cartitem = cart.find((item) =>{
    return item.id === id;
  });
  if (cartitem) {
    const newCart = cart.map(item => {
      if (item.id === id){
        return {...item,amount:cartitem.amount - 1}
      }else {
        return item;
      }
    });
    setCart(newCart);
  }
    if(cartitem.amount <2){
      removeFromCart(id);
    }
  
}

  return (<CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount}}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
