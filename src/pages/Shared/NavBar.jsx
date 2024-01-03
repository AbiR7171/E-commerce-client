import React from "react";
import { Icon } from "@iconify/react";

const NavBar = () => {
  return (
    <div
      className="
        mainFont 
        font-semibold
        "
    >
      {/* For Large device  */}
      <div
        className="
             flex 
             items-center 
             w-full
             justify-between
             px-32
             gap-10
             mt-10
             "
      >
        <div>
          {" "}
          {/* logo */}
          <p className="text-4xl">E-Commerce</p>
        </div>

        <div
          className="
                     flex 
                     flex-1 
                     item
                     gap-10
                     items-center
                     "
        >
          <div
            className="relative
                    flex-1
                    "
          >
            <input
              type="text"
              placeholder="Search Your Favorite Product"
              className="
                    input 
                    border-2
                 border-gray-200
                   w-full
                    h-16
                    rounded
                
                  "
            />

            <button>
              <Icon
                icon="iconamoon:search-duotone"
                className="
                  absolute 
                  top-5
                  end-2
                  text-2xl
                  "
              />
            </button>
          </div>

          <p>
            <Icon
              icon="iconamoon:profile-fill"
              className="
                 text-3xl
                 "
            />
          </p>

          <p>
            <Icon
              icon="mdi:heart"
              className="
                 text-3xl
                 "
            />
          </p>

          <p>
            <Icon
              icon="subway:bag"
              className="
                 text-3xl
                 "
            />
          </p>

          <p>
            <Icon
              icon="eva:menu-2-outline"
              className="
                 text-3xl
                 "
            />
          </p>
        </div>
      </div>

      {/* For small device */}
    </div>
  );
};

export default NavBar;
