import React from "react";
import { useNavigate } from "react-router";
import * as S from "./style.jsx";

function ButtonPopup({ title, buttonRole, onClick}) {

  const navigate = useNavigate();

  return (
    <S.ButtonPopup buttonRole = {buttonRole} onClick={() => { navigate(onClick)}}>
      <S.ButtonPopupText buttonRole = {buttonRole}>{title}</S.ButtonPopupText>
    </S.ButtonPopup>

  );
}

export default ButtonPopup;