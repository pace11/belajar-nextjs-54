import { useRouter } from "next/router";

export default function IdProduct() {
  const router = useRouter();

  console.log("router => ", router);

  return <div>Detail dari toko {router?.query?.id_toko}</div>;
}
