import { useState } from "react";

// Style
import "./Styles/PriceFilter.css";

function PriceFilter() {
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

  return (
    <div className="pricefilter">
      <div className="pricefilter__title">Price Filter</div>
      <div className="pricefilter__minmax">
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
      </div>
    </div>
  );
}

export default PriceFilter;
