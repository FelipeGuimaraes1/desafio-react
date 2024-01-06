import React, { useState } from "react";
import BurgerLogo from "./assets/burger-logo.png";
import Trash from "./assets/trash.png";
import {
  Container,
  ImageLogo,
  H2,
  P,
  ContainerItems,
  Input,
  Button,
  Order,
} from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState();
  const [client, setClient] = useState();

  function addNewOrder() {
    setOrders([{ id: Math.random(), order, client }]);
    console.log(client);
  }

  function changeInputOrder(event) {
    setOrder(event.target.value);
  }

  function changeInputClient(event) {
    setClient(event.target.value);
  }

  return (
    <Container>
      <ImageLogo alt="imagem logo" src={BurgerLogo} />
      <H2>Faça seu pedido!</H2>
      <ContainerItems>
        <P>Pedido:</P>
        <Input
          onChange={changeInputOrder}
          placeholder="1 Coca-Cola, 1 X-Salada"
        ></Input>
        <P>Nome do Cliente:</P>
        <Input onChange={changeInputClient} placeholder="Steve Jobs"></Input>
        <Button onClick={addNewOrder}>Novo Pedido</Button>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <p>{`Pedido: ${order.order}`}</p>
              <p>{`Cliente: ${order.clientName}`}</p>
              <button>
                <img src={Trash} alt="lata de lixo" />
              </button>
            </Order>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
};

export default App;
