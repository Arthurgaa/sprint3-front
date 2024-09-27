import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/global.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.replace('#', ''));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const isMainPage = location.pathname === '/';

  return (
    <>
      {isMainPage && <Nav />} {/* Exibe a Nav apenas na página principal */}
      <Outlet /> {/* Exibe o conteúdo da rota atual */}
      {isMainPage && <Footer />} {/* Exibe o Footer apenas na página principal */}
    </>
  );
}

export default App;
