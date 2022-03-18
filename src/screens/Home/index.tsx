import { Container, Content, Header, Title } from "./styles";
import coverImg from "../../assets/cover.png";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

export default function Home() {
  return (
    <Container>
      <Header source={coverImg}>
        <Input placeholder="Pesquisar..." />
      </Header>
      <Content>
        <Card />
      </Content>
    </Container>
  );
}
