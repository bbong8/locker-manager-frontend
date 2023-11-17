import styled, {keyframes} from "styled-components";

const underlineAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
`;

export const Title = styled.h1`
  width: 80%;
  height: 50%;  

  margin-bottom: 0;
  color: #000000;
  font-size: 6vw;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  text-align: center;


`;

export const Underline = styled.div`
  width: 75%;
  height: 0.7vw;
  background-color: #ec1c24;

  margin-bottom: 10%;

  animation: ${underlineAnimation} 2s ease-in-out infinite;
  transform-origin: 0% 50%;
`;


export const LogoWrapper = styled.div`
  width: 60vw;
  height: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;