import {styled} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  justify-content: center;

  align-items: center;
`;

export const WarningWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10%;

  margin-top: 5%;
  margin-bottom: 5%
`;

export const LockerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 35%;
`;

export const LockerCardWrapper = styled.div`
  padding: 0 5vw 0 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 77%;
  height: 100%;
  background-color: #FFFFFF;
  box-shadow: 0px 4vw 4vw 0px rgba(0, 0, 0, 0.25);

  padding: 2vw 5vw 3vw 5vw;

  border-radius: 10vw;
`;

export const LockerInfoTitle = styled.h1`
  width: 100%;
  height: 8%;
  padding : 0;
  margin-bottom : 2%;
  margin-top : 4%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  
  text-align: center;
  font-size: 6vw;
  color: #000000;
`;

export const LockerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 2%;
  border-radius: 10vw;
  border: 0.5vw solid #EC1C24;
`;

export const LockerNumber = styled.h2`
  margin-top: 8%;
  margin-bottom: 2%;
  text-align: center;
  width: 100%;
  height: 15%;
  font-size: 4.2vw
`;

export const LockerLocation = styled.h2`
  margin-top: 2%;
  margin-bottom: 2%;
  text-align: center;
  width: 100%;
  height: 15%;
  font-size: 4.2vw
`;

export const LockerPassword = styled.h2`
  margin-top: 2%;
  margin-bottom: 2%;
  text-align: center;
  width: 100%;
  height: 15%;
  font-size: 4.2vw
`;

export const PasswordButton = styled.button`
  width: 60%;
  height: 18%;
  margin-bottom: 2%;
  background-color : #EC1C24;

  border: none;
  border-radius: 10vw;

  color: #FFFFFF;
  font-size: 4.2vw;
  font-weight: bold;

  box-shadow: 0px 2vw 2vw 0px rgba(236, 30, 36, 0.25);

  &:hover {
    transform: scale(0.9);
  }

`;

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 50%;
`;

export const ReportAcceptWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  width: 90%;
  height: 10%;
  justify-content: flex-start;

  margin-bottom: 2%;
`;

export const ReportCheckbox = styled.input`
  width: 5vw;
  height: 5vw;
  margin-right: 2vw;
  color: #7D7D7D;
`;

export const ReportCheckboxText = styled.label`
  margin-top: 1%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 3vw;
  color: #7D7D7D;
`;

export const ReportButton = styled.button`
  margin-top: 2%;
  width: 100%;
  height: 15%;

  background-color : #EC1C24;
  border: none;
  border-radius: 5vw;

  margin-bottom: 2%;

  color: #FFFFFF;
  font-size: 4.2vw;
  font-weight: bold;

  box-shadow: 0px 2vw 2vw 0px rgba(236, 30, 36, 0.25);

  &:hover {
    transform: scale(0.9);
  }
`;