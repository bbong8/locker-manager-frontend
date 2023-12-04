import React from "react";
import * as S from "./style.jsx";

function ButtonPopup({ title, buttonRole, onClick }) {
  return (
    <S.ButtonPopup 
      buttonRole = {buttonRole}
      onClick={onClick}
      >
      <S.ButtonPopupText buttonRole = {buttonRole}>{title}</S.ButtonPopupText>
    </S.ButtonPopup>

  );
}

export default ButtonPopup;