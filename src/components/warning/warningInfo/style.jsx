import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12vw;
  margin:0;
  padding :0;

  border: 0.5vw solid #000;
  border-radius: 2vw;

  background: #EBEBEB;
`;

export const Message = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;

  font-family: "Noto Sans KR", sans-serif;

  color: ${props => props.color};
  font-size: 3.7vw;
  font-weight: 700;

  text-align: center;
`;