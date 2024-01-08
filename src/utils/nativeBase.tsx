import { extendTheme } from "native-base";
import { useFonts, Alice_400Regular } from "@expo-google-fonts/alice";
import { baseFontSize } from "native-base/lib/typescript/theme/tools";

const primary = {
  50: "#efe8fc",
  100: "#cebbf7",
  200: "#ad8df1",
  300: "#8d5fec",
  400: "#6c32e7",
  500: "#5218cd",
  600: "#4013a0",
  700: "#2e0e72",
  800: "#1b0844",
  900: "#090317",
};

const secondary = {};

const tertiary = {};

export const theme = extendTheme({
  fontConfig: {
    Alice: {
      400: {
        normal: "Alice_400Regular",
      },
    },
  },
  colors: {
    primary,
    secondary,
    tertiary,
  },
  config: {},
  components: {
    Card: {
      defaultProps: {
        backgroundColor: "gray.200",
      },
    },
    Heading: {
      defaultProps: {
        color: "black",
        fontFamily: "Alice_400Regular",
      },
    },
    Text: {
      variants: {
        blurb: () => ({
          color: "black",
          fontSize: "sm",
        }),
        contrastBody: () => ({
          color: "white",
          fontSize: "sm",
          textAlign: "center",
        }),
        contrastSubHeading: () => ({
          color: "white",
          fontSize: "md",
          textAlign: "center",
        }),
      },
    },
    Input: {
      baseStyle: {
        keyboardAppearance: "default",
        backgroundColor: "gray.100",
        borderColor: "gray.300",
      },
    },
    Button: {
      baseStyle: {},
      variants: {
        solid: () => ({
          borderRadius: 50,
          paddingBottom: 2,
          paddingTop: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "primary.400",
          _pressed: { backgroundColor: "primary.700" },
        }),
        ghost: () => ({
          padding: 2,
          _pressed: { backgroundColor: "gray.200" },
          _text: { color: "primary.400" },
        }),
        outline: () => ({
          borderRadius: 50,
          paddingBottom: 2,
          paddingTop: 2,
        }),
        big: () => ({
          borderRadius: 50,
          backgroundColor: "primary.400",
          paddingBottom: 4,
          paddingTop: 4,
          margin: 1,
          _pressed: { backgroundColor: "primary.500" },
          _text: { color:"white"},
        })
      },
    },
  },
});

type CustomThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
