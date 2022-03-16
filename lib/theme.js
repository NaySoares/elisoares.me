import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#B4CBD9", "#0E141B")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderLineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#2B6CB0", "#ff63c3")(props),
      textUnderLineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'Heebo'",
};

const colors = {
  glassTeal: "#88ccca",
  ocean:"#5490FF",
  oceanPacific: "#2B6CB0",
  sea: "#2A75FF"
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
