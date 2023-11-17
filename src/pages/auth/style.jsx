import {styled} from "styled-components";

export const Wrapper = styled.div`
  postion: relative;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 5%;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;  
  font-size: 8vw;  
  color: #000000; 
`;

export const ContentWrapper = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50%;
`;
export const InputWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const UtilWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

`;

export const UtilSaveWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2%;
  justify-content: flex-start;
`;

export const UtilSave = styled.input`
  width: 5vw;
  height: 5vw;
  margin-right: 2vw;
  color: #7D7D7D;
  style
`;

export const UtilSaveText = styled.label`
  margin-top: 1%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 4.5vw;
  color: #7D7D7D;
`;

export const UtilFindWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2%;
  justify-content: flex-end;
`;

export const UtilFind = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 4.5vw;
  color: #7D7D7D;
`

export const WarningWrapper = styled.div`
  width: 85%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ButtonWrapper = styled.div`
  margin-top: 3%;
  width: 100%;
  height: 16%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;