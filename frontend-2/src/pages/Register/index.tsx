import ChatLogoBranca from "../../assets/chatlogo-branca.png"
import { RegisterContainer, RegisterFormButton, RegisterFormContainer } from "./styles";97

export function Register() {
  return (
    <RegisterContainer>
      <img src={ChatLogoBranca} alt="" />
      <h1>Registre-se</h1>

      <RegisterFormContainer /*onSubmit={handleSubmit}*/>
        <span>Nome completo</span>
        <input
          type="nome"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu nome"
        />
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
        <RegisterFormButton>Cadastre-se</RegisterFormButton>
      </RegisterFormContainer>
    </RegisterContainer>
  )
}