import React from 'react'
import { useHistory } from "react-router-dom"
import asset from 'const/asset';
import cn from 'classnames';

export default function() {
  const history = useHistory();
  function onRegister() {
    history.push(`/confirmemail`);
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="top-title">
        <span>ユーザー登録</span>
      </div>
      <div className={cn('email-confirm-form', 'mb-1')}>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">Group ID</label>
          <label>GPID0000</label>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">ユーザーID</label>
          <label>UID00000</label>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">メールアドレス</label>
          <label>sample@test.co.jp</label>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">管理者</label>
          <label>UID00000</label>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">ユーザー名</label>
          <input type="text"/> 
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">生年月日</label>
          <input type="text"/> 
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">パスワード</label>
          <input type="text"/> 
        </div>
        <div className={cn('email-form-title', 'fs-20', 'mb-1')}>
          質問と答え
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">質問1</label>
          <select className="form-select">
            <option value="">質問1</option>
            <option value="">質問2</option>
            <option value="">質問3</option>
          </select>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">質問1の答</label>
          <input type="text"/> 
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">質問2</label>
          <select className="form-select">
            <option value="">質問1</option>
            <option value="">質問2</option>
            <option value="">質問3</option>
          </select>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">質問2の答</label>
          <input type="text"/> 
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">質問3</label>
          <select className="form-select">
            <option value="">質問1</option>
            <option value="">質問2</option>
            <option value="">質問3</option>
          </select>
        </div>
        <div className={cn('form-group', 'mb-1')}>
          <label className="form-label">質問3の答</label>
          <input type="text"/> 
        </div>
      </div>
      <div>
        <button className={cn('btn-green', 'mt-2')} onClick={() => onRegister()}>登録</button>  
      </div>      
    </div>
  )
}