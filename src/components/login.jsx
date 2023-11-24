import "../scss/login.scss";

import data from "../API/api.json";
import { useState } from "react";

export function Login() {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  return (
    <section className="section-form">
      <form>
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
            <button onSubmit={(e) => e.preventDefault()}>
              <a
                href={
                  inputUser === data.contas[0].user &&
                  inputPassword === data.contas[0].password
                    ? "/home"
                    : "/"
                }
              >
                Login
              </a>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
