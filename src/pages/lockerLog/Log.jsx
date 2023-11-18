import React from "react";
import * as S from "./style.jsx";
import LockerLog from "../../components/lockerLog/LockerLog.jsx";
import { Element } from "react-scroll";

function Log() {
  return(
    <S.Wrapper>

      <S.TitleWrapper>
        <S.Title>2023년 2학기 사물함 로그 조회</S.Title>
      </S.TitleWrapper>
      <Element name="content" className="content-wrapper">
        <S.ContentWrapper>

          <S.LogWrapper>
            <LockerLog type="close" />
          </S.LogWrapper>

          <S.LogWrapper>
            <LockerLog type="open" />
          </S.LogWrapper>
          

        </S.ContentWrapper>
      </Element>

    </S.Wrapper>
  );
}

export default Log;