import React from 'react'
import { useHistory } from "react-router-dom"
import asset from 'const/asset';

export default function() {
  const history = useHistory();
  return (
    <div>
      <div className="top-title">
        <span>コース紹介</span>
      </div>
      <div style={{ position: 'absolute', bottom: '4em', right: '2em' }}>
        <button className="btn-green" onClick={() => history.push('/payment')}>アップグレード</button>
        <br/><br/>
        <button className="btn-green">お問合せフォーム</button>
      </div>
    </div>
  )
}