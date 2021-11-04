import { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";

// Main Data for the application(manual fetch)
import { applePhones } from "../data";

//function to carry out search request
import getSearchResult from "./getSearchResult";

//function to carry out filter request
import getFilterResult from "./getFilterResult";

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
          loading="lazy"
        />
        <h3 className="product__name">{details?.name}</h3>
      </div>
    </>
  );
}

function Products() {
  //put the application data into a state
  const [phones, setPhones] = useState(applePhones);

  //Get access to the state layer
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    //Save the main data into the state layer to make it accessible by other components or functions
    dispatch({
      type: "ORIGINAL_DATA",
      value: phones,
    });
  }, []);

  useEffect(() => {
    //This function is called when the minValue and maxValue values get changed in the state layer.
    //the main-data is sent to the function everytime runs so as to make the filter query run through the original data
    getFilterResult(state, state.mainData, setPhones);
  }, [state.minPrice, state.maxPrice]);

  useEffect(() => {
    //This function is called when the search button gets clicked.
    //the main-data is sent to the function everytime runs so as to make the search query run through the original data
    getSearchResult(state, state.mainData, setPhones);
  }, [state.searchTerms]);
  return (
    <div className="products__container">
      {/* Checks if the phones have an item in it. If its empty, it prints out "no results found" otherwise it displays out the result*/}
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
