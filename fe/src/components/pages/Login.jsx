import React, { Fragment, useState } from "react";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <Fragment>
      <div id="main-login">
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            {/* <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
                color="secondary"
              >
                Entrar
              </MDBTabsLink>
            </MDBTabsItem> */}
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Senha"
                id="form2"
                type="password"
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Esqueceu a senha?</a>
              </div>

              <MDBBtn className="mb-4 w-100" color="dark">
                Entrar
              </MDBBtn>
              <p className="text-center">
                Novo cadastro?{" "}
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab2")}
                  active={justifyActive === "tab2"}
                  color="link"
                >
                  <MDBBtn color="link">Cadastrar</MDBBtn>
                </MDBTabsLink>
              </p>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === "tab2"}>
              <MDBInput
                wrapperClass="mb-4"
                label="Nome completo"
                id="form1"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Usuário"
                id="form1"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Senha"
                id="form1"
                type="password"
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="Eu li e concordo com os termos de uso."
                />
              </div>

              <MDBBtn className="mb-4 w-100" color="dark">
                Criar usuário
              </MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </Fragment>
  );
}
