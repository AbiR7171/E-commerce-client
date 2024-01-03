import React from 'react';

const SideMenu = () => {
    return (
        <div className='
        border-2
        border-gray-200
        space-y-4
        mainFont
        font-semibold

        '>
               <div className='
               bg-blue-600 
                p-6
                text-white 
                uppercase 
                rounded

               '>
                   Browse Categories
               </div>

              <div className='
              space-y-4
              ms-4
              '>
                 <p>Electronics</p>
                 <p>Computers</p>
                 <p>Audio & Video</p>
                 <p>Mobiles & Tablets</p>
                 <p>Tv & Audio</p>
                 <p>Car & Motorbike</p>
                 <p>Hmoe & Garden</p>
                 <p>Toys & Kids</p>
                 <p>Sporting Goods</p>
                 <p>Pet Supplies</p>
              </div>
        </div>
    );
};

export default SideMenu;