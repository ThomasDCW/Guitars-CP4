import Footer from "@components/Footer";
import GalleryPage from "@pages/GalleryPage";
import Logo from "@components/Logo";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <GlobalStyle>
      <Logo />
      <GalleryPage />
      <Footer />
    </GlobalStyle>
  );
}

export default App;
