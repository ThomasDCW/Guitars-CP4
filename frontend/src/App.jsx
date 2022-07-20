import Footer from "@components/Footer";
import GalleryPage from "@pages/GalleryPage";
import Header from "@components/Header";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <GlobalStyle>
      <Header />
      <Routes>
        <Route path="/Gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </GlobalStyle>
  );
}

export default App;
