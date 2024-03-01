import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Products() {
  const router = useRouter();
  const { query } = router;
  const { id, limit } = query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchingData() {
      const response = await (
        await fetch(`https://dummyjson.com/products/${id}`)
      ).json();
      // console.log("response => ", response);
      setProducts(response);
    }
    fetchingData();
  }, [id]);

  console.log("router => ", router);

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
      <ul style={{ border: "1px solid black" }}>
        <li>id: {products?.id}</li>
        <li>title: {products?.title}</li>
      </ul>
    </div>
  );
}
