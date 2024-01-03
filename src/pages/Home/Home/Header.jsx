import React from 'react';
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <div className='lg:flex 
        items-center 
        justify-evenly 
        mainFont
        text-[16px]
        mt-2
        hidden 
        font-semibold

        '
        > {/*parent div*/}

           <div className='
            flex
            items-center
            gap-5
           '>    {/* first child   */}

                  <p>Shipping</p>
                  <p>FAQ</p>
                  <p>Contact</p>
                  <p>Track Order</p>

             </div>

             <div> {/* second child  */}
                 
                 <p>FREE SHIPPING WORLDWIDE</p>

             </div>

             <div className='
              flex 
              items-center
               gap-6
             '> {/* Third child */}

                   <p><Icon icon="ri:facebook-fill" /></p>
                   <p><Icon icon="teenyicons:twitter-solid" /></p>
                   <p><Icon icon="mdi:instagram" /></p>

                    <div>
                        <select className="w-full max-w-32 outline-0">
                        <option disabled selected>English</option>
                        <option>Bangla</option>
                        <option>Hindi</option>
                        </select>
                    </div>

                  <div>
                      <select className="w-full max-w-24 outline-0">
                      <option disabled selected>$USD</option>
                      <option>$BDT</option>
                      <option>$RUPI</option>
                      </select>
                  </div>

             </div>

        </div>
    );
};

export default Header;