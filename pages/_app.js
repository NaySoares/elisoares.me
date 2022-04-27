import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import { ModalContextProvider } from "../contexts/ModalContext.js"

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <ModalContextProvider>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ModalContextProvider>
    </ChakraProvider>
  );
};

export default Website;
