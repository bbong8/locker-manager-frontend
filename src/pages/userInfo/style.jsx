import {styled} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  justify-content: center;

  align-items: center;
`;

export const InvalidInfoWrapper = styled.div`
  width: 86%;
  height: 45%;
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;

  margin-top: 5%;

`;

export const ValidInfoWrapper = styled.div`
  width: 86%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 25%;

  margin-bottom: 7%;
  
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.h2`
  width: 100%;
  height: 30%;
  
  margin-left: 2%;
  font-size: 4vw;
`;

export const InfoInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 66%;
`;

export const InvalidInfoInput = styled.input`
  width: 100%;
  height: 100%;

  border-radius: 9vw;

  font-size: 4vw;
  padding-left: 10%;

  border: 0.5vw solid #EBEBEB;
  background: #FAFAFA;

  color: #red;

`;

export const validInfoInput = styled.input`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  font-size: 4vw;
  
  padding-left: 10%;

  border-radius: 7vw;
`;

export const changeButton = styled.button`
  width: 15%;
  border-radius: 4vw;

  border: 0.2vw solid #EC1C24;

  background-color: #FFFFFF;
  color : #000;
  font-size: 3vw;
  font-weight: bold;


  &:active{
    background-color: #EC1C24;
    color : #FFFFFF;
    font-size: 3vw;
    font-weight: bold;
    border: 0.2vw solid #000000;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding-left: 5%;

  width: 100%;
  height: 5%;
`;

export const Checkbox = styled.input`
  width: 10%;
  height: 80%;
  display: flex;
  flex-direction: row;

  margin : 0

`;

export const CheckboxText = styled.label`
  width: 80%;
  height: 95%;

  display: flex;
  flex-direction: row;

  align-items: flex-end;


  font-size: 3.5vw;
`;