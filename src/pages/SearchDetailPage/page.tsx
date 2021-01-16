import React, { useEffect, useMemo, useState } from 'react'
import asset from 'const/asset';
import { useHistory, useParams  } from "react-router-dom"
import cn from 'classnames';
import { getSurveyDetail } from 'api/survey';
import { PSCM, SurveyDetail } from 'types/data';

export default function() {
  const { id } = useParams<{id: string}>();
  const history = useHistory();

  const [detail, setDetail] = useState<SurveyDetail>();

  useEffect(() => {
    const getDetail = async (id: string) => {
      const res = await getSurveyDetail(id);
      setDetail(res);
    }
    getDetail(id);
  }, []);

  const rankTotal = { all: 1005,  business: 2100, category1: 1500, category2: 1500, category3: 1111}
  const rankData = [
    { title: '総合', all: 70,  business: 51, category1: 35, category2: 35, category3: 75 },
    { title: 'MQ', all: 70,  business: 51, category1: 35, category2: 35, category3: 75},
    { title: 'PSC', all: 70,  business: 51, category1: 35, category2: 35, category3: 75},
  ];
  const detailedScore = useMemo(() => {
    if (detail) {
      return [
        { 
          title: 'M : メニュー構成', 
          score: detail.summary.m, 
          itemCount: detail.menu_structure.length, 
          circle: detail.menu_structure.filter((item) => item.survey_state === 1).length, 
          triangle: detail.menu_structure.filter((item) => item.survey_state === 2).length, 
          cross: detail.menu_structure.filter((item) => item.survey_state === 3).length 
        },
        { 
          title: 'Q : 料理クオリティ', 
          score: detail.summary.q, 
          itemCount: detail.cooking.map((item) => 
            item.cookings.map((cook) => 
              cook.surveys.length).reduce((p, c) => p + c)
            ).reduce((p, c) => p + c),
          circle: detail.cooking.map((item) => 
            item.cookings.map((cook) => 
              cook.surveys.filter((survey) => survey.survey_state === 1).length).reduce((p, c) => p + c)
            ).reduce((p, c) => p + c), 
          triangle: detail.cooking.map((item) => 
            item.cookings.map((cook) => 
              cook.surveys.filter((survey) => survey.survey_state === 2).length).reduce((p, c) => p + c)
            ).reduce((p, c) => p + c), 
          cross: detail.cooking.map((item) => 
            item.cookings.map((cook) => 
              cook.surveys.filter((survey) => survey.survey_state === 3).length).reduce((p, c) => p + c)
            ).reduce((p, c) => p + c) 
        },
        { 
          title: 'P : プレゼンテーション', 
          score: detail.summary.p, 
          itemCount: detail.presentation.length, 
          circle: detail.presentation.filter((item) => item.survey_state === 1).length, 
          triangle: detail.presentation.filter((item) => item.survey_state === 2).length, 
          cross: detail.presentation.filter((item) => item.survey_state === 3).length 
        },
        { 
          title: 'S : サービス', 
          score: detail.summary.s, 
          itemCount: detail.service.length, 
          circle: detail.service.filter((item) => item.survey_state === 1).length, 
          triangle: detail.service.filter((item) => item.survey_state === 2).length, 
          cross: detail.service.filter((item) => item.survey_state === 3).length 
        },
        { 
          title: 'C : クリンリネス', 
          score: detail.summary.c, 
          itemCount: detail.clinkiness.length, 
          circle: detail.clinkiness.filter((item) => item.survey_state === 1).length, 
          triangle: detail.clinkiness.filter((item) => item.survey_state === 2).length, 
          cross: detail.clinkiness.filter((item) => item.survey_state === 3).length 
        },
      ];
    }
    return [];
  }, [detail]);

  const groupBy = (arr: PSCM[]) => {
    const cats = arr.map((item) => item.category);
    const uCats: string[] = [];
    cats.forEach((cat) => {
      if (uCats.indexOf(cat) < 0) uCats.push(cat);
    });
    return uCats.map((cat) => {
      return {
        title: cat,
        surveys: arr.filter((pscm) => pscm.category === cat)
      }
    });
  };

  if (!detail) {
    return (
      <div style={{ margin: 10 }}>
        <div className="top-title">
          <span>調査結果詳細</span>
        </div>
      </div>
    )
  }

  return (
    <div style={{ margin: 10 }}>
      <div className="top-title">
        <span>調査結果詳細</span>
      </div>
      <table className={cn("table-summary")}>
        <tbody>
          <tr>
            <td width="30%">調査店舗</td>
            <td colSpan={3}>{detail.summary.survey_store}</td>
          </tr>
          <tr>
            <td>住所</td>
            <td colSpan={3}>{detail.summary.address}</td>
          </tr>
          <tr>
            <td>日付 • 時間</td>
            <td colSpan={3}>{detail.summary.date}&nbsp;{detail.summary.time}</td>
          </tr>
          <tr>
            <td>(時間帯)</td>
            <td colSpan={3}>{detail.summary.time_zone}</td>
          </tr>
          <tr>
            <td>混み具合</td>
            <td colSpan={3}>{detail.summary.hall_staff_number}</td>
          </tr>
          <tr>
            <td>客席担当者人数</td>
            <td colSpan={3}>{detail.summary.waiter_count}人</td>
          </tr>
          <tr>
            <td>営業形態 • 業態</td>
            <td colSpan={2}>{detail.summary.business_type}</td>
            <td>{detail.summary.business_condition}</td>
          </tr>
          <tr>
            <td>料理カテゴリー</td>
            <td>{detail.summary.cooking_type_1}</td>
            <td>{detail.summary.cooking_type_2}</td>
            <td>{detail.summary.cooking_type_3}</td>
          </tr>
        </tbody>
      </table>
      <div className={cn("detail-header", 'mt-1')}>
        評価点数
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
        <div className="search-mark-box-container">
          <div className="search-mark-box">
            <span style={{ lineHeight: '100px', fontSize: 50, fontWeight: 'bold' }}>{detail.summary.total}</span>
            <span style={{ position: 'absolute', left: '5px' }}>総合</span>
            <span style={{ position: 'absolute', bottom: '5px', right: '5px' }}>点/100点</span>
          </div>
        </div>
        <div>
          <div className="search-mark-box-container">
            <div className="search-mark-box-s">
              <span style={{ lineHeight: '80px', fontSize: 40, fontWeight: 'bold' }}>{detail.summary.mq}</span>
              <span style={{ position: 'absolute', left: '5px', fontSize: 12 }}>MQ</span>
              <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: 12 }}>点/100点</span>
            </div>
          </div>
          <div style={{ marginLeft: 10, fontSize: 9.5 }}>
            <div>M : メニュー構成</div>
            <div style={{ marginLeft: 15 }}><span className="fs-20" style={{ fontWeight: 'bold' }}>{detail.summary.m}</span>点/100点</div>
            <div>Q : 料理クオリティ</div>
            <div style={{ marginLeft: 15 }}><span className="fs-20" style={{ fontWeight: 'bold' }}>{detail.summary.q}</span>点/100点</div>
          </div>
        </div>
        <div>
          <div className="search-mark-box-container">
            <div className="search-mark-box-s">
              <span style={{ lineHeight: '80px', fontSize: 40, fontWeight: 'bold' }}>{detail.summary.psc}</span>
              <span style={{ position: 'absolute', left: '5px', fontSize: 12 }}>PSC</span>
              <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: 12 }}>点/100点</span>
            </div>
          </div>
          <div style={{ marginLeft: 10, fontSize: 9.5 }}>
            <div>P : プレゼンテーション</div>
            <div style={{ marginLeft: 15 }}><span className="fs-20" style={{ fontWeight: 'bold' }}>{detail.summary.p}</span>点/100点</div>
            <div>S : サービス</div>
            <div style={{ marginLeft: 15 }}><span className="fs-20" style={{ fontWeight: 'bold' }}>{detail.summary.s}</span>点/100点</div>
            <div>C : クリンリネス</div>
            <div style={{ marginLeft: 15 }}><span className="fs-20" style={{ fontWeight: 'bold' }}>{detail.summary.c}</span>点/100点</div>
          </div>
        </div>
      </div>
      <div className={cn("detail-header", 'mt-1', 'mb-1')}>
        順 位
      </div>
      <table className={cn('table-normal', 'fs-12')}>
        {/* <thead>
          <tr>
            <th></th>
            <th>全体</th>
            <th>フル·サービス • レジー</th>
            <th>寿司</th>
            <th>天ぷら</th>
            <th>うなぎ</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {rankData.map((item, idx) => 
            <tr key={idx}>
              <td>{item.title}</td>
              <td>{item.all}/{rankTotal.all}</td>
              <td>{item.business}/{rankTotal.business}</td>
              <td>{item.category1}/{rankTotal.category1}</td>
              <td>{item.category2}/{rankTotal.category2}</td>
              <td>{item.category3}/{rankTotal.category3}</td>
            </tr>
          )}
        </tbody> */}
        <tbody>
          <tr>
            <td>総合</td>
            <td>{detail.summary.total_rank} / {detail.summary.total_count}</td>
            <td>{detail.summary.cooking_type_1}</td>
            <td>{detail.summary.q_1_rank} / {detail.summary.q_1_count}</td>
          </tr>
          <tr>
            <td>MQ</td>
            <td>{detail.summary.mq_rank} / {detail.summary.mq_count}</td>
            <td>{detail.summary.cooking_type_2}</td>
            <td>{detail.summary.q_2_rank} / {detail.summary.q_2_count}</td>
          </tr>
          <tr>
            <td>PSC</td>
            <td>{detail.summary.psc_rank} / {detail.summary.psc_count}</td>
            <td>{detail.summary.cooking_type_3}</td>
            <td>{detail.summary.q_3_rank} / {detail.summary.q_3_count}</td>
          </tr>
          <tr>
            <td>{detail.summary.business_type}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className={cn("detail-header", 'mt-1', 'mb-1')}>
        料理内容
      </div>
      <table className={cn('table-normal', 'fs-12')}>
        <thead>
          <tr>
            <th>料理名</th>
            <th>価格</th>
            <th>価格(税込)</th>
          </tr>
        </thead>
        <tbody>
          {detail.cooking.map((item, idx) => 
            <tr key={idx}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.price * 1.1}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={cn("detail-header", 'mt-1', 'mb-1')}>
        評価詳細
      </div>
      <table className={cn('table-normal', 'fs-12', 'mb-1')}>
        <thead>
          <tr>
            <th>評価</th>
            <th>点数</th>
            <th>項目数</th>
            <th>◯</th>
            <th>△</th>
            <th>✕</th>
          </tr>
        </thead>
        <tbody>
          {detailedScore.map((item, idx) => 
            <tr key={idx}>
              <td style={{ textAlign: 'left', paddingLeft: 10, width: 150 }}>{item.title}</td>
              <td>{item.score}</td>
              <td>{item.itemCount}</td>
              <td>{item.circle}</td>
              <td>{item.triangle}</td>
              <td>{item.cross}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div style={{ paddingLeft: 10 }} className="fs-12">
        <span className="fs-15">◆メニュー構成</span>
        <div style={{ paddingLeft: 10 }}>
          {detail.menu_structure.map((item, idx) => 
            <div key={idx}>
              <div>{idx + 1}.{item.question}</div>
              <div style={{ paddingLeft: 10 }}>
                {item.survey_state === 1 && '○' || item.survey_state === 2 && '△' || item.survey_state === 3 && '×'} {item.comment}
              </div>
            </div>
          )}
        </div>
        <span className="fs-15">◆料理クオリティ</span>
        <div style={{ paddingLeft: 10 }}>
          {detail.cooking.map((cook, idx) => 
            <div key={idx}>
              <span style={{ borderBottom: "1px black solid" }}>料理{idx + 1}</span>
              <span style={{ marginLeft: 30 }}>{cook.title}</span>
              <span style={{ marginLeft: 30 }}>{cook.price.toLocaleString()}円</span>
              <span style={{ marginLeft: 30 }}>(税込{Math.round(cook.price * 1.1).toLocaleString()}円)</span>
              {cook.cookings.map((cooking, cdx) => 
                <div key={cdx} style={{ marginLeft: 10, display: 'flex' }}>
                  <span>{cooking.title}</span>
                  <div style={{ paddingLeft: 10 }}>
                    {cooking.surveys.map((icq, icqidx) => 
                      <div key={icqidx}>
                        <div>{icqidx + 1}.{icq.question}</div>
                        <div style={{ paddingLeft: 10 }}>
                          {icq.survey_state === 1 && '○' || icq.survey_state === 2 && '△' || icq.survey_state === 3 && '×'} {icq.comment}
                        </div>
                      </div>
                    )}
                  </div>                  
                </div>
              )}
            </div>
          )}
        </div>
        
        <span className="fs-15">◆プレゼンテーション</span>
        <div style={{ paddingLeft: 10 }}>
          {groupBy(detail.presentation).map((cat, idx) => (
            <div key={`presentation${idx}`}>
              <span className="span-subcat">{cat.title}</span>
              {cat.surveys.map((item, iqidx) => 
                <div key={iqidx}>
                  <div>{iqidx + 1}.{item.question}</div>
                  <div style={{ paddingLeft: 10 }}>
                    {item.survey_state === 1 && '○' || item.survey_state === 2 && '△' || item.survey_state === 3 && '×'} {item.comment}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <span className="fs-15">◆サービス</span>
        <div style={{ paddingLeft: 10 }}>
          {groupBy(detail.service).map((cat, idx) => (
            <div key={`service${idx}`}>
              <span className="span-subcat">{cat.title}</span>
              {cat.surveys.map((item, iqidx) => 
                <div key={iqidx}>
                  <div>{iqidx + 1}.{item.question}</div>
                  <div style={{ paddingLeft: 10 }}>
                    {item.survey_state === 1 && '○' || item.survey_state === 2 && '△' || item.survey_state === 3 && '×'} {item.comment}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <span className="fs-15">◆クリンリネス</span>
        <div style={{ paddingLeft: 10 }}>
          {groupBy(detail.clinkiness).map((cat, idx) => (
            <div key={`clinkiness${idx}`}>
              <span className="span-subcat">{cat.title}</span>
              {cat.surveys.map((item, iqidx) => 
                <div key={iqidx}>
                  <div>{iqidx + 1}.{item.question}</div>
                  <div style={{ paddingLeft: 10 }}>
                    {item.survey_state === 1 && '○' || item.survey_state === 2 && '△' || item.survey_state === 3 && '×'} {item.comment}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={cn("detail-header", 'mt-1', 'mb-1')}>
        写真
      </div>
      <div>
        {[detail.summary.photo_1, detail.summary.photo_2, detail.summary.photo_3, detail.summary.photo_4, detail.summary.photo_5]
          .filter((url) => url !== null)
          .map((url, idx) => (
            <div key={idx}>
              <img src={`http://localhost/${url}`} style={{ width: '100%' }}/>
            </div>
          )
        )}
      </div>
      <div className={cn("mt-1", 'mb-1')} style={{ textAlign: 'left', width: '100%' }}>
        <button className="btn-green" style={{ width: '125px' }} onClick={() => history.goBack()}>前の画面に戻る↩️</button>
        <button className="btn-green" style={{ width: '125px', float: 'right' }} onClick={() => history.replace('/search/result')}>調査結果一覧</button>
      </div>
      <div className={cn("mt-1", 'mb-1')} style={{ textAlign: 'right', width: '100%' }}>
        <button className="btn-green" style={{ width: '125px' }} onClick={() => history.replace('/login')}>ログアウト</button>
      </div>
    </div>
  )
}