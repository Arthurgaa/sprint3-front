import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const usuario = useRef();
    const senha = useRef();
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    function validar() {
        for (let i = 0; i < usuarios.length; i++) {
            if (
                usuarios[i].usuario === usuario.current.value &&
                usuarios[i].senha === senha.current.value
            )
                return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validar()) {
            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
            sessionStorage.setItem("usuario", usuario.current.value);
            sessionStorage.setItem("senha", token);
            navigate("/dashboard");
        } else {
            alert("Usuário ou senha inválidos");
        }
    };

    useEffect(() => {
        fetch("http://localhost:5000/usuarios")
            .then((res) => res.json())
            .then((res) => setUsuarios(res));
    }, []);

    const styles = {
        container: {
            height: '100vh',
            width: '100vw',
            display: 'grid', // Usando CSS Grid
            placeItems: 'center', // Centraliza horizontal e verticalmente
            backgroundImage: 'url(/carro3.jpg)', // Caminho para a imagem de fundo
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            margin: '0',
            padding: '0',
        },
        box: {
            display: 'grid', // Usando CSS Grid para organizar os elementos dentro da caixa
            gridTemplateColumns: '1fr', // Definindo uma coluna principal
            gap: '10px', // Reduzindo o espaçamento entre os elementos
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fundo semi-transparente
            padding: '30px 40px', // Diminuindo o padding
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
            width: '300px', // Largura da caixa
        },
        title: {
            fontSize: '28px', // Diminuindo o tamanho do título
            fontWeight: 'bold',
            marginBottom: '10px', // Reduzindo a margem inferior
            color: '#b81d1a',
            fontFamily: '"Gruppo", sans-serif',
            position: 'relative',
        },
        underline: {
            width: '100%',
            height: '2px',
            backgroundColor: '#ffffff',
            position: 'absolute',
            bottom: '-5px',
            left: '0',
        },
        inputWrapper: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px', // Reduzindo o espaçamento entre inputs
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '8px 12px', // Reduzindo o padding nos inputs
        },
        input: {
            flex: '1',
            border: 'none',
            outline: 'none',
            fontSize: '14px', // Diminuindo a fonte dos inputs
            backgroundColor: 'transparent',
            color: '#ffffff',
            marginLeft: '10px',
            fontFamily: '"Gruppo", sans-serif',
        },
        checkboxWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#b81d1a', // Alterei a cor do texto para vermelho
            fontSize: '14px',
            marginBottom: '10px', // Reduzindo o espaçamento entre o checkbox e o botão
        },
        checkbox: {
            display: 'flex',
            alignItems: 'center',
        },
        checkboxLabel: {
            marginLeft: '5px',
        },
        button: {
            display: 'block', // Garantir que cada botão ocupe seu próprio espaço
            width: '100%', // Largura de 100% dentro do contêiner pai
            padding: '10px',
            fontSize: '16px', // Diminuindo a fonte dos botões
            margin: '8px 0', // Reduzindo o espaçamento entre os botões
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: '"Gruppo", sans-serif',
            transition: 'all 0.3s ease',
        },
        buttonLogin: {
            backgroundColor: '#ffffff',
            color: '#b81d1a',
            border: '2px solid #b81d1a',
            transition: 'background-color 0.3s ease, color 0.3s ease',
        },
        buttonHome: {
            backgroundColor: '#111111',
            color: '#ffffff',
            border: 'none',
            transition: 'background-color 0.3s ease, color 0.3s ease',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h1 style={styles.title}>
                    Login
                    <div style={styles.underline}></div> {/* Linha branca embaixo do título */}
                </h1>

                {/* Campo de Usuário */}
                <div style={styles.inputWrapper}>
                    <input
                        type="text"
                        placeholder="Email"
                        ref={usuario}
                        style={styles.input}
                    />
                </div>

                {/* Campo de Senha */}
                <div style={styles.inputWrapper}>
                    <input
                        type="password"
                        placeholder="Senha"
                        ref={senha}
                        style={styles.input}
                    />
                </div>

                {/* Lembrar senha e Esqueci a senha */}
                <div style={styles.checkboxWrapper}>
                    <div style={styles.checkbox}>
                        <input type="checkbox" />
                        <span style={styles.checkboxLabel}>Lembrar Senha</span>
                    </div>
                    <span>Esqueci Minha Senha</span>
                </div>

                {/* Botão de Login */}
                <button
                    style={{ ...styles.button, ...styles.buttonLogin }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#b81d1a';
                        e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.color = '#b81d1a';
                    }}
                    onClick={handleSubmit}
                >
                    Login
                </button>

                {/* Botão Home */}
                <button
                    style={{ ...styles.button, ...styles.buttonHome }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#333';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#111111';
                    }}
                    onClick={() => navigate('/')}
                >
                    Home
                </button>
            </div>
        </div>
    );
}

export default Login;
