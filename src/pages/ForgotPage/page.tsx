import React from 'react'
import asset from 'const/asset';
import { useHistory } from "react-router-dom"
import cn from 'classnames';

export default function() {
  const history = useHistory();
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="top-title">
        <span>IDPASSレスキュー</span>
      </div>
      <div className={cn('email-confirm-form', 'mb-1')}>
        <div className={cn('email-form-title', 'fs-20', 'mb-1')}>
          ID不明の場合
        </div>
        <div className="mb-1" style={{ width: 280, textAlign: 'left' }}>
          ご登録情報を入力してください。 <br/> IDを記載したメールお送りします。
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">メールアドレス</label>
          <input type="text"/> <br/>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">生年月日</label>
          <input type="text" placeholder="yyyy-mm-dd"/> <br/>
        </div>
        <button className="btn-green" style={{ float: 'right' }}>メール送信</button>
      </div>
      <div className={cn('email-confirm-form', 'mb-1')}>
        <div className={cn('email-form-title', 'fs-20', 'mb-1')}>
          PASS不明の場合
        </div>
        <div className="mb-1" style={{ width: 280, textAlign: 'left' }}>
          ご登録の情報を入力してください。 <br/> パスワードを変更するためのリンクを記載したメールをお送りします。
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">ユーザーID</label>
          <input type="text"/> <br/>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">秘密の質問</label>
          <input type="text"/> <br/>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">答え</label>
          <input type="text"/> <br/>
        </div>
        <button className="btn-green" style={{ float: 'right' }}>メール送信</button>
      </div>
      <div style={{ position: 'absolute', bottom: '6em', right: '2em' }}>
        <button className="btn-green" onClick={() => history.goBack()}>ログイン画面に戻る↩️</button>
      </div>
    </div>
  )
}