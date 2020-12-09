import React from 'react'
import asset from 'const/asset';

export default function() {
  return (
    <div>
      <div className="top-title">
        <span>コース紹介</span>
      </div>
      <div style={{ position: 'absolute', bottom: '4em', right: '2em' }}>
        <button className="btn-green">アップグレード</button>
      </div>
    </div>
  )
}