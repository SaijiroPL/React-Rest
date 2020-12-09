import React from 'react'
import asset from 'const/asset';
import cn from 'classnames';

export default function() {
  const data = [
    { date: '2020/02/29 12:31', category: '和食', name: 'テスティング食堂名', totalScore: 85, rank: 52, allRank: 6000, qStar: 2, pscStar: 3, confirmed: false, M: 80, Q: 90, MQ: 75, S: 80, C: 95, PSC: 85 },
    { date: '2020/02/25 11:45', category: '洋食', name: 'テスティング食堂名', totalScore: 85, rank: 52, allRank: 6000, qStar: 2, pscStar: 3, confirmed: false, M: 80, Q: 90, MQ: 75, S: 80, C: 95, PSC: 85 },
    { date: '2020/02/20 16:11', category: '中華', name: 'テスティング食堂名', totalScore: 85, rank: 52, allRank: 6000, qStar: 2, pscStar: 3, confirmed: false, M: 80, Q: 90, MQ: 75, S: 80, C: 95, PSC: 85 },
    { date: '2020/01/31 18:05', category: '和食', name: 'テスティング食堂名', totalScore: 85, rank: 52, allRank: 6000, qStar: 2, pscStar: 3, confirmed: true, M: 80, Q: 90, MQ: 75, S: 80, C: 95, PSC: 85 },
    { date: '2020/01/14 11:01', category: '洋食', name: 'テスティング食堂名', totalScore: 85, rank: 52, allRank: 6000, qStar: 2, pscStar: 3, confirmed: true, M: 80, Q: 90, MQ: 75, S: 80, C: 95, PSC: 85 },
  ]
  return (
    <div style={{ textAlign: 'center' }}>
      <div className={cn("search-title", 'mt-2', 'mr-2', 'mb-2')}>
        <span className={cn('fs-25', 'fw-bold', 'mt-1')}>調査結果順位</span>
      </div>
      {/* <div style={{ display: 'flex' }}>
        <span className={cn("ml-2", 'search-table-title')}>
          チェシクを入れた調査一覧 / 総合
        </span>
      </div> */}
      <div className={cn('search-result-title', 'fs-15')}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 4 }}>調査日時(降順)</div>
          <div style={{ flex: 2 }}>カテゴリー</div>
          <div style={{ flex: 5 }}>店名</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>順位</div>
          <div style={{ flex: 1 }}>総合</div>
          <div className='rank-mq' style={{ flex: 1 }}>MQ</div>
          <div className='rank-morq' style={{ flex: 1 }}>M</div>
          <div className='rank-morq' style={{ flex: 1 }}>Q</div>
          <div className={cn('rank-psc', 'ml-1')} style={{ flex: 1 }}>PSC</div>
          <div className='rank-sc' style={{ flex: 1 }}>S</div>
          <div className='rank-sc' style={{ flex: 1 }}>C</div>
          <div style={{ flex: 1 }}></div>
        </div>
        <div className='search-table-border'>
        {data.map((item, idx) => (
          <div className={cn('fs-13', 'search-item')} key={idx}>
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
            <div className='mt-1' style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}>{item.rank}</div>
              <div style={{ flex: 1 }}>{item.totalScore}</div>
              <div className='rank-mq' style={{ flex: 1 }}>{item.MQ}</div>
              <div className='rank-morq' style={{ flex: 1 }}>{item.M}</div>
              <div className='rank-morq' style={{ flex: 1 }}>{item.Q}</div>
              <div className={cn('rank-psc', 'ml-1')} style={{ flex: 1 }}>{item.PSC}</div>
              <div className='rank-sc' style={{ flex: 1 }}>{item.S}</div>
              <div className='rank-sc' style={{ flex: 1 }}>{item.C}</div>
              <div style={{ flex: 1 }}>
                <span className='rank-detail'>詳細</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}