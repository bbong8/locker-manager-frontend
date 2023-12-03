import React from "react";
import * as S from "./style.jsx";

function InputLogin(e) {
  return (
    <S.InputPopup 
      placeholder={e.placeholder} 
      type = {e.type}
      value = {e.value}
      isWarning = {e.isWarning}
      onChange = {e.onChange}
      ></S.InputPopup>
  );
}

export default InputLogin;