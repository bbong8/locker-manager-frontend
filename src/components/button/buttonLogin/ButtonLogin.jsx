import React from "react";
import * as S from "./style.jsx";

function ButtonPopup({ title, buttonType, onClick }) {
  return (
    <S.ButtonPopup 
      buttonType = {buttonType}
      onClick={onClick}
      >
      <S.ButtonPopupText buttonType = {buttonType}>{title}</S.ButtonPopupText>
    </S.ButtonPopup>

  );
}

export default ButtonPopup;