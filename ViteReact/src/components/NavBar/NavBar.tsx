/** @jsxImportSource @emotion/react */
import React from 'react';
import { navbarStyles, Logo, MenuContainer, MenuLink } from '../../styles/Styles';
import logo from '../../assets/logoBajacaliforniadream.webp';

const NavBar: React.FC = () => {
  return (
    <nav css={navbarStyles}>
      <div>
        <Logo src={logo} alt="Logo" />
      </div>
      <MenuContainer>
        <MenuLink href="#apropos">A propos</MenuLink>
        <MenuLink href="#prestations">prestations</MenuLink>
        <MenuLink href="#reserver">réserver</MenuLink>
        <MenuLink href="#contact">contact</MenuLink>
      </MenuContainer>
    </nav>
  );
};

export default NavBar;
