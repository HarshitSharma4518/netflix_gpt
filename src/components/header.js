import React from 'react'

const Header = () => {
  return (
    // <div className='absolute'>
      /* <img
      src='https://cdn-icons-png.flaticon.com/512/5977/5977590.png'
      alt='logo'
      /> */
    // </div>
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img
        className="w-40"
        src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
        alt="logo"
        />
    </div>
  );
};

export default Header;
