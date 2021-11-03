import { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";

// Fake data
import { applePhones } from "../data";

import getSearchResult from "./getSearchResult";

// Style
import "./Styles/Products.css";

function Product({ details }) {
  return (
    <>
      <div className="product">
        <span className="product__counts">{details?.data?.length}</span>
        <img
          className="product__image"
          src={details?.imgUrl}
          alt="product_image"
        />
        <h3 className="product__name">{details?.name}</h3>
      </div>
    </>
  );
}

function Products() {
  const [phones, setPhones] = useState(applePhones);

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "ORIGINAL_DATA",
      value: phones,
    });
  }, []);
  useEffect(() => {
    getSearchResult(state, state.mainData, setPhones);
  }, [state.searchTerms]);

  return (
    <div className="products__container">
      {phones.length > 0 ? (
        phones?.map((item) => {
          return <Product details={item} key={item._id} />;
        })
      ) : (
        <h1 className="product__error">NO RESULTS FOUND</h1>
      )}
    </div>
  );
}

export default Products;
