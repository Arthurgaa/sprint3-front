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
      minHeight: '100vh', // Garante que a altura mínima do container seja 100% da viewport
      display: 'grid', // Usando grid layout
      gridTemplateColumns: '1fr', // Definindo uma coluna única
      justifyItems: 'center', // Centraliza horizontalmente o conteúdo
      alignItems: 'center', // Centraliza verticalmente o conteúdo
      backgroundImage: 'url(/carro5.jpg)', // Caminho para a imagem de fundo
      backgroundSize: 'cover', // Faz com que a imagem cubra toda a área disponível
      backgroundPosition: 'center', // Centraliza a imagem de fundo
      backgroundRepeat: 'no-repeat', // Evita repetição da imagem
      margin: '0', // Remove margens
      padding: '0', // Remove padding
    },
    box: {
      display: 'grid', // Usando grid layout para organizar a caixa
      gridTemplateRows: 'auto auto auto', // Definindo três linhas: para o título e botões
      gap: '20px', // Espaçamento entre os elementos
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fundo semi-transparente
      padding: '40px 60px',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
      width: '300px', // Largura da caixa
      justifyItems: 'center', // Centraliza os itens dentro da caixa
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
          style={{ ...styles.button, ...styles.buttonNao }}
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
