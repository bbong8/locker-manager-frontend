import React, {useContext} from "react";
import * as S from "./style.jsx";
import ButtonPopup from "../../button/buttonPopup/ButtonPopup.jsx";
import { FirstLoginContext } from "../../../pages/main/Main.jsx";

function PopupAgree(){
  const {setIsFirstLogin, handleCheckbox} = useContext(FirstLoginContext);

  const handleModal = () => {
    setIsFirstLogin(false);
  };
  
  return (
    <S.Wrapper>

      <S.textWrapper>
        이메일 푸시 알림 수신 동의시 여러분의 <br></br>사물함 정보에 대한 알림을 받을 수 있습니다.
      </S.textWrapper>

      <S.ButtonWrapper>
        <ButtonPopup 
          title={"동의"} 
          buttonRole={"important"}
          onClick = {handleCheckbox}
        >
        </ButtonPopup>
        <ButtonPopup 
          title={"다음에"} 
          buttonRole={"normal"} 
          onClick = {handleModal}
        >
        </ButtonPopup>
      </S.ButtonWrapper>
    
    </S.Wrapper>
  );
}

export default PopupAgree;