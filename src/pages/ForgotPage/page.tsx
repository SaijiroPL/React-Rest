import React from 'react'
import asset from 'const/asset';
import cn from 'classnames';

export default function() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="top-title">
        <span>IDPASSレスキュー</span>
      </div>
      <div className={cn('email-confirm-form', 'mb-1')}>
        <div className={cn('email-form-title', 'fs-20', 'mb-1')}>
          ID不明の場合
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">メールアドレス</label>
          <input type="text"/> <br/>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">生年月日</label>
          <input type="text"/> <br/>
        </div>
        <button className="btn-green" style={{ float: 'right' }}>メール送信</button>
      </div>
      <div className={cn('email-confirm-form', 'mb-1')}>
        <div className={cn('email-form-title', 'fs-20', 'mb-1')}>
          PASS不明の場合
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
    </div>
  )
}