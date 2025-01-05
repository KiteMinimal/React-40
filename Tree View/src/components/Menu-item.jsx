import React from "react";
import Menulist from "./Menu-list";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setdisplayCurrentChildren] = useState({});

  const handleToggleChildren = (label) => {
    setdisplayCurrentChildren({
      ...displayCurrentChildren,
      [label]: !displayCurrentChildren[label],
    });
  };
  console.log(displayCurrentChildren);
  return (
    <li >
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus style={{ color: "#fff" }} size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <Menulist list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
