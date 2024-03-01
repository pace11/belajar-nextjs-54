import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const userData = {
    name: "Pace",
    age: "27",
  };

  return <Component {...pageProps} {...userData} />;
}
