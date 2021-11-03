const getSearchResult = (state, phones, setPhones) => {
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

  const getByName = (phones) => {
    if (nameTag.length > 0) {
      return phones?.filter((item) =>
        item.name.toLowerCase().includes(nameTag)
      );
    }
  };
  const getByGrade = (phones) => {
    let resultContainer = [];
    phones?.forEach((item) => {
      let originalData = item.data;
      item.data = [];
      originalData?.forEach((price) => {
        if (price.price.grade === gradeTag.toUpperCase()) {
          item.data.push(price);
        }
      });
      resultContainer.push(item);
    });
    //fitler out phones with zero data
    let finalResult = resultContainer.filter((item) => item.data.length > 0);
    return finalResult;
  };
  const getByStorageSize = (phones) => {
    let resultContainer = [];
    phones.forEach((item) => {
      let originalData = item.data;
      item.data = [];
      originalData?.forEach((price) => {
        if (price.price.storageSize === storageSizeTag.toUpperCase()) {
          item.data.push(price);
        }
      });
      resultContainer.push(item);
    });
    //filter out phones with zero data
    let finalResult = resultContainer.filter((item) => item.data.length !== 0);
    return finalResult;
  };

  // Check for all three search items
  // (name, grade and storageSize)
  if (nameTag && gradeTag && storageSizeTag) {
    let phoneResult = getByName(phones);
    phoneResult = getByGrade(phoneResult);
    phoneResult = getByStorageSize(phoneResult);
    setPhones(phoneResult);
  }
  //(name and grade only)
  else if (nameTag && gradeTag && !storageSizeTag) {
    let phoneResult = getByName(phones);
    phoneResult = getByGrade(phoneResult);
    setPhones(phoneResult);
  }
  //(name and storageSize only)
  else if (nameTag && storageSizeTag && !gradeTag) {
    let phoneResult = getByName(phones);
    phoneResult = getByStorageSize(phoneResult);
    setPhones(phoneResult);
  }
  //(grade and storageSize only)
  else if (gradeTag && storageSizeTag && !nameTag) {
    console.log("checking for grade and storage only");
    let phoneResult = getByGrade(phones);
    phoneResult = getByStorageSize(phoneResult);
    console.log(phoneResult);
    setPhones(phoneResult);
  }
  //(name only)
  else if (nameTag && !gradeTag && !storageSizeTag) {
    let phoneResult = getByName(phones);
    setPhones(phoneResult);
  }
  //(grade only)
  else if (gradeTag && !nameTag && !storageSizeTag) {
    let phoneResult = getByGrade(phones);
    setPhones(phoneResult);
  }
  //(storageSize only)
  else if (storageSizeTag && !nameTag && !gradeTag) {
    let phoneResult = getByStorageSize(phones);
    setPhones(phoneResult);
  }
};

export default getSearchResult;
