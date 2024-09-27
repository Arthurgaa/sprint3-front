import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação entre páginas

function Pergunta() {
  const navigate = useNavigate(); // Função para navegação

  const handleSimClick = () => {
    navigate('/login'); // Navega para a página de login
  };

  const handleNaoClick = () => {
    navigate('/cadastro'); // Navega para a página de cadastro
  };

  const handleHomeClick = () => {
    navigate('/'); // Navega para a página inicial
  };

  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/carro5.jpg)', // Caminho para a imagem de fundo
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    },
    box: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fundo semi-transparente
      padding: '40px 60px',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
      width: '300px', // Largura da caixa
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
      margin: '10px 0',
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
    buttonHover: {
      backgroundColor: '#b81d1a',
      color: '#ffffff',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>Já possui uma conta?</h1>
        <button
          style={{ ...styles.button, ...styles.buttonSim }}
          onClick={handleSimClick}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#b81d1a';
            e.currentTarget.style.color = '#ffffff'; // Altera a cor do texto para branco
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#b81d1a'; // Retorna a cor original do texto
          }}
        >
          Sim
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonNao }}
          onClick={handleNaoClick}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#b81d1a';
            e.currentTarget.style.color = '#ffffff'; // Altera a cor do texto para branco
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#b81d1a'; // Retorna a cor original do texto
          }}
        >
          Não
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonHome }}
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
