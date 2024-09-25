import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav=()=>{
    return(
        <>
            <Link to="/">Início</Link>
            <Link to="/pilotos">Pilotos</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/pergunta">
                <button>Entrar</button>
            </Link>
        </>
    )
}

export default Nav