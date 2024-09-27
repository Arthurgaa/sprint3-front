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
            display: 'grid',
            placeItems: 'center',
            backgroundImage: 'url(/carro3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            margin: '0',
            padding: '0',
        },
        box: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '30px 40px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
            width: '300px',
            transition: 'width 0.3s ease',
        },
        title: {
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '10px',
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
            marginBottom: '15px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '8px 12px',
        },
        input: {
            flex: '1',
            border: 'none',
            outline: 'none',
            fontSize: '14px',
            backgroundColor: 'transparent',
            color: '#ffffff',
            marginLeft: '10px',
            fontFamily: '"Gruppo", sans-serif',
        },
        checkboxWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#b81d1a',
            fontSize: '14px',
            marginBottom: '10px',
        },
        checkbox: {
            display: 'flex',
            alignItems: 'center',
        },
        checkboxLabel: {
            marginLeft: '5px',
        },
        button: {
            display: 'block',
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            margin: '8px 0',
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
        // Responsividade para mobile
        mobile: {
            box: {
                width: '250px',
                padding: '20px 30px',
            },
            title: {
                fontSize: '24px',
            },
            input: {
                fontSize: '12px',
            },
            button: {
                fontSize: '14px',
            },
        },
        // Responsividade para tablet
        tablet: {
            box: {
                width: '280px',
                padding: '25px 35px',
            },
            title: {
                fontSize: '26px',
            },
            input: {
                fontSize: '13px',
            },
            button: {
                fontSize: '15px',
            },
        },
    };

    // Verificar largura da tela para aplicar estilos responsivos
    const screenWidth = window.innerWidth;

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
                    Login
                    <div style={styles.underline}></div>
                </h1>

                <div style={styles.inputWrapper}>
                    <input
                        type="text"
                        placeholder="Email"
                        ref={usuario}
                        style={{ ...styles.input, ...responsiveStyles.input }}
                    />
                </div>

                <div style={styles.inputWrapper}>
                    <input
                        type="password"
                        placeholder="Senha"
                        ref={senha}
                        style={{ ...styles.input, ...responsiveStyles.input }}
                    />
                </div>

                <div style={styles.checkboxWrapper}>
                    <div style={styles.checkbox}>
                        <input type="checkbox" />
                        <span style={styles.checkboxLabel}>Lembrar Senha</span>
                    </div>
                    <span>Esqueci Minha Senha</span>
                </div>

                <button
                    style={{ ...styles.button, ...styles.buttonLogin, ...responsiveStyles.button }}
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

                <button
                    style={{ ...styles.button, ...styles.buttonHome, ...responsiveStyles.button }}
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
