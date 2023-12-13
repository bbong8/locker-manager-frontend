import React, {} from "react";
import * as S from "./style.jsx";

function LockerLog(e) {

  const date = new Date(e.time+'Z');
  const formattedDate = date.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

  return(
    <S.Wrapper 
      boxType = {e.type}
      >
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
        {formattedDate}
      </S.Time>
    </S.Wrapper>

  );
}

export default LockerLog;