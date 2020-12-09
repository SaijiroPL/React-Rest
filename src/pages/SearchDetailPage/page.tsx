import React from 'react'
import asset from 'const/asset';
import cn from 'classnames';

export default function() {
  return (
    <div style={{ margin: 10 }}>
      <div className="top-title">
        <span>調査結果詳細</span>
      </div>
      <div className={cn("fs-15")}>
        <span className="search-detail-header-span">調査店舗 : </span> <span>Searched Shop Name</span>
      </div>
      <div className={cn("fs-15")}>
        <span className="search-detail-header-span">住所</span> <span>Shop Address</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 6 }}>
          <div className={cn("fs-15")}>
            <span className="search-detail-header-span">日付</span> <span>2020/03/12</span>
          </div>
          <div className={cn("fs-15")}>
            <span className="search-detail-header-span">時間帯</span> <span>Time Zone</span>
          </div>
          <div className={cn("fs-15")}>
            <span className="search-detail-header-span-w">客席担当者人数</span> <span>4 人</span>
          </div>
        </div>
        <div style={{ flex: 4 }}>
          <div className={cn("fs-15")}>
            <span className="search-detail-header-span">時間</span> <span>12 : 02</span>
          </div>
          <div className={cn("fs-15")}>
            <span className="search-detail-header-span">込み具合</span> <span>status</span>
          </div>
          <div className={cn("fs-15")}>
            <span className="search-detail-header-span">営業形態</span> <span>Business</span>
          </div>
        </div>
      </div>
      <div className={cn("fs-15")}>
        <span className="search-detail-header-span-w">料理カテゴリ</span> <span>専門料理</span>
      </div>
      <div className={cn("fs-15")}>
        <span className="search-detail-header-span-w">提供料理</span> <span>寿司, 天ぷら, うなぎ</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
        <span>点数</span>
        <div className="search-mark-box-container">
          <div className="search-mark-box">
            <span style={{ lineHeight: '100px', fontSize: 50, fontWeight: 'bold' }}>89</span>
            <span style={{ position: 'absolute', left: '5px' }}>総合</span>
            <span style={{ position: 'absolute', bottom: '5px', right: '5px' }}>点/100点</span>
          </div>
        </div>
        <div className="search-mark-box-container">
          <div className="search-mark-box-s">
            <span style={{ lineHeight: '80px', fontSize: 40, fontWeight: 'bold' }}>89</span>
            <span style={{ position: 'absolute', left: '5px', fontSize: 12 }}>MQ</span>
            <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: 12 }}>点/100点</span>
          </div>
        </div>
        <div className="search-mark-box-container">
          <div className="search-mark-box-s">
            <span style={{ lineHeight: '80px', fontSize: 40, fontWeight: 'bold' }}>89</span>
            <span style={{ position: 'absolute', left: '5px', fontSize: 12 }}>PSC</span>
            <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: 12 }}>点/100点</span>
          </div>
        </div>
      </div>
      <div>
        <span>順位</span>
        <table style={{ fontSize: 13 }}>
          <thead>
            <tr>
              <th></th>
              <th>全体</th>
              <th>セルフ</th>
              <th>専門料理</th>
              <th>寿司</th>
              <th>天ぷら</th>
              <th>うなぎ</th>              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>総合</td>
              <td>70/1005</td>
              <td>51/2100</td>
              <td>40/1201</td>
              <td>35/1500</td>
              <td>35/1500</td>
              <td>75/1111</td>
            </tr>
            <tr>
              <td>MQ</td>
              <td>70/1005</td>
              <td>51/2100</td>
              <td>40/1201</td>
              <td>35/1500</td>
              <td>35/1500</td>
              <td>75/1111</td>
            </tr>
            <tr>
              <td>PSC</td>
              <td>70/1005</td>
              <td>51/2100</td>
              <td>40/1201</td>
              <td>35/1500</td>
              <td>35/1500</td>
              <td>75/1111</td>
            </tr>
          </tbody>
        </table>
      </div>
      <span>点数明細</span>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <table style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <th></th>
              <th>点数</th>
              <th>項目数</th>
              <th>◯</th>
              <th>△</th>
              <th>✕</th>              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>メニュー構成</td>
              <td>90</td>
              <td>85</td>
              <td>60</td>
              <td>20</td>
              <td>5</td>
            </tr>
            <tr>
              <td>料理クオリティ</td>
              <td>90</td>
              <td>85</td>
              <td>60</td>
              <td>20</td>
              <td>5</td>
            </tr>
            <tr>
              <td>プレゼンテーション</td>
              <td>90</td>
              <td>85</td>
              <td>60</td>
              <td>20</td>
              <td>5</td>
            </tr>
            <tr>
              <td>サービス</td>
              <td>90</td>
              <td>85</td>
              <td>60</td>
              <td>20</td>
              <td>5</td>
            </tr>
            <tr>
              <td>クリンリネス</td>
              <td>90</td>
              <td>85</td>
              <td>60</td>
              <td>20</td>
              <td>5</td>
            </tr>            
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex' }}>
        <span>料理一覧</span>
        <div style={{ flex: 1 }}>
          <table style={{ fontSize: 13 }}>
            <thead>
              <tr>
                <th>料理名</th>
                <th>価格(税込)</th>                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>チキンカしー</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>チキンカしー</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>チキンカしー</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>チキンカしー</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>チキンカしー</td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ flex: 1 }}>
          <table style={{ fontSize: 13 }}>
            <thead>
              <tr>
                <th>料理名</th>
                <th>価格(税込)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>チキンカしー</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>チキンカしー</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>チキンカしー</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>チキンカしー</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>チキンカしー</td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <span>調査詳細</span>
      <div style={{ paddingLeft: 10 }}>
        <span>プレゼンテーション</span>
        <div style={{ paddingLeft: 10, display: 'flex' }}>
          <span>店頭</span>
          <table>
            <tbody>
              {/* question row */}
              <tr>
                <td>1</td>
                <td>Question...</td>
                <td>◯</td>
                <td>Comment ...</td>
              </tr>
              <tr>
                <td></td>
                <td>Description...</td>
              </tr>
              {/* question row */}
              <tr>
                <td>2</td>
                <td>Question...</td>
                <td>✕</td>
                <td>Comment ...</td>
              </tr>
              <tr>
                <td></td>
                <td>Description...</td>
              </tr>
            </tbody>
          </table>
        </div>
        <span>料理1</span>
        <span style={{ marginLeft: 30 }}>ニシンそば</span>
        <span style={{ marginLeft: 30 }}>800円</span>
        <div style={{ paddingLeft: 10 }}>
          <span>そば</span>
          <table>
            <tbody>
              {/* question row */}
              <tr>
                <td>1</td>
                <td>Question...</td>
                <td>◯</td>
                <td>Comment ...</td>
              </tr>
              <tr>
                <td></td>
                <td>Description...</td>
              </tr>
              {/* question row */}
              <tr>
                <td>2</td>
                <td>Question...</td>
                <td>✕</td>
                <td>Comment ...</td>
              </tr>
              <tr>
                <td></td>
                <td>Description...</td>
              </tr>
            </tbody>
          </table>
        </div>
        <span>写真</span>
        <div>
          <img src="https://via.placeholder.com/1024x768.png" style={{ width: '100%' }}/>
        </div>
      </div>
    </div>
  )
}