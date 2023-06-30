import React,{useContext} from 'react';
//import useparams
import { useParams } from 'react-router-dom';
//import cart context 
import { CartContext } from '../contexts/CartContext';
//import product context
import {ProductContext} from '../contexts/ProductContext'
const ProductDetails = () => {
  //get the product id from the url 
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  //get the single product based on the id 
  const product = products.find((item) =>{
    return item.id === parseInt(id);
  });
  if (!product){
    return (<section className='h-screen flex justify-center items-center'>Loading...</section>
  );
}
//destructure product 
const {title,price,description,image} =product;
return <section className='pt-32 pb-12 lg:pg-32 h-screem flex items-center'>
<div className='container mx-auto'>
  {/*images & text wrapper */}
  <div className='flex flex-col lg:flex-row items-centerz'>
  {/*image */}
  <div>image</div>
  {/*text */}
  <div>text</div>
  </div>
</div>
</section>
};

export default ProductDetails;
