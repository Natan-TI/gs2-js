import "../scss/home.scss";
import { Header } from "./header";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="introducao">
          <div className="projeto">
            <img
              className="img-principal"
              src="../images/imagemprincipal.jpg"
              alt="imagem principal"
            />
            <div className="resumo">
              <h2>MedMaps</h2>
              <p>
                O MedMaps é um aplicativo inovador que oferece informações em
                tempo real sobre hospitais, lotação, e integração com os planos
                de saúde, simplificando a busca por cuidados de saúde.
              </p>
            </div>
            <a href="#">Mais Informações</a>
          </div>
          <div className="informacoes" id="informacoesid">
            <aside>
              <h2>Informações</h2>
              <div className="info-item">
                <h2>O que é a solução</h2>
                <p>
                  O MedMaps revoluciona a busca por serviços de saúde ao
                  fornecer, em tempo real, informações sobre hospitais próximos,
                  lotação e cobertura de planos de saúde. Integrando
                  geolocalização e dados de convênios médicos, o aplicativo
                  personaliza a experiência do usuário, destacando a
                  disponibilidade de leitos e facilitando escolhas informadas.
                  Com notificações em tempo real, o MedMaps proporciona
                  eficiência e conveniência na busca por atendimento médico,
                  promovendo uma abordagem inovadora e centrada no usuário.
                </p>
              </div>
              <div className="info-item">
                <h2>O que ela fará</h2>
                <p>
                  Com informações em tempo real, o aplicativo destaca hospitais
                  próximos, apresenta dados sobre lotação e verifica a cobertura
                  de planos de saúde. Sua integração de geolocalização
                  personaliza a experiência do usuário, enquanto notificações em
                  tempo real garantem eficiência na busca por atendimento
                  médico. O MedMaps é uma ferramenta prática e centrada no
                  usuário, proporcionando escolhas informadas de forma
                  conveniente.
                </p>
              </div>
              <div className="info-item">
                <h2>Como funcionará</h2>
                <p>
                  O MedMaps simplifica a busca por cuidados de saúde. Ao inserir
                  sua localização, o aplicativo apresenta hospitais próximos,
                  indicando a lotação e verificando a cobertura do plano de
                  saúde. A experiência personalizada permite escolhas
                  informadas, enquanto notificações em tempo real mantêm os
                  usuários atualizados. Com funcionalidade intuitiva e eficaz, o
                  MedMaps revoluciona a acessibilidade aos serviços médicos,
                  proporcionando uma busca por atendimento rápida, informada e
                  conveniente.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-hospitais">
          <h2>Exemplo de Uso</h2>
          <div className="hospitais-proximos" id="hospitaisid">
            <div className="hospitais">
              <div className="hospitais-img">
                <img src="../images/HospitalVitoriaAnaliaFranco.jpg" alt="hospital" />
              </div>
              <div className="hospitais-texto">
                <h1>Hospital e Maternidade Vitória - Anália Franco</h1>
                <h2>{"Lotação >> Cheio"}</h2>
                <p>5km de distância</p>
                <p>Planos de Saúde aceitos</p>
                <ul>
                  <li>Bradesco</li>
                  <li>Mapfre</li>
                  <li>Porto Seguro</li>
                  <li>Seguros Unimed</li>
                  <li>Sulamérica</li>
                </ul>
              </div>
            </div>
            <div className="hospitais">
              <div className="hospitais-img">
                <img src="../images/HospitalSantaIsabel.jpg" alt="hospital 1" />
              </div>
              <div className="hospitais-texto">
                <h1>Hospital Santa Isabel</h1>
                <h2>{"Lotação >> médio"}</h2>
                <p>10km de distância</p>
                <p>Planos de Saúde aceitos</p>
                <ul>
                  <li>Bradesco</li>
                  <li>Mapfre</li>
                  <li>Porto Seguro</li>
                  <li>Seguros Unimed</li>
                  <li>Sulamérica</li>
                </ul>
              </div>
            </div>
            <div className="hospitais">
              <div className="hospitais-img">
                <img src="../images/HospitalSantaPaula.jpg" alt="hospital 2" />
              </div>
              <div className="hospitais-texto">
                <h1>Hospital Santa Paula</h1>
                <h2>{"Lotação >> vazio"}</h2>
                <p>20km de distância</p>
                <p>Planos de Saude aceitos</p>
                <ul>
                  <li>Bradesco</li>
                  <li>Mapfre</li>
                  <li>Porto Seguro</li>
                  <li>Seguros Unimed</li>
                  <li>Sulamérica</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
