import { useRouter } from "next/router";

export default function IdProduct() {
  const router = useRouter();

  return (
    <div>
      <p>Dari toko {router?.query?.id_toko}</p>
      <p>Detail dari id product {router?.query?.id_product}</p>
    </div>
  );
}
