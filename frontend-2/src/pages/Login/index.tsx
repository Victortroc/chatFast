import { ButtonGoogle, LoginContainer, LoginFormButton, LoginFormContainer, SecondContainer } from "./styles";
import ChatLogoBranca from "../../assets/chatlogo-branca.png"
import GoogleLogo from "../../assets/google-logo.svg"
import { Link } from "react-router-dom";

export function Login() {
  return (
    <LoginContainer>
      <img src={ChatLogoBranca} alt="" />

      <h1>Entrar</h1>
    <LoginFormContainer /*onSubmit={handleSubmit}*/>
      <span>Email</span>
      <input
        type="email"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
      />
      <span>Senha <a href="#">Esqueceu a senha?</a></span>
      <input
        type="password"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha"
      />
      <LoginFormButton>Login</LoginFormButton>
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
  )
}