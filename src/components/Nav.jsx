import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importa o componente Link de react-scroll
import { useNavigate } from 'react-router-dom'; // Para navegação entre páginas

function Nav() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const navigate = useNavigate(); // Função de navegação do react-router-dom

  const handleEntrarClick = () => {
    navigate('/pergunta'); // Redireciona para a página da pergunta
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
      backgroundColor: isButtonHovered ? '#b81d1a' : '#ffffff', // Muda cor ao hover
      color: isButtonHovered ? '#ffffff' : '#111111', // Muda cor da fonte
      border: 'none',
      padding: '10px 20px',
      borderRadius: '20px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      fontFamily: '"Gruppo", sans-serif',
    }
  };

  return (
    <nav style={styles.navbar}>
      <div className="navbar-logo">
        <img src="/logo-img.png" alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.navbarLinks}>
        <li>
          <Link
            to="inicio"
            smooth={true}
            duration={500}
            style={{
              ...styles.link,
              color: hoverIndex === 0 ? '#b81d1a' : '#ffffff', 
            }}
            onMouseEnter={() => setHoverIndex(0)} 
            onMouseLeave={() => setHoverIndex(null)} 
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="pilotos"
            smooth={true}
            duration={500}
            style={{
              ...styles.link,
              color: hoverIndex === 1 ? '#b81d1a' : '#ffffff', 
            }}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Pilotos
          </Link>
        </li>
        <li>
          <Link
            to="sobre"
            smooth={true}
            duration={500}
            style={{
              ...styles.link,
              color: hoverIndex === 2 ? '#b81d1a' : '#ffffff', 
            }}
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Sobre
          </Link>
        </li>
      </ul>
      <button
        style={styles.loginButton}
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
