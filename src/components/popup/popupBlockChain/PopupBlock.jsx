import React, {useContext} from "react";
import * as S from "./style.jsx";
import ButtonPopup from "../../button/buttonPopup/ButtonPopup.jsx";
import { CheckChain } from "../../../pages/lockerLog/Log.jsx";


function PopupBlock(e){
  const { setModalVisible } = useContext(CheckChain);
  const date = new Date(e.log.created_at+'Z');
  const formattedDate = date.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

  const handleModal = () => {
    setModalVisible(false);
  };


  return(
    <S.Wrapper>

      <S.textWrapper>
        <S.blockWalletTitle>{formattedDate}</S.blockWalletTitle>
      </S.textWrapper>

      <S.textWrapper>
        <S.blockWalletTitle>블록체인 주소</S.blockWalletTitle>
        <S.blockWalletContent>{e.log.address}</S.blockWalletContent>
      </S.textWrapper>

      <S.ButtonWrapper>
        <ButtonPopup 
          title={"닫기"} 
          buttonRole={"important"} 
          onClick={handleModal}
        >
        </ButtonPopup>
      </S.ButtonWrapper>
      
    </S.Wrapper>
  )
}

export default PopupBlock;