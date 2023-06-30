import React, { useContext } from 'react';
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
//import icons
import {BsBag} from 'react-icons/bs'
//import link 
import { Link } from 'react-router-dom';
//import logo 
import Logo from '../img/logo.svg';

const Header = () => {
  // header state 
  cons
  const {isOpen,setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  return (
  <header className='bg-pink-200'>
    <div className='container mx-auto flex items-center justify-between h-full'>
    {/*logo */}
    <Link to ={'/'} >
      <div>
        <img className='w-[40px]' src={Logo} alt = ''/>
      </div>
    </Link>
    {/*cart */}
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative '>
      <BsBag className='text-2xl'></BsBag>
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
    
      </div>
    </div>

  </header>
  );
};

export default Header;
