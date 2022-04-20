import React from 'react';

import { Container, Content, Nav } from './styles';
import Logo from '../../assets/logo-gh.png';

function Header() {
  return (
    <Container>
      <Content>
      <img src={Logo} alt="" />
      <Nav>
        <a href="/">Home</a>
        <a href="/">Produtos</a>
        <a href="/">Categorias</a>
      </Nav>
      </Content>
    </Container>
  );
}


export { Header }