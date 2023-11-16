import styled from "styled-components";

export const PopupWrapper = styled.div`
  padding: 0 5vw 0 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 77%;
  height: 40%;
  background-color: #FFFFFF;
  box-shadow: 0px 4vw 4vw 0px rgba(0, 0, 0, 0.25);

  border-radius: 10vw;
`

export const PopupTitle = styled.h1`
  width: 100%;
  height: 10%;
  padding : 0;
  margin-bottom : 4%;
  margin-top : 4%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  
  text-align: center;
  font-size: 6vw;
  color: #000000;

`

export const PopupContentWrapper = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
