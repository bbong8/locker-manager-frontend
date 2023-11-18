import React from "react";
import * as S from "./style.jsx";

function LockerLog(e) {

  const time ={
    year: 2023,
    month: 11,
    day: 18,
    hour: 9,
    minute: 10,
    second: 30
  };

  const formattedTime = (time) => {
    return Object.values(time).map(time => String(time).padStart(2, "0"));
  }

  return(
    <S.Wrapper boxType = {e.type}>
      <S.OpenClose boxType = {e.type}>
        {(() => {
          switch (e.type) {
            case "open":
              return "열림";
            case "close":
              return "닫힘";
            default:
              return "";
          }
        })()}
      </S.OpenClose>

      <S.Time>
        {formattedTime(time).slice(0, 3).join("-")}-{formattedTime(time).slice(3, 6).join(":")}
      </S.Time>
    </S.Wrapper>

  );
}

export default LockerLog;