import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLoading from "../../hooks/loadingHook.jsx";
import LockerLog from "../../components/lockerLog/LockerLog.jsx";
import axios from "../../api/axios.js";
import { Element } from "react-scroll";
import Popup from "../../components/popup/Popup.jsx";
import Loading from "../loading/Loading.jsx";
import * as S from "./style.jsx";

export const CheckChain = createContext();

function Log() {
  const isLoading = useLoading(1500);
  const navigate = useNavigate();
  const [logs, setLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("비정상적인 접근입니다.");
      navigate("/auth");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get("/records", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLogs(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedLog) {
      setModalVisible(true);
    }
  }, [selectedLog]);

  if (isLoading) {
    return <Loading />;
  }

  const handleLockerLogClick = (log) => {
    setSelectedLog(log);
    setModalVisible(true);
  };

  return (
    <>
    <CheckChain.Provider value={{setModalVisible}}>
        <S.Wrapper>
          <S.TitleWrapper>
            <S.Title>2023년 2학기 사물함 로그 조회</S.Title>
          </S.TitleWrapper>
          <Element name="content" className="content-wrapper">
            <S.ContentWrapper>
              {logs.slice().reverse().map((log, index) => (
                <S.LogWrapper
                  key={index}
                  onClick={() => handleLockerLogClick(log)}
                >
                  <LockerLog
                    type={log.locker_status.toLowerCase()}
                    time={log.created_at}
                    address={log.address}
                  />
                </S.LogWrapper>
              ))}
            </S.ContentWrapper>
          </Element>
        </S.Wrapper>
        {modalVisible && (
          <S.BlurWrapper>
            <Popup type="blockChain" log={selectedLog} />
          </S.BlurWrapper>
        )}
      </CheckChain.Provider>
    </>
  );
}

export default Log;
