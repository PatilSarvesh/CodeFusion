import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ConvertCSVtoJSON from "./pages/csv-to-json";
import JsonFormatter from "./pages/jsonFormatter";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/utilities" element={<Home />} />
      <Route path="/utilities/csv-to-json" element={<ConvertCSVtoJSON />} />
      <Route path="/utilities/json-formatter" element={<JsonFormatter />} />
      </Routes>
    </Router>
  );
}

export default App;
