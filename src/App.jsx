import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
