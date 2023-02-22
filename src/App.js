
import './App.css';

function FilterableProductTable({ products })
{
  return (
    <div className='filterableproducttable'>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
function ProductCategoryRow({ category })
{
  return (
    <tr>
      <th colSpan='2' style={{ border: "5px solid #32cbaf" }}>
        {category}
      </th>
    </tr>

  );
}
function ProductRow({ product })
{
  return (
    <tr style={{ border: "5px solid #d58f12" }}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
function ProductTable({ products })
{
  const row = [];
  let lastCategory = null;
  products.forEach(product =>
  {
    if (product.category !== lastCategory)
    {
      row.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    row.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;

  });
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
          {/*  <ProductCategoryRow /> */}
          {row}
          {/* <ProductRow /> */}
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
      <FilterableProductTable products={PRODUCTS} />


    </div>
  );
}

export default App;
