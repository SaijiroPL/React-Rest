import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import asset from 'const/asset';
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
  function onAdmin() {
    history.push(`/admin`);
  }
  function onSearchDetail() {
    history.push(`/search/detail`);
  }
  function onSearchRank() {
    history.push(`/search/rank`);
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <div className={cn("search-title", 'mt-2', 'mr-2', 'mb-2')}>
        <span className={cn('fs-25', 'fw-bold', 'mt-1')}>調査結果一覧</span>
        <button className="btn-green" style={{ float: 'right' }} onClick={() => onAdmin()}>管理者画面へ</button>
      </div>
      <div style={{ display: 'flex' }}>
        <span className={cn("ml-2", 'search-table-title')} onClick={() => onSearchRank()}>
          チェックを⼊れた結果詳細へ
        </span>
      </div>
      <div className={cn('search-result-title', 'fs-13')}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 4 }}>調査日時(降順)</div>
          <div style={{ flex: 3 }}>カテゴリー</div>
          <div style={{ flex: 4 }}>店名</div>
        </div>
        <div className='search-table-border'>
        {surveyList.map((item, idx) => (
          <div className={cn('fs-13', 'search-item')} key={idx}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 4, textAlign: 'left' }}>
                <label><input type="checkbox"/>{item.date} {item.time}</label>
              </div>
              <div style={{ flex: 3 }}>
                {[item.cooking_type_1, item.cooking_type_2, item.cooking_type_3].join(',')}
              </div>
              <div style={{ flex: 4 }}>
                {item.survey_store}
              </div>
            </div>
            <div className='mt-1'>
              <span>総合 {item.total}点 順 {item.total_rank}/{totalCount}</span>
              <span className='ml-1'>MQ {item.mq}点</span>
              <span className='ml-1'>PSC {item.psc}点</span>
              <span className={cn({'span-confirm': item.confirmed}, {'span-nonconfirm': !item.confirmed})} onClick={() => {
                if (!item.confirmed) {
                  // alert('確定後の変更不可');
                  // const newData = [...data];
                  // newData[idx].confirmed = true;
                  // setData(newData);
                }
              }}>
                {item.confirmed ? '確定済' : '未確定'}
                </span>
            </div>
          </div>
        ))}
        </div>
        <div className={cn("mt-1")} style={{ textAlign: 'right', width: '100%' }}>
          <button className="btn-green" style={{ width: '125px' }} onClick={() => history.replace('/login')}>ログアウト</button>
        </div>
      </div>
    </div>
  )
}