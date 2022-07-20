import Footer from "@components/Footer";
import Gallery from "@components/Gallery";
import Logo from "@components/Logo";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <GlobalStyle>
      <Logo />
      <Gallery />
      <Footer />
    </GlobalStyle>
  );
}

export default App;
