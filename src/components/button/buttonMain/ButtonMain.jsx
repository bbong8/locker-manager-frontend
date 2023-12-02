import React from "react";
import { useNavigate } from "react-router";
import * as S from "./style.jsx";

function ButtonPopup({ title, buttonType, onClick}) {

  const navigate = useNavigate();

  return (
    <S.ButtonPopup buttonType = {buttonType} onClick={() => { navigate(onClick)}}>
      <S.ButtonPopupText buttonType = {buttonType}>{title}</S.ButtonPopupText>
    </S.ButtonPopup>

  );
}

export default ButtonPopup;