import React from "react";
import TopMenu from "./Banner/TopMenu";
import SideMenu from "./Banner/SideMenu";

const Banner = () => {
  return (
    <div
      className="
        relative
        px-32
        "
    >
      <div>
        <TopMenu />
      </div>

      <div
        className="
             absolute
             top-0
             "
      >
        <SideMenu />
      </div>
    </div>
  );
};

export default Banner;
