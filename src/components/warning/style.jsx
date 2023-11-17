import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 7vw;
  margin:0;
  padding :0;

  border-bottom: 2px solid #000;

  border-radius: 10vw;
`;

export const Message = styled.p`
  width: 100%;
  height: 100%;

  font-family: "Noto Sans KR", sans-serif;
  color: #000;
  font-size: 4vw;
  font-weight: 700;
  margin-left: 10%;
  text-align: left;
`;