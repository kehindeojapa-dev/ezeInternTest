const getFilterResult = (state, phones, setPhones) => {
  let minPrice = state.minPrice;
  let maxPrice = state.maxPrice;

  //Make a clone copy of the state to avoid mutation
  const newPhones = JSON.parse(JSON.stringify(phones));

  const getFilter = (phones) => {
    let resultContainer = [];
    phones?.forEach((item) => {
      let originalData = item.data;
      item.data = [];
      originalData.forEach((phoneSpec) => {
        if (
          phoneSpec.price.amount >= minPrice &&
          phoneSpec.price.amount <= maxPrice
        ) {
          item.data.push(phoneSpec);
        }
      });
      resultContainer.push(item);
    });
    // console.log(resultContainer);
    // filter out phones with zero data
    let finalResult = resultContainer.filter((item) => item.data.length > 0);
    return finalResult;
  };

  if (minPrice && maxPrice) {
    let phoneResult = getFilter(newPhones);
    setPhones(phoneResult);
  }
};

export default getFilterResult;
