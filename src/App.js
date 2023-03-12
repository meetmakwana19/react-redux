import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeNum);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <p
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNum())}
            >
              <span>-</span>
            </p>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              // value="0"
              value={myState}
              readOnly
            />
            <p
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNum())}
            >
              <span>+</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
