import React , {useContext} from 'react';
//import product context
import { ProductContext } from '../contexts/ProductContext';
// import components 
import Product from '../components/Product';
import Hero from '../components/Hero';
const Home = () => {
  // get products from product context
  const {products} = useContext(ProductContext);
  //get only mens &womans clothing catigories 
  const filterestProducts =products.filter(items =>{
    return (items.category === "men's clothing" || items.category === "women's clothing"
    );
  })
  return (<div>
    <Hero/>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-col-5 gap-[30px] max-w-sm max-auto md:max-w-none and md:max-0'>
          {filterestProducts.map(products => {
            return (
              <Product products={products} key={products.id}/>
                
            );
          })}
        </div>
      </div>
    </section>
  </div>);
};

export default Home;
