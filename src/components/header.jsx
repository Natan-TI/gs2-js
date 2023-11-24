import "../scss/header.scss";

import data from "../API/api.json";

export function Header() {
  return (
    <header>
      <div class="logo">
        <img src="../images/MedMapslogo.png" alt="logo" class="img-logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a class="button-header" href="#informacoesid">
              {data.contas[0].user}
            </a>
          </li>
          <li>
            <a class="button-header" href="#informacoesid">
              {data.contas[0].email}
            </a>
          </li>
          <li>
            <a class="button-header" href="#informacoesid">
              Informações
            </a>
          </li>
          <li>
            <a class="button-header" href="#hospitaisid">
              Hospitais
            </a>
          </li>
          <li>
            <a class="button-header" href="/">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
