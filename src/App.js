import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Landing from "./pages/Landing";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "./pages/Error";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <BrowserRouter>
        <div>
         <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Homepage /> : <Landing />} exact />
          <Route path="*" element={<Error />} />
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
