import dynamic from "next/dynamic";
// import Card from "@/components/Card";
import { useState } from "react";

const CardComponent = dynamic(() => import("@/components/Card"));

export default function DynamicImport() {
  const [isShow, setShow] = useState(false);
  return (
    <div>
      <p>Muhammad Iriansyah</p>
      <h1>PUTRA PRATAMA</h1>
      <button onClick={() => setShow(!isShow)}>Click Me</button>
      {isShow && <CardComponent />}
    </div>
  );
}
