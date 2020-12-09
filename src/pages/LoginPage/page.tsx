import React from 'react'
import { useHistory } from "react-router-dom"
import asset from 'const/asset';
import cn from 'classnames';

export default function() {
  const history = useHistory();
  function onLogin() {
    history.push(`/search/result`);
  }
  function onForget() {
    history.push(`/forgot`);
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="top-title">
        <span>ログイン</span>
      </div>
      <div className={cn('email-confirm-form', 'mb-1')}>
        <div className={cn('email-form-title', 'fs-25', 'mb-1', 'fw-bold')}>
          ログイン
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">ユーザーID</label>
          <input type="text"/> <br/>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">パスワード</label>
          <input type="text"/> <br/>
        </div>
        <button className="btn-green" style={{ float: 'right' }} onClick={() => onLogin()}>ログイン</button>
      </div>
      <div className="mb-2">
        <a onClick={() => onForget()} >パスワードを忘れだ場合<span className="fs-15">⇨</span></a>
      </div>
    </div>
  )
}