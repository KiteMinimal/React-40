import React from "react";
import { useState } from "react";
import data from "./Data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [isMultipleSelection, setIsMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    let copyMultiple = [...multiple]
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

    console.log(findIndexOfCurrentId);
    if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
    
  };

  console.log(selected,multiple)

  return (
    <div className="wrapper w-[100vw]  flex items-center justify-center flex-col overflow-auto m-5">
      <button
        onClick={() => setIsMultipleSelection(!isMultipleSelection)}
        className="bg-blue-600 text-white border  px-4 py-1 mb-5 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        Enable Multiple Selection
      </button>
      <div className="accordion w-[500px]">
        {data && data.length > 0 ? (
          data.map((dataItem, idx) => (
            <div key={idx} className="Item bg-[#614101] mb-[10px] py-10 px-20 ">
              <div
                onClick={
                  isMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title cursor-pointer font-semibold text-white flex items-center justify-between"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {isMultipleSelection ? multiple.indexOf(dataItem.id) !== -1 && (<div className="content">{dataItem.answer}</div>) : selected === dataItem.id && (<div className="content">{dataItem.answer}</div>)}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
