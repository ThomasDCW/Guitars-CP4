import Footer from "@components/Footer";
import GalleryPage from "@pages/GalleryPage";
import Header from "@components/Header";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <GlobalStyle>
      <Header />
      <GalleryPage />
      <Footer />
    </GlobalStyle>
  );
}

export default App;
