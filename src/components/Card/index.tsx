import React from "react";
import { Container, Image, Title, Foundation } from "./styles";
import unitedImg from "../../assets/united.png";

export function Card() {
  return (
    <Container animation="shake" delay={1000}>
      <Image
        source={unitedImg}
        resizeMode="contain"
        animation="pulse"
        delay={100}
      />
      <Title>Man. United</Title>
      <Foundation>1878</Foundation>
    </Container>
  );
}
