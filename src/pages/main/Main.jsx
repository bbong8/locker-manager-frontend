import React, {useContext, useEffect} from "react";
import * as S from "./style.jsx";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/loginHook.jsx";
import { UserContext } from "../../context/context.jsx";
import ButtonMain from "../../components/button/buttonMain/ButtonMain.jsx";

function Main(){

  const navigate = useNavigate();
  const {user} = useContext(UserContext);
  const {logout} = useAuth();

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/auth');
    }
    if(user.name === undefined){
      logout();
      navigate('/auth');
    }
  },[]);

  return(
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>{user.name}({user.school_number})</S.Title>
        <S.Title style={{color : "#FF6363"}}>안녕하세요!</S.Title>
      </S.TitleWrapper>

      <S.ContentWrapper>

        <S.NavWrapper>
          <ButtonMain
            title="개인정보"
            onClick={"/user"}
            />
        </S.NavWrapper>

        <S.NavWrapper>
          <ButtonMain 
            title="사물함 개폐 로그 조회"
            onClick={"/log"}
            />
        </S.NavWrapper>

        <S.NavWrapper>
          <ButtonMain 
            title="사물함 관리"
            onClick={"/locker"}
            />
        </S.NavWrapper>
        
      </S.ContentWrapper>

      <S.ButtonWrapper>
        <S.Button
          onClick={() => {
            alert("로그아웃 되었습니다.")
            navigate("/auth") 
            logout() 
          }
          }
        >
          <S.ButtonText>로그아웃</S.ButtonText>
        </S.Button>
      </S.ButtonWrapper>

    </S.Wrapper>
  );
}

export default Main;