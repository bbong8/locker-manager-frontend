import styled from "styled-components";

export const PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 77%;
  height: 40%;
  background-color: #FFFFFF;
  box-shadow: 0px 4vw 4vw 0px rgba(0, 0, 0, 0.25);

  border-radius: 25px;
`

export const PopupTitle = styled.h1`
  width: 100%;
  height: 15%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  
  text-align: center;
  font-size: 6vw;
  color: #000000;

`

export const PopupContentWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
  
export const PopupButtonWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`
