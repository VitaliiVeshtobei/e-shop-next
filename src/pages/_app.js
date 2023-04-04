import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "../../public/theme/theme";

import Wrapper from "@/components/Wrapper/Wrapper";
import { store } from "@/redux/store";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Provider>
    </ThemeProvider>
  );
}
