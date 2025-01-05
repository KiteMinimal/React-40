import React from "react";
import Index from "./components/Index";
import Star from "./components/Star Rating/Star";


const App = () => {
  return (
    <div>
      {/* <Index /> */}
      <Star noOfStars={10} />
    </div>
  );
};

export default App;
