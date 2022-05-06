import React from 'react';

let Header = function () {
  return (
    <div className="flex my-10 px-8 justify-between">
      <button>
        <img src="../../assets/org.png" alt="img" />
      </button>
      <div className="flex">
        <button className="mr-10">Home</button>
        <button className="mr-10">About Us</button>
        <button className="mr-10">Shop</button>
        <button className="mr-10">Pages</button>
        <button className="mr-10">Contact Us</button>
      </div>
      <button className="rounded-full bg-[#D4D4D4]">
        <img src="../../assets/basket.png" alt="img" />
        Cart
      </button>
    </div>
  );
};

export default Header;
