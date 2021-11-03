import { useState } from "react";
import { useStateValue } from "../StateProvider";
// Style
import "./Styles/PriceFilter.css";

function PriceFilter() {
  const [state, dispatch] = useStateValue();

  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const fireFilter = (e) => {
    e.preventDefault();
    dispatch({
      type: "MIN_MAX VALUES",
      value: {
        minValue,
        maxValue,
      },
    });
  };

  return (
    <div className="pricefilter">
      <div className="pricefilter__title">Price Filter</div>
      <form className="pricefilter__minmax">
        <input
          type="number"
          placeholder="Min"
          min="0"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max"
          max="2500"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
        />
        <button type="submit" className="pricefilter__btn" onClick={fireFilter}>
          Filter
        </button>
      </form>
    </div>
  );
}

export default PriceFilter;
