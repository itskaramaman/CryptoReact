import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";
import { CryptoProvider } from "./components/CryptoContext";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CryptoProvider>
        <Router>
        <Navbar />
        <div className="container my-5 border p-5">
          <h1>Cryptocurrencies</h1>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
        <Footer />
        </Router>
      </CryptoProvider>
    </>
   
  )
}

export default App;
