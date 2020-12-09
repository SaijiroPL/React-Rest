import React from 'react'
import asset from 'const/asset';

export default function() {
  return (
    <div>
      <div className="top-title">
        <span>メールアドレス登録確認メール送信</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: 10 }}>
          <label style={{ marginRight: 20 }}>メールアドレス</label>
          <input type="text"/> <br/>
        </div>
        <button className="btn-green">メール送信</button>
      </div>
    </div>
  )
}