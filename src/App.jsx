import React, { useEffect, useState } from 'react';
import { Home, Gallery } from './pages/index';
import './styles/slides.css'
import './styles/navbar.css'
import Loading from './components/Loading';
import { HashRouter, Routes, Route } from 'react-router-dom';
// import { ReactComponent as Logo } from "./img/logoErick2.svg";

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [loading])
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Home />} />
        <Route path="/Gallery" element={loading ? <Loading /> : <Gallery />} />
      </Routes>

    </HashRouter>

  );
};

export default App;