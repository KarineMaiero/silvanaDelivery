import React from "react";
import { NavLink } from "react-router-dom";

import cosmopolitan from "../../../images/cosmopolitan.jpg";
import caipirinha from "../../../images/caipirinha.jpg";
import sexonthebeach from "../../../images/sexonthebeach.jpg";
import mojito from "../../../images/mojito.jpg";

export default function Recipes2() {
  return (
    <div id="main" className="container-fluid overflow-hidden px-5 text-center">
      <div className="row gx-5">
        <div className="col align-items-start">
          <img
            id="main-img"
            className="card-img-top"
            src={sexonthebeach}
            alt="Imagem de dois drinks em uma mesa de mandeira com 4 limões, sendo um deles cortado ao meio. Os drinks são capirinhas feitos em copo de vidro, com liquido, gelo, folhas de hortelã dentro, com uma rodela de hortelã presa na borda e dois canudos curtos."
          />
          <div className="text-center">
            <h2>Sex On The Beach</h2>
            <h3>Ingredientes</h3>
            <ul className="lists">
              <li>1 dose de vodka</li>
              <li>2 colheres (sopa) de licor de pêssego</li>
              <li>2 colheres (sopa) de chambord</li>
              <li>4 colheres (sopa) de suco de laranja</li>
              <li>1 colher (chá) de granadine</li>
            </ul>
            <h3>Modo de Preparo</h3>
            <ol className="lists">
              <li>Coloque os ingredientes em uma coqueteleira com gelo.</li>
              <li>Tampe e agite levemente.</li>
              <li>Coe em um copo alto com gelo.</li>
              <li>Aprecie.</li>
            </ol>
          </div>
        </div>

        <aside id="aside" className="aside col-sm-4 align-items-start">
          <div>
            <NavLink to="/recipes">
              <img
                className="sec-img card-img-top"
                src={cosmopolitan}
                alt="Imagem do drink Cosmopolitan em cima de um balcão de madeira com um fundo desfocado de prateleiras de bebidas. O drink está servido em uma taça de martini de vidro com uma rodela de limão presa na borda."
              />
            </NavLink>
            <h2>Cosmopolitan</h2>
          </div>
          <div className="boxdrinks">
            <NavLink to="/recipes1">
              <img
                className="sec-img card-img-top"
                src={caipirinha}
                alt="Imagem de dois drinks em uma mesa de mandeira com 4 limões, sendo um deles cortado ao meio. Os drinks são capirinhas feitos em copo de vidro, com liquido, gelo, folhas de hortelã dentro, com uma rodela de hortelã presa na borda e dois canudos curtos."
              />
            </NavLink>
            <h2>Caipirinha</h2>
          </div>
          <div className="boxdrinks">
            <NavLink to="/recipes3">
              <img
                className="sec-img card-img-top"
                src={mojito}
                alt="Imagem de dois drinks Mojito em uma bandeija em cima de uma mesa de madeira. Na bandeija há um limão inteiro, a metade de outro e duas estrelas de 5 pontas feita a partir de uma fruta. Os drinks estão dentro de um copo de vidro com gelo e na borda do copo há uma rodela de limão e duas folhas de hortelã, e também um canudo."
              />
            </NavLink>
            <h2>Mojito</h2>
          </div>
        </aside>
      </div>
    </div>
  );
}
