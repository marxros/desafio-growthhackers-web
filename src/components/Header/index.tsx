import { Container, Content } from './styles';
import Logo from '../../assets/logo-gh.png';

function Header() {
  return (
    <Container>
      <Content>
      <img src={Logo} alt="" />
      </Content>
    </Container>
  );
}


export { Header }