import { useContext, useEffect, useState } from "react";
import {CardProducts} from "../../components/CardProducts";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/api";
import { Container, Content, ProductsContainer } from "./styles";
import { CategoriesContext } from "../../contexts/categoriesContext";

type CategoryProps = {
  id: string;
  name: string;
  description: string;
};

type ProductProps = {
  id: string;
  name: string;
  price: string;
  category: CategoryProps;
};


export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<ProductProps[]>([]);
  const { categorySelected } = useContext(CategoriesContext);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
      setProductsFiltered(response.data);	
    }
    loadProducts();
  }, []);

  useEffect(() => {
    if (categorySelected.id) {
      setProductsFiltered(products.filter(product => product.category.id === categorySelected.id));
    }
  }, [categorySelected, products]);


  return (
    <Container>
      <Header />
      <Navbar />
      <Content>
        <h1>Produtos</h1>
        <span>{categorySelected && categorySelected.name}</span>
        <hr />
        <ProductsContainer>
          {productsFiltered.map(product => (
            <CardProducts key={product.id} {...product} />
          ))}
        </ProductsContainer>
      </Content>
    </Container>
  );
}