import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ConvertCSVtoJSON from "./pages/csv-to-json";
import JsonFormatter from "./pages/jsonFormatter";
import Base64EncodeDecode from './pages/base64EncodeDecode';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/utilities" element={<Home />} />
      <Route path="/utilities/csv-to-json" element={<ConvertCSVtoJSON />} />
      <Route path="/utilities/json-formatter" element={<JsonFormatter />} />
      <Route path='/utilities/base-64-encoder' element={<Base64EncodeDecode/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
