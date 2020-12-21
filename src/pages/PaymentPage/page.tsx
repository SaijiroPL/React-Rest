import React from 'react'
import asset from 'const/asset';
import { useHistory } from "react-router-dom";
import cn from 'classnames';

export default function() {
  const history = useHistory();
  
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="top-title">
        <span>支払処理</span>
      </div>
      <div className={cn('email-confirm-form', 'mb-1')}>
        <div className={cn('email-form-title', 'fs-25', 'mb-1', 'fw-bold')}>
          ログイン
        </div>
        <div className="mb-1">
          <label className="form-label">ユーザーID</label>
          <input type="text"/> <br/>
        </div>
        <div className="mb-1">
          <label className="form-label">パスワード</label>
          <input type="text"/> <br/>
        </div>
        <button className="btn-green" style={{ float: 'right' }} onClick={() => history.replace('/')}>ログイン後支払いへ</button>
      </div>
      <div className="mb-2">
        <a onClick={() => history.push(`/forgot?back=payment`)}>パスワードを忘れだ場合<span className="fs-15">⇨</span></a>
      </div>
      <button className={cn('btn-green', 'mt-2')} onClick={() => history.replace('/register')}>未登録の場合</button>
    </div>
  )
}