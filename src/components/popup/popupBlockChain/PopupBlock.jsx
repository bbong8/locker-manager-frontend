import React from "react";
import * as S from "./style.jsx";
import ButtonPopup from "../../button/ButtonPopup.jsx";

function PopupBlock(){
  return(
    <S.Wrapper>

      <S.textWrapper>
        <S.blockWalletTitle>2023년 11월 15일 10시 30분 25초</S.blockWalletTitle>
      </S.textWrapper>

      <S.textWrapper>
        <S.blockWalletTitle>블록체인 주소</S.blockWalletTitle>
        <S.blockWalletContent>0x1234567890123456789012345678901234567890</S.blockWalletContent>
      </S.textWrapper>

      <S.ButtonWrapper>
        <ButtonPopup 
          title={"닫기"} 
          buttonType={"important"} 
        >
        </ButtonPopup>
      </S.ButtonWrapper>
      
    </S.Wrapper>
  )
}

export default PopupBlock;