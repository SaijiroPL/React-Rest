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
    <div style={{ textAlign: 'center' }} className='green-back'>
      <style>{'body { background-color: #A5B8BC; } .page-container{ background-color: #A5B8BC; }'}</style>
      <div className="top-title" style={{ fontSize: 30 }}>
        <span>メール問合せフォーム</span>
      </div>
      <div className={cn('email-confirm-form', 'mb-1')}>
        <div className={cn('email-form-title', 'mb-2')}>
        以下のフォームに必要事項を記載の上<br/>「確認」ボタンを押してください<br/>*のついている項目は必須項目です
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label" aria-required>*お名前</label>
          <input type="text"/> <br/>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label" aria-required>*ご連絡先</label>
          <input type="text"/> <br/>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">メールアドレス</label>
          <input type="text" placeholder="example@email.com"/> <br/>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label" aria-required>*カテゴリー</label>
          <input type="text"/> <br/>
        </div>
        <div className='mb-1' style={{ textAlign: "left" }}>
          <label className="form-label" aria-required>再現手順</label>
          <br/>
          <textarea rows={10} style={{ width: '100%' }}></textarea>
        </div>        
        <button className="btn-green" onClick={() => history.goBack()}>確認</button>
      </div>
    </div>
  )
}