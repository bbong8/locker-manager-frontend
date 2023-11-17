import React from "react";
import * as S from "./style.jsx";

function ButtonPopup({ title, buttonType }) {
  return (
    <S.ButtonPopup buttonType = {buttonType}>
      <S.ButtonPopupText buttonType = {buttonType}>{title}</S.ButtonPopupText>
    </S.ButtonPopup>

  );
}

export default ButtonPopup;