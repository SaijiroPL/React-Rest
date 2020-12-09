import React from 'react'
import { useHistory } from "react-router-dom"
import asset from 'const/asset';
import cn from 'classnames';

export default function() {
  const history = useHistory();
  function onAdmin() {
    history.push(`/admin`);
  }
  function onSearchDetail() {
    history.push(`/search/detail`);
  }
  function onSearchRank() {
    history.push(`/search/rank`);
  }
  const data = [
    { date: '2020/02/29 12:31', category: '和食', name: 'テスティング食堂名', totalScore: 85, rank: 52, allRank: 6000, qStar: 2, pscStar: 3, confirmed: false },
    { date: '2020/02/25 11:45', category: '洋食', name: 'テスティング食堂名', totalScore: 85, rank: 52, allRank: 6000, qStar: 2, pscStar: 3, confirmed: false },
    { date: '2020/02/20 16:11', category: '中華', name: 'テスティング食堂名', totalScore: 85, rank: 52, allRank: 6000, qStar: 2, pscStar: 3, confirmed: false },
    { date: '2020/01/31 18:05', category: '和食', name: 'テスティング食堂名', totalScore: 85, rank: 52, allRank: 6000, qStar: 2, pscStar: 3, confirmed: true },
    { date: '2020/01/14 11:01', category: '洋食', name: 'テスティング食堂名', totalScore: 85, rank: 52, allRank: 6000, qStar: 2, pscStar: 3, confirmed: true },
  ]
  return (
    <div style={{ textAlign: 'center' }}>
      <div className={cn("search-title", 'mt-2', 'mr-2', 'mb-2')}>
        <span className={cn('fs-25', 'fw-bold', 'mt-1')}>調査結果一覧</span>
        <button className="btn-green" style={{ float: 'right' }} onClick={() => onAdmin()}>管理者画面へ</button>
      </div>
      <div style={{ display: 'flex' }}>
        <span className={cn("ml-2", 'search-table-title')} onClick={() => onSearchRank()}>
          チェシクを入れた調査一覧 / 詳細
        </span>
      </div>
      <div className={cn('search-result-title', 'fs-15')}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 4 }}>調査日時(降順)</div>
          <div style={{ flex: 2 }}>カテゴリー</div>
          <div style={{ flex: 5 }}>店名</div>
        </div>
        <div className='search-table-border'>
        {data.map((item, idx) => (
          <div className={cn('fs-13', 'search-item')} onClick={() => onSearchDetail()} key={idx}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 4, textAlign: 'left' }}>
                <label><input type="checkbox"/>{item.date}</label>
              </div>
              <div style={{ flex: 2 }}>
                {item.category}
              </div>
              <div style={{ flex: 5 }}>
                {item.name}
              </div>
            </div>
            <div className='mt-1'>
              <span>全 {item.totalScore}点 順 {item.rank}/{item.allRank}</span>
              <span className='ml-1'>Q{'★'.repeat(item.qStar)}</span>
              <span className='ml-1'>PSC{'★'.repeat(item.pscStar)}</span>
              <span className={cn({'span-confirm': item.confirmed}, {'span-nonconfirm': !item.confirmed})}>
                {item.confirmed ? '確定済' : '未確定'}
                </span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}