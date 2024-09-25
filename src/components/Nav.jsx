import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`

    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #8c8c8c;  // Fundo cinza escuro
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
`;

const NavLink = styled(Link)`
    color: #ffffff;  // Texto branco
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #4444;  // Fundo cinza ao passar o mouse
        border-radius: 14px;
    }
`;

const LogoutButton = styled.button`
    background-color: #515151;  // Vermelho
    color: #ffffff;  // Texto branco
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #3c3c3c;  // Vermelho mais claro ao passar o mouse
    }
`;

const Nav = () => {
    return (
        <NavContainer>
            <img src="/logo-img.png" alt="logo" width={100}/>
            <NavLink to="/">Início</NavLink>
            <NavLink to="/pilotos">Pilotos</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/pergunta"><LogoutButton>Entrar</LogoutButton></NavLink>
        </NavContainer>
    );
}

export default Nav;