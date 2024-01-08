import React, { useState, useRef } from "react";
import axios from "axios";
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
  const inputOrder = useRef();
  const inputClient = useRef();

  async function addNewOrder() {
    const data = await axios.post("http//localhost:3000/order", {
      order: inputOrder.current.value,
      clientName: inputClient.current.value,
    });

    console.log(data);

    // setOrders([
    //   ...orders,
    //   {
    //     id: Math.random(),
    //     order: inputOrder.current.value,
    //     client: inputClient.current.value,
    //   },
    // ]);
  }

  function deleteOrder(orderId) {
    const newOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newOrders);
  }

  return (
    <Container>
      <ImageLogo alt="imagem logo" src={BurgerLogo} />
      <H2>Faça seu pedido!</H2>
      <ContainerItems>
        <P>Pedido:</P>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1 X-Salada"></Input>
        <P>Nome do Cliente:</P>
        <Input ref={inputClient} placeholder="Steve Jobs"></Input>
        <Button onClick={addNewOrder}>Novo Pedido</Button>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <div className="first-par">
                <p>{`Pedido: ${order.order}`}</p>
              </div>
              <div className="sec-par">
                <p>{`Cliente: ${order.client}`}</p>
              </div>
              <button onClick={() => deleteOrder(order.id)}>
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
