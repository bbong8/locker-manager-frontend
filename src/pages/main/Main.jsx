import React, {createContext, useEffect, useState} from "react";
import * as S from "./style.jsx";
import { useNavigate } from "react-router";
import axios from "../../api/axios.js";
import useAuth from "../../hooks/loginHook.jsx";
import Popup from "../../components/popup/Popup.jsx";
import ButtonMain from "../../components/button/buttonMain/ButtonMain.jsx";

export const FirstLoginContext = createContext();

function Main(){

  const [user, setUser] = useState({});
  const [isFirstLogin, setIsFirstLogin] = useState(true);
  const navigate = useNavigate();
  const {logout} = useAuth();

  const handleCheckbox = async() => {
    try{
      const token = localStorage.getItem('token');
      const response = await axios.put('/accounts/push-alarm', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      let data = user;
      setIsFirstLogin(false);
      data.is_push_alarm = response.data.response;
      localStorage.setItem('user', JSON.stringify(data));
      console.log(response);
    }catch(error){
      console.error(error);
    }
  }


  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/auth');
    }
    setUser(JSON.parse(localStorage.getItem('user')));
    let data = JSON.parse(localStorage.getItem('user'))
    setUser(data);
    setIsFirstLogin(data.is_first_login);
  },[]);

  useEffect(() => {
    if (!isFirstLogin) {
      let data = user;
      data.is_first_login = false;
      localStorage.setItem('user', JSON.stringify(data));
      setModalVisible(false);
    }
  }, [isFirstLogin]);

  const [modalVisible, setModalVisible] = useState(true);

  return(
    <>
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
      {isFirstLogin && modalVisible && (
        <FirstLoginContext.Provider value={{isFirstLogin, setIsFirstLogin, handleCheckbox}}>
          <S.BlurWrapper>
            <Popup type="emailAgree"/>
          </S.BlurWrapper>
        </FirstLoginContext.Provider>
      )}
    </>
  );
}

export default Main;