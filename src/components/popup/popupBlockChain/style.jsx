import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 90%;
  border-radius: 8vw;
  border: 0.5vw solid #EBEBEB;
  padding : 3vw 0 3vw 0;
`;

export const textWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const blockWalletTitle = styled.h2`
  font-size: 5vw;
  font-weight: 700;
  color: #000000;
  margin: 0;

`;

export const blockWalletContent = styled.p`
  width: 100%;
  height: 100%;
  text-align: center;
  color: #EC1C24;
  font-size: 3vw;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 35%;
  margin-top: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

