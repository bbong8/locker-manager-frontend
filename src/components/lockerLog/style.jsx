import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: space-between;

  border-radius: 5vw;

  box-shadow: ${props =>{
    switch (props.boxType){
      case "open":
        return "0px 1.5vw 1.5vw 0px rgba(114, 13, 17, 0.30)";
      case "close":
        return "0px 1.5vw 1.5vw 0px rgba(0, 0, 0, 0.25)";
    }
  }};

  &:active{
    background-color: #F8F8F8;
  };
`;

export const OpenClose = styled.p`
  display: flex;
  width: 30%;
  padding-left: 5%;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  font-size: 5vw;

  color: ${props =>{
    switch (props.boxType){
      case "open":
        return "#FFA1AA";
      case "close":
        return "#000000";
    }
  }};
`;

export const Time = styled.p`
  display: flex;
  width: 70%;
  padding-right: 5%;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  font-size: 5vw;
`;