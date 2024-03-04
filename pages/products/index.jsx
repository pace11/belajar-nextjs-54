import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchingData() {
      const response = await (
        await fetch("/api/products?limit=")
      ).json();
      // console.log("response => ", response);
      setProducts(response?.products);
    }
    fetchingData();
  }, []);

  return (
    <div>
      {products?.map((item, idx) => (
        <Link key={idx} href={`/products/${item?.id}`}>
          <ul style={{ border: "1px solid black" }}>
            <li>id: {item?.id}</li>
            <li>title: {item?.title}</li>
          </ul>
        </Link>
      ))}
    </div>
  );
}
