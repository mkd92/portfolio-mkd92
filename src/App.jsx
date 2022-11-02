import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import WelcomePage from "./pages/welcome/WelcomePage";
import Footer from "./components/footer/Footer";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import SkillsPage from "./pages/skillsPage/SkillsPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";

import "./App.css";

function App() {
  return (
    <div className="App ">
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
