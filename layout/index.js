import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <p>Layout component</p>
      {children}
      <Footer />
    </div>
  );
}
