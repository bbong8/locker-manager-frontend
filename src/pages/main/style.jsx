import {styled} from "styled-components";

export const Wrapper = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  
  margin-top : 5%;
  margin-left : 5%;
  margin-right : 5%;

`;

export const BlurWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content : center;
  align-items : center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
`

export const TitleWrapper = styled.div`
  width : 100%;
  height : 25%;
  display : flex;
  flex-direction : row;

  justify-content : flex-start;
  align-items : flex-start;
  margin-top : 5%;
`;

export const Title = styled.h1`
  text-align : left;
  font-size : 3.2rem;
  font-weight : bold;
  color : #000000;

  margin-right : 1%;
`;


export const ContentWrapper = styled.div`
  width : 100%;
  height : 40%;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  align-items : center;
  
`;

export const NavWrapper = styled.div`
  width : 100%;
  height : 25%;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`;


export const ButtonWrapper = styled.div`
  margin-top : 22%;
  width : 100%;
  height : 7%;
  display : flex;
  flex-direction : column;
  justify-content : flex-end;
  align-items : center;
`;

export const Button = styled.button`
  display: flex;
  width: 43%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #EC1C24;
  box-shadow: 0px 1.5vw 1.5vw 0px rgba(0, 0, 0, 0.25);
  border-radius: 5vw;
  border: none;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }

`

export const ButtonText = styled.h1`
  font-family: Noto Sans KR;
  color: #FFFFFF;
  font-style: normal;
  font-weight: bold;
  font-size: 4vw;
`