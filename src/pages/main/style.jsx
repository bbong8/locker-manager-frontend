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

