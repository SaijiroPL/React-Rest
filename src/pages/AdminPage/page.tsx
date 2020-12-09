import React from 'react'
import asset from 'const/asset';
import cn from 'classnames';

export default function() {
  const data = [
    { name: "木村太郎", email: "mailaddress@sample.co.jp", permission: 1 },
    { name: "木村太郎", email: "mailaddress@sample.co.jp", permission: 1 },
    { name: "木村太郎", email: "mailaddress@sample.co.jp", permission: 1 },
    { name: "木村太郎", email: "mailaddress@sample.co.jp", permission: 1 },
  ]
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="top-title">
        <span>管理者画面</span>
      </div>
      <div className={cn('email-confirm-form', 'mb-1')}>
        <div className={cn('email-form-title', 'fs-20', 'mb-1')}>
          招待メール送信
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">メールアドレス</label>
          <input type="text"/> <br/>
        </div>
        <button className="btn-green" style={{ float: 'right' }}>メール送信</button>
      </div>
      <div className={cn('email-confirm-form', 'mb-1')}>
        <div className={cn('email-form-title', 'fs-20', 'mb-1')}>
          ユーザー一覧
        </div>
        {data.map(item => 
          <>
            <div className={cn('form-group', 'mb-1')}>
              <label className="mr-2"><input type="checkbox"/>{item.name}</label>
              <label>{item.email}</label>
            </div>
            <div className={cn('form-group', 'mb-1')}>
              <label className="mr-2"><input type="radio" checked={item.permission === 0}/>閲覧</label>
              <label className="mr-2"><input type="radio" checked={item.permission === 1}/>編集</label>
              <label className="mr-2"><input type="radio" checked={item.permission === 2}/>確定</label>
              <label className="mr-2"><input type="radio" checked={item.permission === 3}/>管理</label>
            </div>
          </>
        )}
      </div>
    </div>
  )
}