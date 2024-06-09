import { FormButton, FormContainer, LoginContainer } from "./styles";
import ChatLogoBranca from "../../assets/chatlogo-branca.png"

export function Login() {
  return (
    <LoginContainer>
      <img src={ChatLogoBranca} alt="" />

      <h1>Entrar</h1>
      <FormContainer /*onSubmit={handleSubmit}*/>
      <span>Email</span>
      <input
        type="email"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
      />
      <span>Senha</span>
      <input
        type="password"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha"
      />
      <FormButton>Login</FormButton>
    </FormContainer>
    </LoginContainer>
  )
}