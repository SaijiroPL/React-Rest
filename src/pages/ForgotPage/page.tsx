import React, { useState } from 'react'
import asset from 'const/asset';
import { useHistory } from "react-router-dom"
import cn from 'classnames';
import queryString from 'query-string';

export default function() {
  const history = useHistory();
  const [backCaption, setBackCaption] = useState<string>('ログイン画面に戻る↩️');
  React.useEffect(() => {
    const key = queryString.parse(window.location.search).back?.toString();
    if (key === 'payment') {
      setBackCaption('⽀払処理画⾯に戻る↩️');
    }
  }, []);
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
          <label className={cn("form-label", "fs-14")}>メールアドレス</label>
          <input type="text" placeholder="example@email.com"/> <br/>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className={cn("form-label", "fs-14")}>生年月日</label>
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
        <div style={{ textAlign: 'right' }}>
          <button className="btn-green">メール送信</button>
          <br/><br/>
            <button className="btn-green" onClick={() => history.goBack()}>{backCaption}</button>
        </div>
      </div>
    </div>
  )
}