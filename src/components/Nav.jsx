import React from 'react';
import { Link } from 'react-scroll'; // Importa o componente Link de react-scroll

function Nav() {
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
    },
    loginButton: {
      backgroundColor: '#ffffff',
      color: '#111111',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '20px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      fontFamily: '"Gruppo", sans-serif',
    }
  };

  return (
    <nav style={styles.navbar}>
      <div className="navbar-logo">
        <img src="/logo-img.png" alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.navbarLinks}>
        {/* Usando o Link do react-scroll para navegação suave */}
        <li>
          <Link
            to="inicio" // Referencia o id da seção
            smooth={true} // Rolar suavemente
            duration={500} // Duração da rolagem (500ms)
            style={styles.link}
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="pilotos" // Referencia o id da seção
            smooth={true}
            duration={500}
            style={styles.link}
          >
            Pilotos
          </Link>
        </li>
        <li>
          <Link
            to="sobre" // Referencia o id da seção
            smooth={true}
            duration={500}
            style={styles.link}
          >
            Sobre
          </Link>
        </li>
      </ul>
      <button style={styles.loginButton}>
        Entrar
      </button>
    </nav>
  );
}

export default Nav;
