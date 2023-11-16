import styled from "styled-components";

export const ButtonPopup = styled.button`
  display: flex;
  width: 43%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props =>{
    switch (props.buttonType){
      case "important":
        return "#EC1C24";
      case "normal":
        return "#FFFFFF";
      default:
        return "#FFFFFF";
    }
  }
  };
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5vw;
  border: none;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }

`

export const ButtonPopupText = styled.h1`
  font-family: Noto Sans KR;
  color: ${props =>{
    switch(props.buttonType){
      case "important":
        return "#FFFFFF";
      case "normal":
        return "#000000";
      default:
        return "#000000";
    }
  }
  };
  font-style: normal;
  font-weight: bold;
  font-size: 4vw;
`