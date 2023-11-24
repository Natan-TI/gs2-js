import "../scss/login.scss";

import data from "../API/api.json";
import { useState } from "react";

export function Login() {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)
    
    if (
      inputUser === data.contas[0].user &&
      inputPassword === data.contas[0].password
    ) {
      // Redireciona para "/home" se as credenciais estiverem corretas
      window.location.href = "/home";
    } else {
      // Lógica de tratamento para credenciais inválidas (pode exibir uma mensagem de erro, por exemplo)
      console.log("Credenciais inválidas");
    }
  };

  return (
    <section className="section-form">
      <form onSubmit={handleLogin}>
        <div className="form-login">
          <div className="usuário">
            <label htmlFor="usuário">Usuário</label>
            <input
              value={inputUser}
              type="text"
              name="usuário"
              id="usuário"
              onChange={(e) => setInputUser(e.target.value)}
            />
          </div>
          <div className="senha">
            <label htmlFor="senha">Senha</label>
            <input
              value={inputPassword}
              type="password"
              name="senha"
              id="senha"
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </div>
          <div className="login">
            <button type="submit">
                Login
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}


