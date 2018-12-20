import React from 'react';
import RankingList from 'components/ranking/RankingList';

class RankingContainer extends React.Component {
    state = {
        rankings: {
          "data": [
            {
              "description": "10\ub300, \ub7ec\ube14\ub9ac",
              "id": "sonyunara",
              "image": {
                "id": 32108187,
                "url": "https://usercontents-c.styleshare.kr/images/32108187/original"
              },
              "liked": false,
              "name": "\uc18c\ub140\ub098\ub77c",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.sonyunara.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300, \uce90\uc8fc\uc5bc",
              "id": "gosister",
              "image": {
                "id": 34571457,
                "url": "https://usercontents-c.styleshare.kr/images/34571457/original"
              },
              "liked": false,
              "name": "\uc5b8\ub2c8\uac00\uac04\ub2e4",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.gosister.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ubca0\uc774\uc9c1",
              "id": "66girls",
              "image": {
                "id": 32106453,
                "url": "https://usercontents-c.styleshare.kr/images/32106453/original"
              },
              "liked": false,
              "name": "\uc721\uc721\uac78\uc988",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.66girls.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \uc2ec\ud50c",
              "id": "banharu",
              "image": {
                "id": 32105810,
                "url": "https://usercontents-c.styleshare.kr/images/32105810/original"
              },
              "liked": false,
              "name": "\ubc18\ud558\ub8e8",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.banharu.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300, \ubca0\uc774\uc9c1",
              "id": "hotping",
              "image": {
                "id": 32106328,
                "url": "https://usercontents-c.styleshare.kr/images/32106328/original"
              },
              "liked": false,
              "name": "\ud56b\ud551",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.hotping.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300, \uce90\uc8fc\uc5bc",
              "id": "merongshop",
              "image": {
                "id": 32106535,
                "url": "https://usercontents-c.styleshare.kr/images/32106535/original"
              },
              "liked": false,
              "name": "\uba54\ub871\uc0f5",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.merongshop.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300, \uc720\ub2c8\ud06c",
              "id": "dejou",
              "image": {
                "id": 32106399,
                "url": "https://usercontents-c.styleshare.kr/images/32106399/original"
              },
              "liked": false,
              "name": "\ub370\uc96c",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fdejou.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ub7ec\ube14\ub9ac",
              "id": "chuu",
              "image": {
                "id": 25563120,
                "url": "https://usercontents-c.styleshare.kr/images/25563120/original"
              },
              "liked": false,
              "name": "\uce04",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.chuu.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ubca0\uc774\uc9c1",
              "id": "dailymonday",
              "image": {
                "id": 25563086,
                "url": "https://usercontents-c.styleshare.kr/images/25563086/original"
              },
              "liked": false,
              "name": "\ub370\uc77c\ub9ac\uba3c\ub370\uc774",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.dailymonday.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ub7ec\ube14\ub9ac",
              "id": "cherrykoko",
              "image": {
                "id": 32106663,
                "url": "https://usercontents-c.styleshare.kr/images/32106663/original"
              },
              "liked": false,
              "name": "\uccb4\ub9ac\ucf54\ucf54",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.cherrykoko.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ub7ec\ube14\ub9ac",
              "id": "906studio",
              "image": {
                "id": 32106448,
                "url": "https://usercontents-c.styleshare.kr/images/32106448/original"
              },
              "liked": false,
              "name": "906\uc2a4\ud29c\ub514\uc624",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2F906studio.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300, \ubca0\uc774\uc9c1",
              "id": "ggsing",
              "image": {
                "id": 34581678,
                "url": "https://usercontents-c.styleshare.kr/images/34581678/original"
              },
              "liked": false,
              "name": "\uace0\uace0\uc2f1",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.ggsing.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ubca0\uc774\uc9c1",
              "id": "flymodel",
              "image": {
                "id": 32192983,
                "url": "https://usercontents-c.styleshare.kr/images/32192983/original"
              },
              "liked": false,
              "name": "\ud50c\ub77c\uc774\ubaa8\ub378",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.flymodel.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \uc2ec\ud50c\uce90\uc8fc\uc5bc",
              "id": "jtamtam",
              "image": {
                "id": 34581568,
                "url": "https://usercontents-c.styleshare.kr/images/34581568/original"
              },
              "liked": false,
              "name": "\uc81c\uc774\ud0d0\ud0d0",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.jtamtam.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \uce90\uc8fc\uc5bc",
              "id": "liveary",
              "image": {
                "id": 32106778,
                "url": "https://usercontents-c.styleshare.kr/images/32106778/original"
              },
              "liked": false,
              "name": "\ub9ac\ube0c\uc5b4\ub9ac",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.liveary.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ub85c\ub9e8\ud2f1",
              "id": "blingshop",
              "image": {
                "id": 35009084,
                "url": "https://usercontents-c.styleshare.kr/images/35009084/original"
              },
              "liked": false,
              "name": "\ube14\ub9c1\uc0f5",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.blingshop.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "20\ub300, \ub85c\ub9e8\ud2f1",
              "id": "bonzishop",
              "image": {
                "id": 34223823,
                "url": "https://usercontents-c.styleshare.kr/images/34223823/original"
              },
              "liked": false,
              "name": "\ubcf8\uc9c0\uc0f5",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.bonzishop.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ub85c\ub9e8\ud2f1",
              "id": "shopperland",
              "image": {
                "id": 31667776,
                "url": "https://usercontents-c.styleshare.kr/images/31667776/original"
              },
              "liked": false,
              "name": "\uc1fc\ud37c\ub79c\ub4dc",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.shopperland.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300, \uce90\uc8fc\uc5bc",
              "id": "coolpis",
              "image": {
                "id": 34571472,
                "url": "https://usercontents-c.styleshare.kr/images/34571472/original"
              },
              "liked": false,
              "name": "\ud5ec\ub85c\uc6b0\ucfe8\ud53c\uc2a4",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.coolpis.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ub7ec\ube14\ub9ac",
              "id": "j_blin",
              "image": {
                "id": 35009130,
                "url": "https://usercontents-c.styleshare.kr/images/35009130/original"
              },
              "liked": false,
              "name": "\uc81c\uc774\ube14\ub9b0",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.j-blin.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ub85c\ub9e8\ud2f1",
              "id": "realyellow",
              "image": {
                "id": 32193471,
                "url": "https://usercontents-c.styleshare.kr/images/32193471/original"
              },
              "liked": false,
              "name": "\ub9ac\uc5bc\uc610\ub85c\uc6b0",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Frealyellow.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300, \uce90\uc8fc\uc5bc",
              "id": "hijjoo",
              "image": {
                "id": 25563091,
                "url": "https://usercontents-c.styleshare.kr/images/25563091/original"
              },
              "liked": false,
              "name": "\ud558\uc774\ucb48",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.hijjoo.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ubca0\uc774\uc9c1",
              "id": "beginning",
              "image": {
                "id": 32106504,
                "url": "https://usercontents-c.styleshare.kr/images/32106504/original"
              },
              "liked": false,
              "name": "\ud504\ub86c\ube44\uae30\ub2dd",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.beginning.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300, \ub7ec\ube14\ub9ac",
              "id": "vinvle",
              "image": {
                "id": 32106789,
                "url": "https://usercontents-c.styleshare.kr/images/32106789/original"
              },
              "liked": false,
              "name": "\ube48\ube14",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fvinvle.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300, \uce90\uc8fc\uc5bc",
              "id": "hot_10",
              "image": {
                "id": 32106702,
                "url": "https://usercontents-c.styleshare.kr/images/32106702/original"
              },
              "liked": false,
              "name": "\ud56b\ud150",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fhot-10.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "20\ub300, \ub85c\ub9e8\ud2f1",
              "id": "blla",
              "image": {
                "id": 32602448,
                "url": "https://usercontents-c.styleshare.kr/images/32602448/original"
              },
              "liked": false,
              "name": "\ube14\ub77c",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.blla.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300,   20\ub300, \ub7ec\ube14\ub9ac",
              "id": "loverim",
              "image": {
                "id": 32193180,
                "url": "https://usercontents-c.styleshare.kr/images/32193180/original"
              },
              "liked": false,
              "name": "\ub7ec\ube14\ub9bc",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.loverim.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "20\ub300,   30\ub300, \ub7ec\ube14\ub9ac",
              "id": "minsshop",
              "image": {
                "id": 32392662,
                "url": "https://usercontents-c.styleshare.kr/images/32392662/original"
              },
              "liked": false,
              "name": "\ubbfc\uc2a4\uc0f5",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.minsshop.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "10\ub300, \uc561\uc138\uc11c\ub9ac",
              "id": "hellogg",
              "image": {
                "id": 25563113,
                "url": "https://usercontents-c.styleshare.kr/images/25563113/original"
              },
              "liked": false,
              "name": "\uac1c\uad74\uc0f5",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fhellogg.com%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            },
            {
              "description": "20\ub300,   30\ub300, \ubca0\uc774\uc9c1",
              "id": "secretlabel",
              "image": {
                "id": 32193497,
                "url": "https://usercontents-c.styleshare.kr/images/32193497/original"
              },
              "liked": false,
              "name": "\uc2dc\ud06c\ub9bf\ub77c\ubca8",
              "secondName": null,
              "url": "https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.secretlabel.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
            }
          ],
          "pagination": {
            "nextCursor": 30
          },
          "updatedAt": "2018-11-28T05:15:34.977297+00:00"
        }
    }
    render() {
        return (
            <div>
                <RankingList
                    rankings={this.state.rankings.data}
                />
            </div>
        );
    }
}

export default RankingContainer;
