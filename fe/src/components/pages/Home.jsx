import React, { useState } from "react";
import ModalConfirm from "./Modal";

import cerveja_budweiser from "../../images/products/cerveja_budweiser_lata_269ml.jpg";
import cerveja_eisenbahn from "../../images/products/cerveja-eisenbahn_350.jpg";
import cerveja_heineken from "../../images/products/cerveja-heineken_250ml.jpg";
import cerveja_imperio from "../../images/products/cerveja-imperio-269ml.jpg";
import cerveja_original from "../../images/products/cerveja-original_350ml.jpg";
import cerveja_colorado from "../../images/products/colorado-appia.jpg";
import coca from "../../images/products/coca.jpg";
import cheetos from "../../images/products/cheetos.jpg";
import doritos from "../../images/products/doritos.png";
import engov_after from "../../images/products/engov-after.jpg";
import gelo from "../../images/products/gelo_800g.jpg";
import guarana from "../../images/products/guarana-antarctica-2l.jpg";
import agua from "../../images/products/agua.jpg";
import isqueiro from "../../images/products/isqueiro-bic-maxi-j6.jpg";
import ruffles from "../../images/products/ruffles.jpg";
import bis from "../../images/products/bis_Branco_Lacta_126G.png";
import amendoim from "../../images/products/amendoim.jpg";
import baralho from "../../images/products/baralho-copag-139.jpg";

export default function Home() {
  //  Counter is a state initialized to 1
  const [counter, setCounter] = useState(1);
  // Function is called everytime increment button is clicked
  const handleClickIncrement = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };
  // Function is called everytime decrement button is clicked
  const handleClickDecrement = () => {
    // Counter state is decremented
    if (counter >= 2) {
      setCounter(counter - 1);
    }
  };

  return (
    <div id="main">
      <div className="geral">
        <ModalConfirm></ModalConfirm>
        <div className="produtos">
          <h3>BEBIDAS</h3>
          <div className="row row-cols-1 row-cols-md-3">
            <div className="card text-center m-3 p-1" id="card-text-center">
              <img
                src={cerveja_original}
                className="card-img-top"
                alt="Lata de cerveja Original branca com logo azul e amarelo, tamanho 350ml"
              />
              <div className="card-body">
                <h6 className="card-title">Cerveja Original 350ml</h6>
                <p>R$ 3,29</p>
                <div id="counter">
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onClick={handleClickDecrement}
                  >
                    -
                  </button>
                  <span id="counterprod1">{counter}</span>
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onClick={handleClickIncrement}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning p-1"
                    id="button1"
                    onClick="incrementShop1('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>

            <div className="card text-center m-3 p-1" id="card-text-center">
              <img
                src={cerveja_budweiser}
                className="card-img-top"
                alt="Lata de cerveja Buddweiser vermelha com logo branco e azul, tamanho 350ml"
              />
              <div className="card-body">
                <h6 className="card-title">Cerveja Buddweiser 350ml</h6>
                <p>R$ 3,79</p>
                <div id="counter">
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onClick={handleClickDecrement}
                  >
                    -
                  </button>
                  <span id="counterprod2">{counter}</span>
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onClick={handleClickIncrement}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop2('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div className="card text-center m-3 p-1" id="card-text-center">
              <img
                src={cerveja_eisenbahn}
                className="card-img-top"
                alt="Lata de cerveja Eisenbahn amarela com logo preta e vermelha, tamanho 350ml"
              />
              <div className="card-body">
                <h6 className="card-title">Cerveja Eisenbahn 350ml</h6>
                <p>R$ 3,99</p>
                <div id="counter">
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onClick={handleClickDecrement}
                  >
                    -
                  </button>
                  <span id="counterprod3">{counter}</span>
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onClick={handleClickIncrement}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop3('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div className="card text-center m-3 p-1" id="card-text-center">
              <img
                src={cerveja_imperio}
                className="card-img-top"
                alt="Lata de Cerveja Império branca com logo dourada, tamanho 269ml"
              />
              <div className="card-body">
                <h6 className="card-title">Cerveja Império 269ml</h6>
                <p>R$ 2,39</p>
                <div id="counter">
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onClick={handleClickDecrement}
                  >
                    -
                  </button>
                  <span id="counterprod4">{counter}</span>
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onClick={handleClickIncrement}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop4('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div className="card text-center m-3 p-1" id="card-text-center">
              <img
                src={cerveja_heineken}
                className="card-img-top"
                alt="Garrafa longneck de cerveja Heineken verde com logo branca e preta, tamanho 250ml"
              />
              <div className="card-body">
                <h6 className="card-title">Cerveja Heineken 250ml</h6>
                <p>R$ 4,49</p>
                <div id="counter">
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onClick={handleClickDecrement}
                  >
                    -
                  </button>
                  <span id="counterprod5">{counter}</span>
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onClick={handleClickIncrement}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop5('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div className="card text-center m-3 p-1" id="card-text-center">
              <img
                src={cerveja_colorado}
                className="card-img-top"
                alt="Garrafa de vidro de Cerveja Colorado marrom com logo colorido impresso, tamanho 600ml"
              />
              <div className="card-body">
                <h6 className="card-title">Cerveja Colorado 600ml</h6>
                <p>R$ 8,99</p>
                <div id="counter">
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onClick={handleClickDecrement}
                  >
                    -
                  </button>
                  <span id="counterprod6">{counter}</span>
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onClick={handleClickIncrement}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop6('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div className="card text-center m-3 p-1" id="card-text-center">
              <img
                src={coca}
                className="card-img-top"
                alt="Garrafa plástica de Coca-Cola, tamanho 2L, com líquido preto, tampa vermelha e etiqueta vermelha com a marca impressa"
              />
              <div className="card-body">
                <h6 className="card-title">Refrigerante Coca-Cola 2l</h6>
                <p>R$ 6,99</p>
                <div id="counter">
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onClick={handleClickDecrement}
                  >
                    -
                  </button>
                  <span id="counterprod7">{counter}</span>
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onClick={handleClickIncrement}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop7('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div className="card text-center m-3 p-1" id="card-text-center">
              <img
                src={guarana}
                className="card-img-top"
                alt="Garrafa plástica de Guaraná Antártica com líquido verde, rótulo verde com a marca impressa e tampa vermelha, tamanho 2 litros"
              />
              <div className="card-body">
                <h6 className="card-title">Guaraná Antártica 2l</h6>
                <p>R$ 6,99</p>
                <div id="counter">
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onClick={handleClickDecrement}
                  >
                    -
                  </button>
                  <span id="counterprod8">{counter}</span>
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onClick={handleClickIncrement}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop8('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            <div className="card text-center m-3 p-1" id="card-text-center">
              <img
                src={agua}
                className="card-img-top"
                alt="Garrafa plástica de água mineiras com rótulo impresso com a marca Crystal em branco e azul, com tampa azul clara e tamanho de 500ml"
              />
              <div className="card-body">
                <h6 className="card-title">Água Mineral 500ml</h6>
                <p>R$ 2,99</p>
                <div id="counter">
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="subtrair"
                    onClick={handleClickDecrement}
                  >
                    -
                  </button>
                  <span id="counterprod9">{counter}</span>
                  <button
                    className="btn btn-warning btn-sm btn-custm m-1"
                    name="adicionar"
                    onClick={handleClickIncrement}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning p-1"
                    id="button1"
                    onclick="incrementShop9('shopcar')"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="geral">
          <div className="produtos">
            <h3>CONVENIÊNCIA</h3>
            <div className="row row-cols-1 row-cols-md-3">
              <div className="card text-center m-3 p-1" id="card-text-center">
                <img
                  src={amendoim}
                  className="card-img-top"
                  alt="Pacote de amendoim torrado da marca Dori, com imagem de amendoim, logo da marca, tamanho 320gr"
                />
                <div className="card-body">
                  <h6 className="card-title">Amendoim Dori 320gr</h6>
                  <p>R$ 5,50</p>
                  <div id="counter">
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onClick={handleClickDecrement}
                    >
                      -
                    </button>
                    <span id="counterprod10">{counter}</span>
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onClick={handleClickIncrement}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop10('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div className="card text-center m-3 p-1" id="card-text-center">
                <img
                  src={cheetos}
                  className="card-img-top"
                  alt="Pacote de salgadinho Cheetos na cor laranja com logo da marca e tamanho de 57gr"
                />
                <div className="card-body">
                  <h6 className="card-title">Salgadinho Cheetos 57gr</h6>
                  <p>R$ 5,89</p>
                  <div id="counter">
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onClick={handleClickDecrement}
                    >
                      -
                    </button>
                    <span id="counterprod11">{counter}</span>
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onClick={handleClickIncrement}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop11('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div className="card text-center m-3 p-1" id="card-text-center">
                <img
                  src={ruffles}
                  className="card-img-top"
                  alt=".Pacote de salgadinho Ruffles na cor Azul com logo da marca e tamanho de 57gr"
                />
                <div className="card-body">
                  <h6 className="card-title">Salgadinho Ruffles 57gr</h6>
                  <p>R$ 5,89</p>
                  <div id="counter">
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onClick={handleClickDecrement}
                    >
                      -
                    </button>
                    <span id="counterprod12">{counter}</span>
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onClick={handleClickIncrement}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop12('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div className="card text-center m-3 p-1" id="card-text-center">
                <img
                  src={doritos}
                  className="card-img-top"
                  alt="Pacote de salgadinho Doritos na cor vermelha com logo da marca e tamanho de 276gr"
                />
                <div className="card-body">
                  <h6 className="card-title">Salgadinho Doritos 276gr</h6>
                  <p>R$ 7,95</p>
                  <div id="counter">
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onClick={handleClickDecrement}
                    >
                      -
                    </button>
                    <span id="counterprod13">{counter}</span>
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onClick={handleClickIncrement}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop13('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div className="card text-center m-3 p-1" id="card-text-center">
                <img
                  src={engov_after}
                  className="card-img-top"
                  alt="imagem de três garrafas de Engov, na cor laranja, com a marca e instrussões impressos no rótulos, tamanho 250ml cada"
                />
                <div className="card-body">
                  <h6 className="card-title">Engov After Tangerina 250ml</h6>
                  <p>R$ 6,99</p>
                  <div id="counter">
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onClick={handleClickDecrement}
                    >
                      -
                    </button>
                    <span id="counterprod14">{counter}</span>
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onClick={handleClickIncrement}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop14('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div className="card text-center m-3 p-1" id="card-text-center">
                <img
                  src={bis}
                  className="card-img-top"
                  alt="Imagem de um pacote de chocholate Bis Branco, com embalagem na cor azul e branco com marca impressa, tamanho 126gr"
                />
                <div className="card-body">
                  <h6 className="card-title">Chocolate Bis Branco 126gr</h6>
                  <p>R$ 5,29</p>
                  <div id="counter">
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onClick={handleClickDecrement}
                    >
                      -
                    </button>
                    <span id="counterprod15">{counter}</span>
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onClick={handleClickIncrement}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop15('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div className="card text-center m-3 p-1" id="card-text-center">
                <img
                  src={gelo}
                  className="card-img-top"
                  alt="Pacote plástico de Gelo, transparente, com logo e marca impressas na embalagem, tamanho 800gr"
                />
                <div className="card-body">
                  <h6 className="card-title">Saco de Gelo 800gr</h6>
                  <p>R$ 7,95</p>
                  <div id="counter">
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onClick={handleClickDecrement}
                    >
                      -
                    </button>
                    <span id="counterprod16">{counter}</span>
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onClick={handleClickIncrement}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop16('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div className="card text-center m-3 p-1" id="card-text-center">
                <img
                  src={isqueiro}
                  className="card-img-top"
                  alt="Imagem de um isqueiro vermelho da marca Bic"
                />
                <div className="card-body">
                  <h6 className="card-title">Isqueiro Bic Grande Vermelho</h6>
                  <p>R$ 4,50</p>
                  <div id="counter">
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onClick={handleClickDecrement}
                    >
                      -
                    </button>
                    <span id="counterprod17">{counter}</span>
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onClick={handleClickIncrement}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop17('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div className="card text-center m-3 p-1" id="card-text-center">
                <img
                  src={baralho}
                  className="card-img-top"
                  alt="Imagem de um baralho branco e vermelho da marca Copag com 54 cartas"
                />
                <div className="card-body">
                  <h6 className="card-title">Baralho Copag com 54 cartas</h6>
                  <p>R$ 14,95</p>
                  <div id="counter">
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="subtrair"
                      onClick={handleClickDecrement}
                    >
                      -
                    </button>
                    <span id="counterprod18">{counter}</span>
                    <button
                      className="btn btn-warning btn-sm btn-custm m-1"
                      name="adicionar"
                      onClick={handleClickIncrement}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning p-1"
                      id="button1"
                      onclick="incrementShop18('shopcar')"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
