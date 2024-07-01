import { ButtonGoogle, LoginContainer, LoginFormButton, LoginFormContainer, SecondContainer } from "./styles";
import ChatLogoBranca from "../../assets/chatlogo-branca.png";
import GoogleLogo from "../../assets/google-logo.svg";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/Auth/AuthContext";

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleButtonClick = async (e) => {

    e.preventDefault(); 
    console.log(email, password);

    try {

      if (email && password){

        setLoading(true);
        await sleep(2000);
        await handleLogin({ email, password });
        setLoading(false);
      } else {
        toast.error("Preencha os campos!");
        setLoading(false);
      }
      
  } catch (error) {
    toast.error("Erro ao logar!");
  }
};

  return (
    <LoginContainer>
      <img src={ChatLogoBranca} alt="" />
      <h1>Entrar</h1>
      <LoginFormContainer>
        <span>Email</span>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={handleEmailChange}
        />
        <span>
          Senha <Link to='/'>Esqueceu a senha?</Link>
        </span>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={handlePasswordChange}
        />

        {loading ? (<LoginFormButton $disable="true">Logando...</LoginFormButton>) : 
        (<LoginFormButton onClick={handleButtonClick}>Login</LoginFormButton>)}
        
      </LoginFormContainer>
      <SecondContainer>
        <p>Não possui uma conta? <Link to='/register'>Registre-se</Link></p>
        <span>ou</span>
        <ButtonGoogle>
          <img src={GoogleLogo} alt="" />
          Entrar com Google
        </ButtonGoogle>
      </SecondContainer>
    </LoginContainer>
  );
}
