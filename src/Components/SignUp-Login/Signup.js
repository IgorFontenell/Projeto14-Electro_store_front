
import { Link} from "react-router-dom";
import styled from "styled-components";


export default function SignUp() {
   
    return (
        <MainStyle>
        <>
        <h1> Cadastro </h1>
       
        <form>
            <input
                type="text"
                placeholder="Nome"
                required
            />
            <input
                type="email"
                placeholder="Email"
                required
            />
            <input
                type="password"
                placeholder="Senha"
                required
            />
            <input
                type="password"
                placeholder="Confirme a senha"
                required
            />

            <button type="submit">Cadastrar</button>
        </form>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
        </>        
    </MainStyle>
    );
}

const MainStyle = styled.main`
display: flex;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1 {
    font-family: 'Mark Pro';
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;
    font-size: 32px;
    line-height: 50px;
    margin: -5px 0px 24px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

input{
    width: 30%;
    max-width: 470px;
    height: 58px;
    padding: 18px 15px;
    border-radius: 30px;
    border: none;
    background-color: #FFFFFF;
    color:#E5E5E5;
    font-size: 16px;
    margin-bottom: 13px;
}

button {
    background-color: #FF6E4E;
    border: none;
    width: 30%;
    height: 54px;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
}
button:hover{
    cursor: pointer;
}

a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
}
`;