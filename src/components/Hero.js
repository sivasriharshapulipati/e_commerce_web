import React from 'react';
//import images 
import WomanImg from '../img/woman_hero.png';
import { Link } from 'react-router-dom'; 
const Hero = () => {
  return <section className=' h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='conatiner mx-auto flex justify-around h-full'>
      {/*text  */}
    <div className='flex flex-col justify-center'>
      {/*pretitle */}
      <div className='font-semibold flex item-center uppercase'>
        <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
      </div>
      <h1 className='text-[70px] leading-1.1 font-light'> AUTUMN SALE STYLISH<br/>
      <span className='font-semibold'>WOMANS</span>
      </h1>
      <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
    </div>
    {/*image  */}
    <div className='hidden lg:flex h-[500px] justify-center'>
      <img src={WomanImg} alt='woman'/>
    </div>
    </div>
  </section>
};

export default Hero;
