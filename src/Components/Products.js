import { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";

// Fake data
import { applePhones } from "../data";

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

  // Break the searchTerm into name, grade, and storageSize

  useEffect(() => {
    let nameTag = "",
      gradeTag = "",
      storageSizeTag = "";
    if (state.searchTerms) {
      state.searchTerms.forEach((term) => {
        term = term.trim();
        if (term.includes("iphone")) {
          nameTag = term;
        } else if (term.includes("gb")) {
          storageSizeTag = term;
        } else if (term.length === 2) {
          gradeTag = term;
        }
      });
    }
    //search for iphone term
    let newPhones = phones;
    //Check for all three search items
    if (nameTag && gradeTag && storageSizeTag) {
      //search for nametag
      newPhones = phones.filter((item) =>
        item.name.toLowerCase().includes(nameTag)
      );

      newPhones.forEach((item) => {
        let originalData = item.data;
        item.data = [];
        originalData.forEach((price) => {
          if (price.price.grade === gradeTag.toUpperCase()) {
            item.data.push(price);
          }
        });
      });

      newPhones.forEach((item) => {
        let originalData = item.data;
        item.data = [];
        originalData.forEach((price) => {
          if (price.price.storageSize === storageSizeTag.toUpperCase()) {
            item.data.push(price);
          }
        });
      });
      // dispatch({
      //   type: "SEARCH_RESULT",
      //   value: newPhones,
      // });
      setPhones(newPhones);
      // console.log(newPhones);
      // console.log(state.searchTerms);
    }
  }, [state.searchTerms, phones, dispatch]);
  // useEffect(() => {
  //   if (state.searchResult.length > 0) {
  //     setPhones(state.searchResult);
  //   }
  //   console.log(state);
  // }, [state.searchResult]);

  return (
    <div className="products__container">
      {phones.map((item) => {
        return <Product details={item} key={item._id} />;
      })}
    </div>
  );
}

export default Products;
