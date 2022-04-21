import { Container } from './styles';

type CardProps = {
  title: string;  
}

function CardCategories({ title }:CardProps) {
  return (
    <Container>
      <h1>
        {title}  
      </h1>
    </Container>
  );
}

export { CardCategories };