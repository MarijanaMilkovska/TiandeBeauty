import React, {useState} from "react";
import CardsCont from "./CardsCont";
import Filters from "./Filters";
import products from "../library";

const Catalog = () => {
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products)
  const handleFilter = (query) => {
    const filteredProducts = allProducts.filter(el => el.category.toLowerCase().trim() === query.toLowerCase().trim());
    setFilteredProducts(filteredProducts);
  }
  const handleAll = () => {
    setFilteredProducts(allProducts)
  }
  return (
    <div className="Catalog">
      <Filters handleFilter={handleFilter} handleAll={handleAll}/>
        <CardsCont allProducts={filteredProducts}/>
    </div>
  );
};

export default Catalog;
