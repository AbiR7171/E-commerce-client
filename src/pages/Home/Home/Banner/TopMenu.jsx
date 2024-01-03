import React from "react";

const TopMenu = () => {
  return (
    <div
      className="
         border-2 
         border-gray-200 
         p-6 
         mt-4 
         mainFont 
         font-semibold
        "
    >
      <div
        className="
             uppercase
             flex 
             px-32
             justify-between
             
             "
      >
        <div
          className="
                    flex
                    items-center
                    gap-10
                    "
        >
          <p>Home</p>
          <p>Shop</p>
          <p>Blog</p>
          <p>Pages</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div
          className="
                    flex 
                    justify-evenly
                    gap-10
                    "
        >
          <p>Special offer</p>
          <p>Purchase theme</p>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
