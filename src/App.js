import logo from './logo.svg';
import './App.css';

function FilterableProductTable()
{
  return (
    <div className='filterableproducttable'>
      <SearchBar />
      <ProductTable />
    </div>
  );
}
function ProductTable()
{
  return (
    <div className='producttable'>
      <h4>ProductTable area</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2">ProductCategoryRow</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function SearchBar()
{
  return (
    <div className='searchBar'>
      <h4>SearchBar area</h4>
      <form>
        <input type="text" name="" placeholder='Search ....' />
        <label>
          <input type="checkbox" /> Only show products in stock
        </label>
      </form>
    </div>
  );
}
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
function App()
{
  return (
    <div className="App">
      <h4>Welcome to mockup app</h4>
      <FilterableProductTable />


    </div>
  );
}

export default App;
