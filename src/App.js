import "./App.css";
import Search from "./Components/Search";
import PriceFilter from "./Components/PriceFilter";
import Products from "./Components/Products";
function App() {
  return (
    <div className="app">
      {/* Search */}
      <Search />
      {/* Price Filter */}
      <PriceFilter />
      {/* Products Listing */}
      <Products />
    </div>
  );
}

export default App;

//https://ezeapi-prod-copy.herokuapp.com/api/v1/products/price?category=Smartphones&brand=Apple&sort=lowestAsk&hoursInterval=24&limit=20&page=1&slugId=

//https://ezeapi-prod-copy.herokuapp.com/api/v1/sell-request/in-stock?sort=new&limit=20&page=1&minPrice=0&maxPrice=2500&storageSizeString=&conditionString=&category=Smartphones&brand=Apple,Samsung,Google,Huawei,LG,Motorola,Oneplus
