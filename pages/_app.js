import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const userData = {
    name: "Pace",
    age: "27",
  };

  return (
    <ChakraProvider>
      <Component {...pageProps} {...userData} />
    </ChakraProvider>
  );
}
