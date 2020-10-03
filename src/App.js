import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import logoImage from "./images/logo.png";
import "./App.css";

function App() {
  return (
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
            <NavDropdown.Item href="#action/3.1">Importações</NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.2">
              Naturais e Orgânicos
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.3">
              Sucos Integrais
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.4">Alimentos</NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.5">
              Vinhos e Espumantes
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/facapedido">
            <strong>Faça seu pedido</strong>
          </Nav.Link>
          <Nav.Link href="#deets2">
            <strong>Contato</strong>
          </Nav.Link>
          <Nav.Link href="#deets3">
            <strong>Sobre a Empresa</strong>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#deets4">
            <strong>Parceiros</strong>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
