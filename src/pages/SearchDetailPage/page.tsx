import React from 'react'
import asset from 'const/asset';
import { useHistory } from "react-router-dom"
import cn from 'classnames';

export default function() {
  const history = useHistory();
  const rankTotal = { all: 1005,  business: 2100, category1: 1500, category2: 1500, category3: 1111}
  const rankData = [
    { title: '総合', all: 70,  business: 51, category1: 35, category2: 35, category3: 75 },
    { title: 'MQ', all: 70,  business: 51, category1: 35, category2: 35, category3: 75},
    { title: 'PSC', all: 70,  business: 51, category1: 35, category2: 35, category3: 75},
  ];
  const dishContent = [
    { title: 'チキンカしー', price: 1000 },
    { title: 'チキンカしー', price: 1000 },
    { title: 'チキンカしー', price: 1000 },
    { title: 'チキンカしー', price: 1000 },
  ];
  const detailedScore = [
    { title: 'M : メニュー構成', score: 90, itemCount: 7, circle: 6, triangle: 1, cross: 0 },
    { title: 'Q : 料理クオリティ', score: 84, itemCount: 68, circle: 46, triangle: 21, cross: 1 },
    { title: 'P : プレゼンテーション', score: 98, itemCount: '', circle: '', triangle: '', cross: '' },
    { title: 'S : サービス', score: 96, itemCount: '', circle: '', triangle: '', cross: '' },
    { title: 'C : クリンリネス', score: 90, itemCount: '', circle: '', triangle: '', cross: '' },
  ];
  const mQuestion = [
    { question: '業態・店舗コンセプトに適したメニュー構成か', comment: '○ 適している' },
    { question: '店の売りがはっきりしているか', comment: '△ 適さない商品が一部ある' },
    { question: 'メニューバリエーションが魅力的であるか', comment: '× 不要な商品が多い / 目立つ' },
  ];
  const qQuestion = [
    { 
      title: 'そば', price: 1600,
      categories: [
        {
          title: 'そば（冷）',
          q: [
            { question: '麺の茹で加減が丁度良いか', comment: '○ 適している' },
            { question: '麺の〆加減が丁度良いか', comment: '○ 適している' },
            { question: '水切りができているか', comment: '○ 適している' }
          ],
        },
        {
          title: 'そば（温）',
          q: [
            { question: '麺の茹で加減が丁度良いか', comment: '○ 適している' },
            { question: '麺のクオリティ・状態が良いか', comment: '○ 適している' },
            { question: '具材のクオリティ・状態が良いか', comment: '○ 適している' }
          ],
        },
        {
          title: '鴨汁そば',
          q: [
            { question: 'つけ汁のクオリティ・状態が良いか', comment: '○ 適している' },
            { question: '具材の量的バランスが良いか', comment: '○ 適している' },
            { question: '麺の茹で加減が丁度良いか', comment: '○ 適している' }
          ],
        },
      ]
    },
    { 
      title: '麺類 (セット)', price: 1600,
      categories: [
        {
          title: '親子丼',
          q: [
            { question: '麺の茹で加減が丁度良いか', comment: '○ 適している' },
            { question: '麺の〆加減が丁度良いか', comment: '○ 適している' },
            { question: '水切りができているか', comment: '○ 適している' }
          ],
        },
        {
          title: '天丼',
          q: [
            { question: '麺の茹で加減が丁度良いか', comment: '○ 適している' },
            { question: '麺のクオリティ・状態が良いか', comment: '○ 適している' },
            { question: '具材のクオリティ・状態が良いか', comment: '○ 適している' }
          ],
        },
        {
          title: 'かつ丼',
          q: [
            { question: 'つけ汁のクオリティ・状態が良いか', comment: '○ 適している' },
            { question: '具材の量的バランスが良いか', comment: '○ 適している' },
            { question: '麺の茹で加減が丁度良いか', comment: '○ 適している' }
          ],
        },
        {
          title: '海鮮丼',
          q: [
            { question: 'つけ汁のクオリティ・状態が良いか', comment: '○ 適している' },
            { question: '具材の量的バランスが良いか', comment: '○ 適している' },
            { question: '麺の茹で加減が丁度良いか', comment: '○ 適している' }
          ],
        },
      ]
    }
  ];
  const pQuestion = {
    categories: [
      {
        title: '店頭',
        q: [
          { question: '店舗サイン・ファサードが業態・店舗コンセプトに合っているか', comment: '○ 適している' },
          { question: 'プレゼンツールのメニュー内容・価格帯がわかりやすいか', comment: '○ 適している' },
          { question: 'プレゼンツールを見てお店に入りたくなる魅力があるか', comment: '○ 適している' },
        ]
      },
      {
        title: '店内環境',
        q: [
          { question: '内装デザイン・調度（椅子・テーブル・インテリア）が店舗コンセプトと合っているか', comment: '○ 適している' },
          { question: '照明の明るさ・角度が適切であるか', comment: '○ 適している' },
          { question: 'ＢＧＭ（音量・選曲）が適切であるか', comment: '○ 適している' },
          { question: '快適な室温であるか', comment: '○ 適している' },
        ]
      },
      {
        title: '店内メニュー',
        q: [
          { question: '文字が見やすいか', comment: '○ 適している' },
          { question: '料理の内容が分かりやすいか', comment: '○ 適している' },
          { question: '注文意欲が湧く表示になっているか', comment: '○ 適している' },
        ]
      },
      {
        title: '全般',
        q: [
          { question: '料理のシズル感が表現されているか', comment: '○ 適している' },
        ]
      },
    ]
  }
  const sQuestion = {
    categories: [
      {
        title: '入店時',
        q: [
          { question: '店頭のお客様にすぐ気付き、挨拶ができているか', comment: '○ 適している' },
          { question: '席誘導がスムーズにできているか', comment: '○ 適している' },
        ]
      },
      {
        title: 'オーダー',
        q: [
          { question: 'オーダーが的確に取れているか', comment: '○ 適している' },
          { question: '商品知識があるか', comment: '○ 適している' },
        ]
      },
      {
        title: '料理提供',
        q: [
          { question: '料理の説明があるか（料理名、必要に応じて食べ方など）', comment: '○ 適している' },
          { question: '適切な時間配分・順番で料理を提供できているか', comment: '○ 適している' },
          { question: 'スペース確保をしてから料理提供をしているか', comment: '○ 適している' },
        ]
      },
      {
        title: 'テーブルウォッチ',
        q: [
          { question: 'お客様がスタッフを呼ぼうとする合図・視線に気付き対応しているか', comment: '○ 適している' },
          { question: '水・お茶の継ぎ足し、バッシング、必要に応じて追加オーダーを聞いているか', comment: '○ 適している' },
        ]
      },
      {
        title: '全般',
        q: [
          { question: '笑顔で接客ができているか', comment: '○ 適している' },
          { question: '姿勢・歩き方が良いか', comment: '○ 適している' },
          { question: '待機中の態度が良いか', comment: '○ 適している' },
        ]
      },
      {
        title: '会計時(退店時)',
        q: [
          { question: '会計がスムーズにできているか', comment: '○ 適している' },
          { question: '退店時のお見送りまたは挨拶ができているか', comment: '○ 適している' },
        ]
      },
    ]
  }
  const cQuestion = {
    categories: [
      {
        title: '店内・備品',
        q: [
          { question: 'レジ周りが清潔であるか', comment: '○ 適している' },
          { question: 'デシャップ・サービスステーション・下げ台・オープンキッチンが清潔であるか', comment: '○ 適している' },
          { question: '備品（器・トレー・グラス・湯呑・カトラリー・箸・調味料）が清潔であるか', comment: '○ 適している' },
          { question: '椅子・テーブルが清潔であるか', comment: '○ 適している' },
          { question: '床・壁・はばき・天井・空調・照明・インテリアが清潔であるか', comment: '○ 適している' },
        ]
      },
      {
        title: 'スタッフの身だしなみ',
        q: [
          { question: 'ヘアースタイルが整っているか', comment: '○ 適している' },
          { question: '制服（名札・ユニフォームやエプロン・帽子や靴など）がきちんと着用できているか', comment: '○ 適している' },
          { question: '爪や手の手入れができているか', comment: '○ 適している' },
          { question: '臭い（体臭・口臭・香水）が気にならないか', comment: '○ 適している' },
        ]
      }
    ]
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
            <td colSpan={3}>B店</td>
          </tr>
          <tr>
            <td>住所</td>
            <td colSpan={3}>東京</td>
          </tr>
          <tr>
            <td>日付 • 時間</td>
            <td colSpan={2}>2020年3月12日</td>
            <td>12:02</td>
          </tr>
          <tr>
            <td>(時間帯)</td>
            <td colSpan={3}>ランチ</td>
          </tr>
          <tr>
            <td>混み具合</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>客席担当者人数</td>
            <td colSpan={3}>4人</td>
          </tr>
          <tr>
            <td>営業形態 • 業態</td>
            <td colSpan={2}>フル·サービス • レジー</td>
            <td>専門料理</td>
          </tr>
          <tr>
            <td>料理カテゴリー</td>
            <td>寿司</td>
            <td>天ぷら</td>
            <td>うなぎ</td>
          </tr>
        </tbody>
      </table>
      <div className={cn("detail-header", 'mt-1')}>
        評価点数
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
        <div className="search-mark-box-container">
          <div className="search-mark-box">
            <span style={{ lineHeight: '100px', fontSize: 50, fontWeight: 'bold' }}>89</span>
            <span style={{ position: 'absolute', left: '5px' }}>総合</span>
            <span style={{ position: 'absolute', bottom: '5px', right: '5px' }}>点/100点</span>
          </div>
        </div>
        <div>
          <div className="search-mark-box-container">
            <div className="search-mark-box-s">
              <span style={{ lineHeight: '80px', fontSize: 40, fontWeight: 'bold' }}>89</span>
              <span style={{ position: 'absolute', left: '5px', fontSize: 12 }}>MQ</span>
              <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: 12 }}>点/100点</span>
            </div>
          </div>
          <div style={{ marginLeft: 10, fontSize: 9.5 }}>
            <div>M : メニュー構成</div>
            <div style={{ marginLeft: 15 }}><span className="fs-20" style={{ fontWeight: 'bold' }}>96</span>点/100点</div>
            <div>Q : 料理クオリティ</div>
            <div style={{ marginLeft: 15 }}><span className="fs-20" style={{ fontWeight: 'bold' }}>84</span>点/100点</div>
          </div>
        </div>
        <div>
          <div className="search-mark-box-container">
            <div className="search-mark-box-s">
              <span style={{ lineHeight: '80px', fontSize: 40, fontWeight: 'bold' }}>89</span>
              <span style={{ position: 'absolute', left: '5px', fontSize: 12 }}>PSC</span>
              <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: 12 }}>点/100点</span>
            </div>
          </div>
          <div style={{ marginLeft: 10, fontSize: 9.5 }}>
            <div>P : プレゼンテーション</div>
            <div style={{ marginLeft: 15 }}><span className="fs-20" style={{ fontWeight: 'bold' }}>96</span>点/100点</div>
            <div>S : サービス</div>
            <div style={{ marginLeft: 15 }}><span className="fs-20" style={{ fontWeight: 'bold' }}>84</span>点/100点</div>
            <div>C : クリンリネス</div>
            <div style={{ marginLeft: 15 }}><span className="fs-20" style={{ fontWeight: 'bold' }}>84</span>点/100点</div>
          </div>
        </div>
      </div>
      <div className={cn("detail-header", 'mt-1', 'mb-1')}>
        順 位
      </div>
      <table className={cn('table-normal', 'fs-12')}>
        <thead>
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
          {dishContent.map((item, idx) => 
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
          {mQuestion.map((item, idx) => 
          <>
            <div>{idx + 1}.{item.question}</div>
            <div>{item.comment}</div>
          </>
          )}
        </div>
        <span className="fs-15">◆料理クオリティ</span>
        <div style={{ paddingLeft: 10 }}>
          {qQuestion.map((item, idx) => 
            <div key={idx}>
              <span>料理{idx + 1}</span>
              <span style={{ marginLeft: 30 }}>{item.title}</span>
              <span style={{ marginLeft: 30 }}>{item.price.toLocaleString()}円</span>
              <span style={{ marginLeft: 30 }}>(税込{Math.round(item.price * 1.1).toLocaleString()}円)</span>
              {item.categories.map((ic, icidx) => 
                <div style={{ marginLeft: 10, display: 'flex' }}>
                  <span>{ic.title}</span>
                  <div style={{ paddingLeft: 10 }}>
                    {ic.q.map((icq, icqidx) => 
                      <>
                        <div>{icqidx + 1}.{icq.question}</div>
                        <div style={{ paddingLeft: 10 }}>{icq.comment}</div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <span className="fs-15">◆プレゼンテーション</span>
        <div style={{ paddingLeft: 10 }}>
          {pQuestion.categories.map((item, idx) => 
            <div key={idx}>
              <span className="span-subcat">{item.title}</span>
              {item.q.map((iq, iqidx) => 
                <>
                  <div>{iqidx + 1}.{iq.question}</div>
                  <div style={{ paddingLeft: 10 }}>{iq.comment}</div>
                </>                    
              )}
            </div>
          )}
        </div>

        <span className="fs-15">◆サービス</span>
        <div style={{ paddingLeft: 10 }}>
          {sQuestion.categories.map((item, idx) => 
            <div key={idx}>
              <span className="span-subcat">{item.title}</span>
              {item.q.map((iq, iqidx) => 
                <>
                  <div>{iqidx + 1}.{iq.question}</div>
                  <div style={{ paddingLeft: 10 }}>{iq.comment}</div>
                </>                    
              )}
            </div>
          )}
        </div>

        <span className="fs-15">◆クリンリネス</span>
        <div style={{ paddingLeft: 10 }}>
          {cQuestion.categories.map((item, idx) => 
            <div key={idx}>
              <span className="span-subcat">{item.title}</span>
              {item.q.map((iq, iqidx) => 
                <>
                  <div>{iqidx + 1}.{iq.question}</div>
                  <div style={{ paddingLeft: 10 }}>{iq.comment}</div>
                </>                    
              )}
            </div>
          )}
        </div>
      </div>
      <div className={cn("detail-header", 'mt-1', 'mb-1')}>
        写真
      </div>
      <div>
        <div>
          <img src="https://via.placeholder.com/1024x768.png" style={{ width: '100%' }}/>
        </div>
        <div>
          <img src="https://via.placeholder.com/1024x768.png" style={{ width: '100%' }}/>
        </div>
        <div>
          <img src="https://via.placeholder.com/1024x768.png" style={{ width: '100%' }}/>
        </div>
      </div>
      <div className={cn("mt-1", 'mb-1')} style={{ textAlign: 'left', width: '100%' }}>
        <button className="btn-green" style={{ width: '120px' }} onClick={() => history.goBack()}>前の画面に戻る↩️</button>
        <button className="btn-green" style={{ width: '120px', float: 'right' }} onClick={() => history.replace('/search/result')}>調査結果一覧</button>
      </div>
      <div className={cn("mt-1", 'mb-1')} style={{ textAlign: 'right', width: '100%' }}>
        <button className="btn-green" style={{ width: '120px' }} onClick={() => history.replace('/login')}>ログアウト</button>
      </div>
    </div>
  )
}