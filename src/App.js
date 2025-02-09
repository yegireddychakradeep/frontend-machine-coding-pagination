import { useEffect, useState } from "react";
import "./styles.css";
import Pagination from "./Pagination";
import { ProductCard } from "./ProductCard";
export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    // fetchData();
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        setProducts(response);
      });
  }, []);
  // const fetchData = async () => {
  //   const data = await fetch("https://fakestoreapi.com/products");
  //   const json = await data.json();
  //   setProducts(json);
  // };
  const PAGE_SIZE = 4;
  const TOTAL_PRODUCTS = products.length;
  const TOTAL_PAGES = Math.ceil(TOTAL_PRODUCTS / PAGE_SIZE);
  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const handlePage = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className="App">
      <div className="pagination">
        {[...Array(TOTAL_PAGES).keys()].map((item) => (
          <Pagination page_no={item} handlePage={handlePage} />
          // <span className="page-no" key={item} onClick={() => handlePage(item)}>
          //   {item}
          // </span>
        ))}
      </div>

      {products.length ? (
        <div className="products">
          {products.slice(startIndex, endIndex).map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      ) : (
        <h1>Data loading</h1>
      )}
    </div>
  );
}
