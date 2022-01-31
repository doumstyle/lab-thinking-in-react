import React, { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const ProductsPage = () => {

    const [products, setProducts] = useState(jsonData);
    const [searchString, setSearchString] = useState("");

    let searchedItems = null;
    if(searchString !== "") {
      searchedItems = products.filter(product => {
        return product.name.toLowerCase().includes(searchString.toLowerCase());
      });
    } else {
      searchedItems = products;
    }

  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar searchString={searchString} searchCallback={setSearchString}/>
        <ProductTable products={searchedItems}/>
    </div>
  );
};

export default ProductsPage;
