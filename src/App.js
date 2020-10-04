import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./routes/index";

import logoImage from "./images/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <a href="/">
            <img
              src={logoImage}
              alt="Flávio Costa Representações"
              style={{ width: 300, height: 40, marginTop: -7 }}
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavDropdown
              title={<strong>Produtos</strong>}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/importados">
                Importações
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/naturais">
                Naturais e Orgânicos
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/sucos">Sucos Integrais</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/alimentos">Alimentos</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/vinhos">
                Vinhos e Espumantes
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/pedidos">
              <strong>Faça seu pedido</strong>
            </Nav.Link>
            <Nav.Link href="/contato">
              <strong>Contato</strong>
            </Nav.Link>
            <Nav.Link href="/sobreEmpresa">
              <strong>Sobre a Empresa</strong>
            </Nav.Link>
            <Nav.Link href="/parceiros">
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
