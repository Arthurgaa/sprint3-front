import React, { useState, useEffect } from 'react';

function Home() {
  // Lista de imagens do slideshow
  const images = [
    '/mahindra-banner.jpg',
    '/mahindra-banner2.jpg',
    '/mahindra-banner3.jpg',
    '/mahindra-banner4.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para a próxima imagem
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para voltar à imagem anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Altera a imagem automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
  }, []);

  const styles = {
    container: {
      width: '100%',
      margin: '0 auto',
      fontFamily: '"Gruppo", sans-serif', // Aplicando a fonte Gruppo
      scrollBehavior: 'smooth', // Aplicando scroll suave globalmente
    },
    section: {
      padding: '20px',
      textAlign: 'left',
      color: '#333',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#b81d1a',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#b81d1a',
    },
    text: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333',
    },
    pilots: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #ddd',
    },
    pilotCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '5px',
      width: '45%',
    },
    pilotImage: {
      height: '300px',
      marginBottom: '10px',
    },
    pilotName: {
      backgroundColor: '#b81d1a',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '100%',
    },
    aboutSection: {
      border: '1px solid #ddd',
      padding: '20px',
      marginTop: '20px',
    },
    aboutTitle: {
      fontSize: '28px',
      color: '#b81d1a',
      marginBottom: '10px',
    },
    aboutContent: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
    },
    aboutText: {
      flex: '1',
      fontSize: '16px',
      lineHeight: '1.6',
    },
    slideshowContainer: {
      position: 'relative',
      width: '100%',
      height: '500px',
      overflow: 'hidden',
    },
    slide: {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'all 0.5s ease-in-out',
    },
    prevButton: {
      position: 'absolute',
      top: '50%',
      left: '20px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Transparente quando não há hover
      color: '#ffffff',
      border: 'none',
      padding: '15px',
      cursor: 'pointer',
      fontSize: '30px',
      borderRadius: '4px',
      opacity: '0', // Inicialmente invisível
      transition: 'opacity 0.3s ease, background-color 0.3s ease',
    },
    nextButton: {
      position: 'absolute',
      top: '50%',
      right: '20px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Transparente quando não há hover
      color: '#ffffff',
      border: 'none',
      padding: '15px',
      cursor: 'pointer',
      fontSize: '30px',
      borderRadius: '4px',
      opacity: '0', // Inicialmente invisível
      transition: 'opacity 0.3s ease, background-color 0.3s ease',
    },
    containerHover: {
      opacity: '1', // Botões visíveis ao passar o mouse
    },
    image: {
      width: '100%',
      height: '100%',
    },
  };

  return (
    <div style={styles.container}>
      {/* Slideshow */}
      <div
        id="inicio" // Adiciona o id para rolar até o início
        style={styles.slideshowContainer}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('.prevButton').style.opacity = '1';
          e.currentTarget.querySelector('.nextButton').style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('.prevButton').style.opacity = '0';
          e.currentTarget.querySelector('.nextButton').style.opacity = '0';
        }}
      >
        <div
          style={{
            ...styles.slide,
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        />
        {/* Botões de navegação minimalistas */}
        <button
          className="prevButton"
          style={styles.prevButton}
          onClick={prevSlide}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)')}
        >
          &#10094;
        </button>
        <button
          className="nextButton"
          style={styles.nextButton}
          onClick={nextSlide}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)')}
        >
          &#10095;
        </button>
      </div>

      {/* Seção de Pilotos */}
      <div id="pilotos" style={styles.section}> {/* Adiciona o id "pilotos" */}
        <h2 style={styles.title}>Pilotos:</h2>
        <div style={styles.pilots}>
          <div style={styles.pilotCard}>
            <img src="/Nick-Mahindra.png" alt="Nick de Vries" style={styles.pilotImage} />
            <div style={styles.pilotName}>Nick de Vries #21</div>
          </div>
          <div style={styles.pilotCard}>
            <img src="/Edoardo-Mahindra.png" alt="Edoardo Mortara" style={styles.pilotImage} />
            <div style={styles.pilotName}>Edoardo Mortara #48</div>
          </div>
        </div>
      </div>

      {/* Seção de Sobre */}
      <div id="sobre" style={styles.aboutSection}> {/* Adiciona o id "sobre" */}
        <h2 style={styles.aboutTitle}>Sobre:</h2>
        <div style={styles.aboutContent}>
          <div style={styles.aboutText}>
            <strong>Mahindra Racing:</strong> Mahindra Racing é uma equipe de automobilismo indiana de propriedade da fabricante de automóveis indiana Mahindra & Mahindra. Foi o primeiro construtor da Índia a participar no Campeonato do Mundo FIM MotoGP em 2011, no CIV (Campeonato Nacional Italiano de Motociclismo) em 2012 e no Campeonato Internacional FIM CEV em 2013. Em 2014, a Mahindra Racing também se tornou uma das dez fundadoras e a única equipe indiana a competir no Campeonato de Fórmula E da FIA.
          </div>
          <div style={styles.aboutText}>
            <strong>Tech Mahindra:</strong> Tech Mahindra é uma empresa multinacional indiana de consultoria e serviços de tecnologia da informação. Parte do Grupo Mahindra, a empresa está sediada em Pune e tem sede em Mumbai. A Tech Mahindra tem mais de 146.000 funcionários em 90 países. A empresa foi classificada em 5º lugar nas empresas de TI da Índia e em 47º lugar geral na lista Fortune India 500 em 2019. Em 25 de junho de 2013, a Tech Mahindra anunciou a conclusão de uma fusão com a Mahindra Satyam. A Tech Mahindra é uma das principais empresas de Big Tech (Índia). A Tech Mahindra tinha 1.262 clientes ativos em junho de 2022.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
