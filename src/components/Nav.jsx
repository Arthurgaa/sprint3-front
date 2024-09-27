import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importa o componente Link de react-scroll

function Nav() {
  // Estado para o hover
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false); // Estado para hover do botão

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
            to="inicio" // Referencia o id da seção
            smooth={true} // Rolar suavemente
            duration={500} // Duração da rolagem (500ms)
            style={{
              ...styles.link,
              color: hoverIndex === 0 ? '#b81d1a' : '#ffffff', // Hover para o primeiro item
            }}
            onMouseEnter={() => setHoverIndex(0)} // Detecta hover
            onMouseLeave={() => setHoverIndex(null)} // Remove hover
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="pilotos" // Referencia o id da seção
            smooth={true}
            duration={500}
            style={{
              ...styles.link,
              color: hoverIndex === 1 ? '#b81d1a' : '#ffffff', // Hover para o segundo item
            }}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Pilotos
          </Link>
        </li>
        <li>
          <Link
            to="sobre" // Referencia o id da seção
            smooth={true}
            duration={500}
            style={{
              ...styles.link,
              color: hoverIndex === 2 ? '#b81d1a' : '#ffffff', // Hover para o terceiro item
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
        onMouseEnter={() => setIsButtonHovered(true)} // Detecta hover no botão
        onMouseLeave={() => setIsButtonHovered(false)} // Remove hover do botão
      >
        Entrar
      </button>
    </nav>
  );
}

export default Nav;
