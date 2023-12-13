import {styled} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: row;
  width: 87%;
  height: 10vh;
  justify-content: flex-start;
  align-items: flex-end;

  border-bottom: 0.2vw solid #EC1C24;

  padding: 1rem;
  padding-bottom: 2rem;
  background-color: #FFFFFF;
`;

export const Title = styled.div`
  display: flex;
  width: auto;
  height: auto;
  text-align: center;

  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  font-size: 5.8vw;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  margin-top: 10vh;
  overflow-y: scroll;
  justify-content: flex-start;
  align-items: center;
`;

export const LogWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 95%;
  height: 8vh;
  margin-bottom: 5%;
`;