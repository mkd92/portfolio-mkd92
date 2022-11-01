import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import WelcomePage from "./pages/welcome/WelcomePage";
import Footer from "./components/footer/Footer";
import PortfolioPage from "./pages/portfolio/PortfolioPage";

import "./App.css";

function App() {
  return (
    <div className="App ">
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<PortfolioPage />} />
          <Route path="/about" element={<PortfolioPage />} />
          <Route path="/skills" element={<PortfolioPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
