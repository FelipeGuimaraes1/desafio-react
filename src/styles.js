import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
`;

export const ImageLogo = styled.img`
  width: 342px;
  height: 340px;
  margin-top: 15px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
`;

export const P = styled.p`
  color: #eee;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  margin-left: 5px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding-left: 15px;
  margin-top: 2px;
  margin-bottom: 40px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  font-size: 18px;
`;

export const Button = styled.button`
  width: 342px;
  height: 58px;
  background: #d93856;
  border-radius: 14px;
  color: #fff;
  font-size: 17px;
  font-weight: 900;
  border: none;
  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const Order = styled.li`
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 342px;
  height: auto;
  padding: 15px;
  margin-top: 2px;
  margin-bottom: 40px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  font-size: 18px;

  .first-par {
    display: flex;
    flex-direction: column;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }

    &:active {
      opacity: 0.3;
    }
  }
`;
