import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import { ModalContextProvider } from "../contexts/ModalContext"

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <ModalContextProvider>
            <Component {...pageProps} key={router.route} />
          </ModalContextProvider>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
