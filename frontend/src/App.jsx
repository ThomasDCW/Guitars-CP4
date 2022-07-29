import { Route, Routes } from "react-router-dom";
import Footer from "@components/Footer";
import GalleryPage from "@pages/GalleryPage";
import Header from "@components/Header";
import HomePage from "@pages/HomePage";
import Carousel from "@pages/Carousel";
import DetailPage from "@pages/DetailPage";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <GlobalStyle>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:selectedId" element={<DetailPage />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
      <Footer />
    </GlobalStyle>
  );
}

export default App;
