import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  

  return (
    <>
      <div className='w-full fixed top-[10px] z-10'>
        <ul className='grid grid-cols-3 bg-[#D3D3D3] lg:w-[50%] text-center self-center mx-auto py-[30px] rounded-full shadow-xl'>
          <li>
            <Link to='/main' className='text-decoration-none'> Home</Link>
          </li>
          <li>Templates</li>
          <li>
            <button className='text-decoration-none'>Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
