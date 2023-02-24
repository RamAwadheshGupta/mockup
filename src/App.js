
import { useState } from 'react';
import './App.css';

function FilterableProductTable({ products })
{
  const [filterText, setfilterText] = useState('');
  const [inStockOnly, setinStockOnly] = useState(false);
  return (
    <div className='filterableproducttable'>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setfilterText}
        onInStockOnlyChange={setinStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
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
  const name = product.stocked ? product.name :
    <span style={{ color: "red" }}>
      {product.name}
    </span>
  return (
    <tr>
      <td className='product_td'>
        {name}
      </td>
      <td className='product_tds'>
        {product.price}
      </td>
    </tr>
  );
}
function ProductTable({ products, filterText, inStockOnly })
{
  const row = [];
  let lastCategory = null;
  products.forEach((product) =>
  {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    )
    {
      return;
    }
    if (inStockOnly && !product.stocked)
    {
      return;
    }
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
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange })
{
  return (
    <div className='searchBar'>
      <h4>SearchBar area</h4>
      <form>
        <input
          type="text"
          value={filterText}
          placeholder='Search ....'
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label>
          <input type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />
          {''}
          Only show products in stock
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
