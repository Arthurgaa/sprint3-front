import React, { useEffect, useState } from 'react';

function Nav() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Gruppo&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

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
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#b81d1a', // Cor no hover
    },
    loginButton: {
      backgroundColor: '#ffffff',
      color: '#111111',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '20px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      fontFamily: '"Gruppo", sans-serif',
    },
    loginButtonHover: {
      backgroundColor: '#b81d1a', // Cor no hover
      color: '#ffffff', // Mudança de cor no hover
    }
  };

  return (
    <nav style={styles.navbar}>
      <div className="navbar-logo">
        {/* Substituindo com a logo "logo-img.png" */}
        <img src="/logo-img.png" alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.navbarLinks}>
        <li>
          <a
            href="#"
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = styles.linkHover.color}
            onMouseLeave={(e) => e.target.style.color = styles.link.color}
          >
            Início
          </a>
        </li>
        <li>
          <a
            href="#"
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = styles.linkHover.color}
            onMouseLeave={(e) => e.target.style.color = styles.link.color}
          >
            Pilotos
          </a>
        </li>
        <li>
          <a
            href="#"
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = styles.linkHover.color}
            onMouseLeave={(e) => e.target.style.color = styles.link.color}
          >
            Sobre
          </a>
        </li>
      </ul>
      <button
        style={isHovered ? { ...styles.loginButton, ...styles.loginButtonHover } : styles.loginButton}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Entrar
      </button>
    </nav>
  );
}

export default Nav;
