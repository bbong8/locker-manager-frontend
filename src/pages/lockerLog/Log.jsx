import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LockerLog from "../../components/lockerLog/LockerLog.jsx";
import axios from "../../api/axios.js";
import { Element } from "react-scroll";
import * as S from "./style.jsx";

function Log() {
  const navigate = useNavigate();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if(!localStorage.getItem('token')){
      alert("비정상적인 접근입니다.");
      navigate('/auth');
    }
  },[]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async() => {
      try{
        const response = await axios.get('/records', {
          headers: {'Authorization': `Bearer ${token}`}
        });
        setLogs(response.data.response);
      }catch(error){
        console.error(error);
      }
    };

    fetchData();
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