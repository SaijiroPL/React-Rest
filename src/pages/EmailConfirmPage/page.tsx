import React from 'react'
import asset from 'const/asset';
import { useHistory } from "react-router-dom"

export default function() {
  const history = useHistory();
  return (
    <div>
      <div className="top-title">
        <span>メールアドレス登録確認メール送信</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: 10 }}>
          <label style={{ marginRight: 20 }}>メールアドレス</label>
          <input type="text" placeholder="example@email.com"/> <br/>
        </div>
        <button className="btn-green">メール送信</button>
      </div>
      <div style={{ position: 'absolute', bottom: '6em', right: '2em' }}>
        <button className="btn-green" onClick={() => history.replace('/login')}>ログイン画面に戻る↩️</button>
      </div>
    </div>
  )
}