import React, { useState, useEffect } from 'react';

function Home() {
  const images = [
    '/mahindra-banner.jpg',
    '/mahindra-banner2.jpg',
    '/mahindra-banner3.jpg',
    '/mahindra-banner4.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      width: '100%',
      margin: '0 auto',
      fontFamily: '"Gruppo", sans-serif',
      scrollBehavior: 'smooth',
    },
    section: {
      padding: '20px',
      textAlign: 'left',
      color: '#333',
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#b81d1a',
      marginBottom: '20px',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '26px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#b81d1a',
    },
    text: {
      fontSize: '18px',
      lineHeight: '1.7',
      color: '#333',
      fontWeight: '500',
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
      padding: '30px',
      marginTop: '40px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
    },
    aboutTitle: {
      fontSize: '30px',
      color: '#b81d1a',
      marginBottom: '10px',
      textAlign: 'center',
    },
    aboutContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    aboutText: {
      flex: '1',
      fontSize: '18px',
      lineHeight: '1.7',
      padding: '15px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      position: 'relative',
      overflow: 'hidden',
      fontWeight: '500',
    },
    aboutSubtitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#b81d1a',
      marginBottom: '10px',
    },
    aboutIcon: {
      fontSize: '30px',
      color: '#b81d1a',
      position: 'absolute',
      top: '10px',
      right: '10px',
      opacity: '0.2',
    },
    divider: {
      width: '100%',
      height: '2px',
      backgroundColor: '#b81d1a',
      margin: '30px 0',
      opacity: '0.3',
    },
    slideshowContainer: {
      position: 'relative',
      width: '100%',
      height: '100vh', // O slideshow agora ocupa toda a altura da janela
      overflow: 'hidden',
      boxShadow: '0 20px 20px -10px rgba(0, 0, 0, 0.3)', // Sombra na parte inferior
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
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      color: '#ffffff',
      border: 'none',
      padding: '15px',
      cursor: 'pointer',
      fontSize: '30px',
      borderRadius: '4px',
      opacity: '0',
      transition: 'opacity 0.3s ease, background-color 0.3s ease',
    },
    nextButton: {
      position: 'absolute',
      top: '50%',
      right: '20px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      color: '#ffffff',
      border: 'none',
      padding: '15px',
      cursor: 'pointer',
      fontSize: '30px',
      borderRadius: '4px',
      opacity: '0',
      transition: 'opacity 0.3s ease, background-color 0.3s ease',
    },
    containerHover: {
      opacity: '1',
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
        id="inicio"
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
      <div id="pilotos" style={styles.section}>
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
      <div id="sobre" style={styles.aboutSection}>
        <h2 style={styles.aboutTitle}>Sobre:</h2>
        <div style={styles.aboutContent}>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>Mahindra Racing</h3>
            <i className="fas fa-flag-checkered" style={styles.aboutIcon}></i>
            <p>
            Mahindra Racing é uma equipe de automobilismo indiana de propriedade da fabricante de automóveis indiana Mahindra & Mahindra. Foi o primeiro construtor da Índia a participar no Campeonato do Mundo FIM MotoGP em 2011, no CIV (Campeonato Nacional Italiano de Motociclismo) em 2012 e no Campeonato Internacional FIM CEV em 2013. Em 2014, a Mahindra Racing também se tornou uma das dez fundadoras e a única equipe indiana a competir no Campeonato de Fórmula E da FIA.
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>Tech Mahindra</h3>
            <i className="fas fa-laptop" style={styles.aboutIcon}></i>
            <p>
            Tech Mahindra é uma empresa multinacional indiana de consultoria e serviços de tecnologia da informação. Parte do Grupo Mahindra, a empresa está sediada em Pune e tem sede em Mumbai. A Tech Mahindra tem mais de 146.000 funcionários em 90 países. A empresa foi classificada em 5º lugar nas empresas de TI da Índia e em 47º lugar geral na lista Fortune India 500 em 2019. Em 25 de junho de 2013, a Tech Mahindra anunciou a conclusão de uma fusão com a Mahindra Satyam. A Tech Mahindra é uma das principais empresas de Big Tech (Índia). A Tech Mahindra tinha 1.262 clientes ativos em junho de 2022.
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>História</h3>
            <i className="fas fa-history" style={styles.aboutIcon}></i>
            <p>
            A Mahindra & Mahindra iniciou uma joint venture com a British Telecom em 1986 como uma empresa de terceirização de tecnologia. Naquela época, a empresa se chamava Mahindra British Telecom (MBT). Mais tarde foi renomeado como Tech Mahindra. A British Telecom inicialmente tinha cerca de 30% de participação na Tech Mahindra. Em dezembro de 2010, a British Telecom vendeu 5,5% de sua participação na Tech Mahindra para a Mahindra & Mahindra por Rs. 451 milhões. Em agosto de 2012, a British Telecom vendeu 14,1% de sua participação a investidores institucionais por cerca de Rs. 1.395 milhões. Em dezembro de 2012, a British Telecom vendeu a sua participação restante de 9,1 por cento (11,6 milhões de ações) a investidores institucionais por um produto bruto total em dinheiro de Rs. 1.011,4 milhões. Esta venda marcou a saída da British Telecom da Tech Mahindra.
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>Aquisição da Satyam Computer Services Ltd.</h3>
            <i className="fas fa-handshake" style={styles.aboutIcon}></i>
            <p>
            Após o escândalo Satyam de 2008-09, a Tech Mahindra fez uma oferta pela Satyam Computer Services e emergiu como a principal licitante com uma oferta de INR 58,90 por ação por uma participação de 31 por cento na empresa, derrotando um forte rival, Larsen & Toubro. Depois de avaliar as propostas, o conselho nomeado pelo governo da Satyam Computer anunciou em 13 de abril de 2009: "seu Conselho de Administração selecionou a Venturbay Consultants Private Limited, uma subsidiária controlada pela Tech Mahindra Limited, como o licitante com lance mais alto para adquirir o controle acionário da da Empresa, sujeito à aprovação do Hon'ble Company Law Board."
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>Fusão com a Mahindra Satyam</h3>
            <i className="fas fa-globe" style={styles.aboutIcon}></i>
            <p>
            A Tech Mahindra anunciou sua fusão com a Mahindra Satyam em 21 de março de 2012, após obter a aprovação dos conselhos das duas empresas para criar uma empresa de TI no valor de US$ 2,5 bilhões.  A Tech Mahindra registrou lucro líquido de INR 686 milhões no primeiro trimestre encerrado em 30 de junho de 2013, um aumento de 27% em comparação com o trimestre correspondente do ano anterior.
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.aboutText}>
            <h3 style={styles.aboutSubtitle}>Anos depois</h3>
            <i className="fas fa-handshake" style={styles.aboutIcon}></i>
            <p>
            Em 2014, a Tech Mahindra adquiriu a Lightbridge Communications Corporation (LCC), uma empresa de serviços de telecomunicações que opera em mais de 50 países. Em 2015, a Tech Mahindra adquiriu a SOFGEN Holdings, uma empresa suíça de TI com 450 funcionários que fornece o setor de serviços financeiros. A Tech Mahindra adquiriu o controle acionário da Pininfarina S.p.A., uma marca italiana de design automotivo e industrial. A Tech Mahindra anunciou o lançamento de seu Automation Framework AQT ( Automação, Qualidade, Tempo) Em março de 2016, o lucro pós-impostos da Tech Mahindra ultrapassou o da M&M.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
