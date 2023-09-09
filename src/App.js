import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
        </Routes>
        <div>
          <BackToTop />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
