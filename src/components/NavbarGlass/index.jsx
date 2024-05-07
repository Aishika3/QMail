import React from 'react';
import './styles.css';
import { FaHome, FaSignOutAlt, FaPowerOff, FaBook,  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const KaraokeComponent = () => {
  return (
    <>
    <div className="w-full fixed top-0 right-auto h-[75px] bg-white z-10">
      <div className="lg:w-[50%] md:w-[75%] sm:w-[90%] mx-auto grid grid-cols-6 gap-2 p-2 justify-center bg-gray-400 rounded-full shadow-lg">
        <div className="outer">
          <div className="inner">
            <Link to="/main">
                <div className="icon text-white font-bold text-center"><FaHome className='mx-auto my-auto text-center justify-center content-center'/></div>
            </Link>
          </div>
        </div>

        <div className="outer">
          <div className="inner">
            <div className="icon text-white font-bold"><FaBook className='mx-auto my-auto text-center justify-center content-center'/></div>
            
          </div>
        </div>

        <div className="outer">
          <div className="inner">
            <div className="icon text-white font-bold">3</div>
            
          </div>
        </div>

        <div className="outer">
          <div className="inner">
            <div className="icon text-white font-bold">4</div>
            
          </div>
        </div>

        <div className="outer">
          <div className="inner">
            <div className="icon text-white font-bold">5</div>
            
          </div>
        </div>

        <div className="outer">
          <div className="inner">
            <div className="icon w-[20px] h-[20px] text-white font-bold py-auto my-auto text-center content-center justify-center"><FaSignOutAlt className='w-[20px] h-[20px] mx-auto my-auto text-center justify-center content-center py-auto'/></div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default KaraokeComponent;