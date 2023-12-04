import React, {useEffect} from "react";
import useAuth from "../../hooks/loginHook.jsx";
import { useNavigate } from "react-router-dom";
import LockerLog from "../../components/lockerLog/LockerLog.jsx";
import { Element } from "react-scroll";
import * as S from "./style.jsx";

function Log() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!localStorage.getItem('token')){
      alert("비정상적인 접근입니다.");
      navigate('/auth');
    }
  },[]);

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