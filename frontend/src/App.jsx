import { Route, Routes } from "react-router-dom";
import Footer from "@components/Footer";
import GalleryPage from "@pages/GalleryPage";
import Header from "@components/Header";
import HomePage from "@pages/HomePage";
import DetailPage from "@pages/DetailPage";
import BrandPage from "@pages/BrandPage";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <GlobalStyle>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:selectedBrand" element={<BrandPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:selectedId" element={<DetailPage />} />
      </Routes>
      <Footer />
    </GlobalStyle>
  );
}

export default App;
