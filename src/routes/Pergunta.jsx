import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pergunta() {
  const navigate = useNavigate();

  const handleSimClick = () => {
    navigate('/login');
  };

  const handleNaoClick = () => {
    navigate('/cadastro');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/carro5.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      margin: '0',
      padding: '0',
    },
    box: {
      display: 'grid',
      gridTemplateRows: 'auto auto auto',
      gap: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: '40px 60px',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
      width: '300px',
      justifyItems: 'center',
      transition: 'width 0.3s ease',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#b81d1a',
      fontFamily: '"Gruppo", sans-serif',
    },
    button: {
      width: '100%',
      padding: '10px',
      fontSize: '18px',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      fontFamily: '"Gruppo", sans-serif',
      transition: 'all 0.3s ease',
    },
    buttonSim: {
      backgroundColor: '#ffffff',
      color: '#b81d1a',
      border: '2px solid #b81d1a',
    },
    buttonNao: {
      backgroundColor: '#ffffff',
      color: '#b81d1a',
      border: '2px solid #b81d1a',
    },
    buttonHome: {
      backgroundColor: '#111111',
      color: '#ffffff',
      border: 'none',
    },
    // Estilos responsivos para mobile e tablet
    mobile: {
      box: {
        width: '250px', // Ajuste de largura para telas menores
        padding: '30px 40px', // Reduzindo o padding
      },
      title: {
        fontSize: '20px',
      },
      button: {
        fontSize: '16px',
        padding: '8px',
      },
    },
    tablet: {
      box: {
        width: '280px',
      },
      title: {
        fontSize: '22px',
      },
      button: {
        fontSize: '17px',
      },
    },
  };

  // Definindo largura da tela
  const screenWidth = window.innerWidth;

  // Aplicar estilos responsivos
  let responsiveStyles = {};
  if (screenWidth <= 600) {
    responsiveStyles = styles.mobile;
  } else if (screenWidth <= 900) {
    responsiveStyles = styles.tablet;
  }

  return (
    <div style={styles.container}>
      <div style={{ ...styles.box, ...responsiveStyles.box }}>
        <h1 style={{ ...styles.title, ...responsiveStyles.title }}>
          Já possui uma conta?
        </h1>
        <button
          style={{ ...styles.button, ...styles.buttonSim, ...responsiveStyles.button }}
          onClick={handleSimClick}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#b81d1a';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#b81d1a';
          }}
        >
          Sim
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonNao, ...responsiveStyles.button }}
          onClick={handleNaoClick}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#b81d1a';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#b81d1a';
          }}
        >
          Não
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonHome, ...responsiveStyles.button }}
          onClick={handleHomeClick}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#333')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#111111')}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default Pergunta;
