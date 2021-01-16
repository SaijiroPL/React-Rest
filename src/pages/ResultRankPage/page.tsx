import React, { useEffect } from 'react'
import asset from 'const/asset';
import { useHistory } from "react-router-dom"
import cn from 'classnames';
import { SurveyEntry } from 'types/data';
import { getSurveyList } from 'api/survey';

interface props {
  surveyList: SurveyEntry[];
  totalCount: number;
  setSurveyEntries: (entries: SurveyEntry[]) => void;
  setTotalCount: (count: number) => void;
}

export default function({
  surveyList,
  totalCount,
  setSurveyEntries,
  setTotalCount,
}: props) {
  const history = useHistory();
  useEffect(() => {
    const loadEntries = async() => {
      const data = await getSurveyList();
      setSurveyEntries(data.surveys);
      setTotalCount(data.total_count);
    };
    if (surveyList.length === 0) {
      loadEntries();
    }
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <div className={cn("search-title", 'mt-2', 'mr-2', 'mb-2')}>
        <span className={cn('fs-25', 'fw-bold', 'mt-1')}>調査結果 順位・点数</span>
      </div>
      <div className={cn('search-result-title', 'fs-15')}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 4 }}>調査日時(降順)</div>
          <div style={{ flex: 3 }}>カテゴリー</div>
          <div style={{ flex: 5 }}>店名</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 3 }}>総合(順位)</div>
          <div className='rank-mq' style={{ flex: 1 }}>MQ</div>
          <div className='rank-morq' style={{ flex: 1 }}>M</div>
          <div className='rank-morq' style={{ flex: 1 }}>Q</div>
          <div className={cn('rank-psc', 'ml-1')} style={{ flex: 1 }}>PSC</div>
          <div className='rank-sc' style={{ flex: 1 }}>P</div>
          <div className='rank-sc' style={{ flex: 1 }}>S</div>
          <div className='rank-sc' style={{ flex: 1 }}>C</div>
          <div style={{ flex: 1.5 }}></div>
        </div>
        <div className='search-table-border'>
        {surveyList.sort((a, b) => 
          (a.total_rank > b.total_rank) ? 1 : (a.total_rank < b.total_rank ? -1 : 0)).map((item, idx) => (
          <div className={cn('fs-13', 'search-item')} key={idx}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 4, textAlign: 'left' }}>
                {item.date} {item.time}
              </div>
              <div style={{ flex: 3 }}>
                {[item.cooking_type_1, item.cooking_type_2, item.cooking_type_3].join(',')}
              </div>
              <div style={{ flex: 5 }}>
                {item.survey_store}
              </div>
            </div>
            <div className={cn('mt-1', 'fs-11')} style={{ display: 'flex' }}>
              <div style={{ flex: 3 }}>{item.total}点 {item.total_rank}/{totalCount}位</div>
              <div className='rank-mq' style={{ flex: 1 }}>{item.mq}</div>
              <div className='rank-morq' style={{ flex: 1 }}>{item.m}</div>
              <div className='rank-morq' style={{ flex: 1 }}>{item.q}</div>
              <div className={cn('rank-psc', 'ml-1')} style={{ flex: 1 }}>{item.psc}</div>
              <div className='rank-sc' style={{ flex: 1 }}>{item.p}</div>
              <div className='rank-sc' style={{ flex: 1 }}>{item.s}</div>
              <div className='rank-sc' style={{ flex: 1 }}>{item.c}</div>
              <div style={{ flex: 1.5 }} onClick={() => history.push(`/search/detail/${item.id}`)}>
                <span className='rank-detail'>詳細</span>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="mt-1" style={{ textAlign: 'left', width: '100%' }}>
          <button className="btn-green" style={{ width: '125px' }} onClick={() => history.goBack()}>前の画面に戻る↩️</button>
          <button className="btn-green" style={{ width: '125px', float: 'right' }} onClick={() => history.replace('/login')}>ログアウト</button>
        </div>
      </div>
    </div>
  )
}