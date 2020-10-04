import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./routes/index";

import logoImage from "./images/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoImage}
            alt="Flávio Costa Representações"
            style={{ width: 300, height: 40, marginTop: -7 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavDropdown
              title={<strong>Produtos</strong>}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/importados">
                Importações
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/naturais">
                Naturais e Orgânicos
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/sucos">
                Sucos Integrais
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/alimentos">
                Alimentos
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/vinhos">
                Vinhos e Espumantes
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/pedidos">
              <strong>Faça seu pedido</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/contato">
              <strong>Contato</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/sobreEmpresa">
              <strong>Sobre a Empresa</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/parceiros">
              <strong>Parceiros</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes />
    </>
  );
}

export default App;
