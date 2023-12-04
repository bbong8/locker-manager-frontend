import React from "react";
import * as S from "./style.jsx";

function ButtonPopup({ title, buttonRole }) {
  return (
    <S.ButtonPopup buttonRole = {buttonRole}>
      <S.ButtonPopupText buttonRole = {buttonRole}>{title}</S.ButtonPopupText>
    </S.ButtonPopup>

  );
}

export default ButtonPopup;