import React from "react";
import * as S from "./style.jsx";

function InputLogin(e) {
  return (
    <S.InputPopup placeholder={e.placeholder} type = {e.type}></S.InputPopup>
  );
}

export default InputLogin;