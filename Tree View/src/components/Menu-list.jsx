import React from "react";
import MenuItem from "./Menu-item";

const Menulist = ({ list = [] }) => {
    // console.log(list)
  return (
    <ul className="MenuListContainer">
      {
      list && list.length
        ? list.map((listItem,index) => <MenuItem key={index} item={listItem} /> )
        : null
    }
    </ul>
  );
};

export default Menulist;
