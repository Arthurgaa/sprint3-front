import React from 'react';

function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#111111', // Fundo escuro
      color: '#ffffff', // Texto branco
      textAlign: 'center',
      padding: '40px 0', // Espaçamento maior
      marginTop: '40px',
      fontFamily: '"Gruppo", sans-serif', // Fonte Gruppo
    },
    logo: {
      display: 'block',
      margin: '0 auto 10px auto', // Centralizar logo
      width: '100px', // Logo menor
      filter: 'grayscale(100%)', // Logo em escala de cinza
      transition: 'filter 0.3s ease', // Efeito suave no hover
    },
    logoHover: {
      filter: 'none', // Remove o grayscale no hover
    },
    redDetail: {
      color: '#b81d1a', // Detalhe em vermelho
      fontSize: '14px', // Fonte menor para o detalhe
      marginTop: '10px',
    },
    copyright: {
      fontSize: '12px', // Texto de direitos autorais menor e sutil
      color: '#888', // Texto em cinza claro
      marginTop: '20px', // Espaçamento maior entre o texto e o detalhe
    }
  };

  return (
    <footer style={styles.footer}>
      {/* Logo */}
      <img
        src="/logo-img.png" // Certifique-se de que a logo esteja no caminho correto
        alt="Logo Mahindra"
        style={styles.logo}
        onMouseEnter={(e) => (e.target.style.filter = styles.logoHover.filter)}
        onMouseLeave={(e) => (e.target.style.filter = styles.logo.filter)}
      />
      <p style={styles.redDetail}>
        Mahindra Racing - Alto Desempenho e Inovação
      </p>
      <div style={styles.copyright}>
        © 2024 Mahindra Racing. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
