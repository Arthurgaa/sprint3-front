import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação entre páginas

function Nav() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const navigate = useNavigate(); // Função de navegação do react-router-dom

  // Função para redirecionar para a página principal e rolar até a sessão
  const handleNavigation = (section) => {
    navigate(`/#${section}`); // Redireciona para a página principal com o hash da sessão
  };

  const handleEntrarClick = () => {
    navigate('/pergunta'); // Redireciona para a página de perguntas
  };

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#24252a',
      padding: '10px 20px',
      fontFamily: '"Gruppo", sans-serif',
    },
    logo: {
      height: '80px',
      cursor: 'pointer', // Cursor pointer na logo
    },
    navbarLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '30px',
    },
    link: {
      textDecoration: 'none',
      color: '#ffffff',
      fontSize: '18px',
      letterSpacing: '2px',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    loginButton: {
      backgroundColor: isButtonHovered ? '#b81d1a' : '#ffffff',
      color: isButtonHovered ? '#ffffff' : '#111111',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '20px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      fontFamily: '"Gruppo", sans-serif',
    },
    // Responsividade para Mobile
    mobile: {
      navbar: {
        flexDirection: 'column',
        padding: '10px',
      },
      navbarLinks: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      },
      logo: {
        height: '60px',
      },
      loginButton: {
        width: '100%',
        marginTop: '10px',
      },
    },
    // Responsividade para Tablet
    tablet: {
      navbarLinks: {
        gap: '20px',
      },
      logo: {
        height: '70px',
      },
    },
    // Responsividade para Desktop
    desktop: {
      navbarLinks: {
        gap: '30px',
      },
      logo: {
        height: '80px',
      },
    },
  };

  // Definir largura da tela
  const screenWidth = window.innerWidth;

  // Aplicar estilos responsivos
  let responsiveStyles = styles.desktop;
  if (screenWidth <= 600) {
    responsiveStyles = styles.mobile;
  } else if (screenWidth <= 900) {
    responsiveStyles = styles.tablet;
  }

  return (
    <nav style={{ ...styles.navbar, ...responsiveStyles.navbar }}>
      <div className="navbar-logo">
        <img
          src="/logo-img.png"
          alt="Logo"
          style={{ ...styles.logo, ...responsiveStyles.logo }}
          onClick={() => handleNavigation('inicio')} // Navega para a seção "Início"
        />
      </div>
      <ul style={{ ...styles.navbarLinks, ...responsiveStyles.navbarLinks }}>
        <li>
          <span
            style={{
              ...styles.link,
              color: hoverIndex === 0 ? '#b81d1a' : '#ffffff',
            }}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => handleNavigation('inicio')} // Redireciona e rola para a seção "Início"
          >
            Início
          </span>
        </li>
        <li>
          <span
            style={{
              ...styles.link,
              color: hoverIndex === 1 ? '#b81d1a' : '#ffffff',
            }}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => handleNavigation('pilotos')} // Redireciona e rola para a seção "Pilotos"
          >
            Pilotos
          </span>
        </li>
        <li>
          <span
            style={{
              ...styles.link,
              color: hoverIndex === 2 ? '#b81d1a' : '#ffffff',
            }}
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => handleNavigation('sobre')} // Redireciona e rola para a seção "Sobre"
          >
            Sobre
          </span>
        </li>
      </ul>
      <button
        style={{ ...styles.loginButton, ...responsiveStyles.loginButton }}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        onClick={handleEntrarClick} // Redireciona para a página Pergunta
      >
        Entrar
      </button>
    </nav>
  );
}

export default Nav;
