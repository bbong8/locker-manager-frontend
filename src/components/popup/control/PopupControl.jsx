import React, {useContext, useState}from "react";
import PopupAgree from "../popupAgree/PopupAgree.jsx";
import PopupEmail from "../popupEmail/PopupEmail.jsx";
import PopupEmailAuth from "../popupEmail/PopupEmailAuth.jsx";
import PopupPassword from "../popupPassword/PopupPassword.jsx";
import PopupBlock from "../popupBlockChain/PopupBlock.jsx";


const ContentControl = (e) => {

  switch(e.type){
    case 'emailAgree':
      return <PopupAgree />;

    case 'email':
      return <PopupEmail />;
      
    case 'emailAuth':
      return <PopupEmailAuth />;

    case 'passwordChange':
      return <PopupPassword />;

    case 'blockChain':
      return <PopupBlock log={e.log}/>;

    default:
      return null;
  }
};

const TitleControl = (e) => {

  switch(e.type){
    case 'emailAgree':
      return '🔔 이메일 푸시 알림 동의 🔔';

    case 'email':
      return '📨 이메일 정보 수집 📨';

    case 'emailAuth':
      return '📨 이메일 정보 수집 📨';

    case 'passwordChange':
      return '🔑 비밀번호 변경 🔑';

    case 'blockChain':
      return '⛓️ 블록체인 지갑 확인 ⛓️';

    default:
      return null;
  }
};

export {ContentControl, TitleControl};
