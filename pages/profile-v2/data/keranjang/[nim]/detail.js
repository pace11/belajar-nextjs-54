import Layout from "@/layout";
import { useRouter } from "next/router";

export default function Keranjang() {
  const router = useRouter();
  const { query } = router;
  return (
    <Layout metaDescription="Isi dari description">
      <h1>Ini adalah profile detail dari = {query.nim}</h1>
    </Layout>
  );
}
