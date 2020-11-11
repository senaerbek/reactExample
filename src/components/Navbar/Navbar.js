import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
const logO = ()=> localStorage.removeItem("token");
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="http://www.firat.edu.tr/tr">
          Firat Universitesi
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/persons">Başvurular</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/createperson">Ekle</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Kullanıcı Ekle</NavLink>
            </NavItem>
            <Link to="/login">
              {" "}
              <button className="btn" onClick={logO}>
                Çıkış Yap
              </button>
            </Link>
          </Nav>
          <NavbarText>Yabancı Oğrenci Başvuru Sayfası</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Navi;