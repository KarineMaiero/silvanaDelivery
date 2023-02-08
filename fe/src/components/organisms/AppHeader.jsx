import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/logo.png";
import user from "../../images/user.svg";
import shoppingcart from "../../images/shopping-cart.svg";

export default function AppHeader() {
  return (
    <div
      id="header"
      className="navbar fixed-top navbar-expand-lg bg-dark row justify-content-md-center"
    >
      <div className="container-fluid  navbar-collapse collapse">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="logo-silvana-drinks" width="150" />
        </NavLink>
        <ul className="nav justify-content-start">
          <li className="nav-item" id="nav-bar-itens">
            <NavLink to="/" className="navbar-brand">
              <h4>INICIO</h4>
            </NavLink>
          </li>
          <li className="nav-item" id="nav-bar-itens">
            <NavLink to="/recipes" className="navbar-brand">
              <h4>RECEITAS</h4>
            </NavLink>
          </li>
        </ul>
        <form class="d-flex col-md-4" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Quero comprar..."
            aria-label="Search"
          />
          <button class="btn btn-outline-light" type="submit">
            ⌕
          </button>
        </form>
        <div className="nav justify-content-end col col-lg-2">
          <NavLink to="/login" className="navbar-brand">
            <img src={user} alt="Usuário" width="30" />
          </NavLink>
          <div>
            <NavLink to="/shoppingcart" className="navbar-brand">
              <img src={shoppingcart} alt="Carrinho de compras" width="30" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
