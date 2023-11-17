import styled from "styled-components";

export const InputPopup = styled.input`
  display: flex;
  width: 100%;
  height: 40%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: 15vw;
  text-align: left;
  padding-left: 20%;
  border: 0.5vw solid #EBEBEB;
  &:focus {
    border: 0.5vw solid #EC1C24;
  }

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 5vw;

  &::placeholder {
    color: #EBEBEB;
    font-size: 5vw;
  }

`;
