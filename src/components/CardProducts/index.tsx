import React from 'react';

import { Container,ImageContainer, Info } from './styles';

type CategoryProps = {
  id: string;
  name: string;
  description: string;
};

type ProductProps = {
  name: string;
  price: string;
  category: CategoryProps;
};

function CardProducts (product: ProductProps) {
  return (
    <Container>
      <span>{product.category.name}</span>
      <ImageContainer>
        <img src="https://a0.vnda.com.br/950x/yuool/2021/09/19/10_9_4_429_yuoolfitnero1.png?v=1632057254" alt="Tênis preto esportivo" />
      </ImageContainer>
      <Info>
        <strong>{product.name}</strong>
        <span>R$ {product.price}</span>
      </Info>
    </Container>
  );
}

export { CardProducts };