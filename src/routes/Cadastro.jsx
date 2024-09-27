import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    genero: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui pode ser adicionada a lógica de envio dos dados de cadastro.
    alert("Cadastro realizado com sucesso!");
    navigate("/dashboard"); // Redireciona para o dashboard após cadastro
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: 'url(/carro4.jpg)', // Imagem de fundo
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      margin: "0",
      padding: "0",
    },
    box: {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      padding: "40px 60px",
      borderRadius: "15px",
      textAlign: "center",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
      width: "500px",
    },
    title: {
      fontSize: "36px", // Aumentei o tamanho do título
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#b81d1a",
      fontFamily: '"Gruppo", sans-serif',
      position: "relative",
    },
    underline: {
      width: "100%",
      height: "2px",
      backgroundColor: "#ffffff",
      position: "absolute",
      bottom: "-5px",
      left: "0",
    },
    inputWrapper: {
      display: "grid", // Tornando um container de grid
      gridTemplateColumns: "1fr 1fr", // Definindo duas colunas de igual tamanho
      gap: "10px", // Espaçamento entre os itens
      marginBottom: "20px",
      width: "100%",
    },
    input: {
      border: "none",
      outline: "none",
      fontSize: "16px",
      padding: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      color: "#ffffff",
      borderRadius: "20px",
      fontFamily: '"Gruppo", sans-serif',
      width: "100%",
    },
    radioGroup: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      marginBottom: "20px",
      color: "#b81d1a",
    },
    button: {
      width: "100%",
      padding: "10px",
      fontSize: "18px",
      margin: "10px 0",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontFamily: '"Gruppo", sans-serif',
      transition: "all 0.3s ease",
    },
    buttonConfirmar: {
      backgroundColor: "#ffffff",
      color: "#b81d1a",
      border: "2px solid #b81d1a",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    buttonHome: {
      backgroundColor: "#111111",
      color: "#ffffff",
      border: "none",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>
          Cadastre-se
          <div style={styles.underline}></div> {/* Linha branca embaixo do título */}
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputWrapper}>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="sobrenome"
              placeholder="Sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="telefone"
              placeholder="Número de Telefone"
              value={formData.telefone}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Confirmar senha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.radioGroup}>
            <label>
              Gênero:
              <input
                type="radio"
                name="genero"
                value="Homem"
                onChange={handleChange}
              />{" "}
              Homem
            </label>
            <label>
              <input
                type="radio"
                name="genero"
                value="Mulher"
                onChange={handleChange}
              />{" "}
              Mulher
            </label>
            <label>
              <input
                type="radio"
                name="genero"
                value="Outro"
                onChange={handleChange}
              />{" "}
              Outro
            </label>
          </div>

          <button
            type="submit"
            style={{ ...styles.button, ...styles.buttonConfirmar }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#b81d1a";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#b81d1a";
            }}
          >
            Confirmar
          </button>
        </form>
        <button
          style={{ ...styles.button, ...styles.buttonHome }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#333";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#111111";
          }}
          onClick={handleHomeClick}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
