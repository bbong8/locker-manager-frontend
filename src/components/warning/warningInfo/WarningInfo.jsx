import React from "react";
import * as S from "./style.jsx";

function WarningInfo(e){

  return(
    <S.Wrapper>
      <S.Message color="#000" style={{marginRight : "1vw"}}>
        ⚠️{e.message} 정보 변경으로 인한
      </S.Message>
      <S.Message color="#F00">
        불이익
      </S.Message>
      <S.Message color="#000">
        은 책임지지 않습니다
      </S.Message>
    </S.Wrapper>
  )

}

export default WarningInfo;