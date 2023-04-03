import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../../public/theme/theme";

import Wrapper from "@/components/Wrapper/Wrapper";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
}
