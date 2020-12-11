import React from 'react'
import { useHistory } from "react-router-dom"
import asset from 'const/asset';

export default function() {
  const history = useHistory();

  function onCourse() {
    history.push(`/course`);
  }

  function onRegister() {
    history.push(`/register`);
  }

  function onLogin() {
    history.push(`/login`);
  }

  return (
    <div>
      <div className="top-title">
        <span>GNoTS紹介</span>
      </div>
      <div className="linear-horizontal">
        <div style={{ flex: 1 }} />
        <div style={{ flex: 1 }}>
          <div>
            <button className="btn-green" onClick={() => onRegister()}>新規ユーザー登録</button>
          </div>
          <div style={{ marginTop: 10 }}>
            <button className="btn-green" onClick={() => onLogin()}>ログイン</button>
          </div>
          <div style={{ marginTop: 10 }}>
            <button className="btn-green" onClick={() => onCourse()}>コース詳細</button>
          </div>
        </div>
      </div>
      <div className="top-bottom">
        <div className="bottom-title">
          アプリのダウンロード
        </div>
        <div className="qr-container">
          <div style={{ marginRight: 30 }}>
            Android<br/>
            <img src={asset.QRCode} style={{ width: 100, height: 100 }} />
          </div>
          <div>
            iPhone<br/>
            <img src={asset.QRCode} style={{ width: 100, height: 100 }} />
          </div>
        </div>
      </div>
    </div>
  )
}