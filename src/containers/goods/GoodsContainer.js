import React from 'react';
import GoodsList from 'components/goods/GoodsList';

class GoodsContainer extends React.Component {
    state = {
            goods: {
              "data": [
                {
                  "id": "sonyunara_44989",
                  "image": {
                    "id": 35304551,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35304551\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": null,
                  "price": 23000,
                  "shopId": "sonyunara",
                  "shopName": "\uc18c\ub140\ub098\ub77c",
                  "title": "\ube45\ubc84\ud074\ub85c\ud37c",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fwww.sonyunara.com%2Fshop%2Fview.php%3Findex_no%3D44989%26enterc%3Dstyleshare%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "dusltiq_10899",
                  "image": {
                    "id": 35340795,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35340795\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fm.dusltiq.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D10899%26cate_no%3D4%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 15900,
                  "shopId": "dusltiq",
                  "shopName": "\uc5ec\ub2c8\uc0f5",
                  "title": "18049\uc624\ud504\uc204\ub354\ub2c8\ud2b8\/NR\uc5b4\uae68\ud2b8\uc784\uc640\ud50c\ub098\uadf8\ub791\uae34\ud314NT (\ube14\ub799,\uc544\uc774\ubcf4\ub9ac,\ud551\ud06c)",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fdusltiq.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D10899%26cate_no%3D4%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "lalabong_8066",
                  "image": {
                    "id": 35318993,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35318993\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fwww.lalabong.co.kr%2Fproduct%2F%25ED%2594%2584%25EB%25A6%25AC%25EB%25AF%25B8%25EC%2597%2584-%25EC%25B9%25B4%25EB%259D%25BC%25EB%25A9%259C-%25EC%259A%25B8%25EB%2596%25A1%25EB%25B3%25B6%25EC%259D%25B4%25EC%25BD%2594%25ED%258A%25B8-2color-%25EC%259A%25B860%25EB%25A1%259C-%25ED%2580%2584%25EB%25A6%25AC%25ED%258B%25B0%25EB%25A5%25BC-%25EC%25B5%259C%25EB%258C%2580%25ED%2595%259C-%25EB%2586%2592%25EC%259D%25B8-%25ED%2594%2584%25EB%25A6%25AC%25EB%25AF%25B8%25EC%2597%2584-%25EC%25BD%2594%25ED%258A%25B8%25EC%2597%2590%25EC%259A%2594%2F8066%2Fcategory%2F102%2Fdisplay%2F1%2F%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 85000,
                  "shopId": "lalabong",
                  "shopName": "\ub77c\ub77c\ubd09",
                  "title": "\ud504\ub9ac\ubbf8\uc5c4 \uce74\ub77c\uba5c \uc6b8\ub5a1\ubcf6\uc774\ucf54\ud2b8 '2color' \/ \uc6b860%\ub85c \ud004\ub9ac\ud2f0\ub97c \ucd5c\ub300\ud55c \ub192\uc778 \ud504\ub9ac\ubbf8\uc5c4 \ucf54\ud2b8\uc5d0\uc694,\u2665",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fwww.lalabong.co.kr%2Fproduct%2F%25ED%2594%2584%25EB%25A6%25AC%25EB%25AF%25B8%25EC%2597%2584-%25EC%25B9%25B4%25EB%259D%25BC%25EB%25A9%259C-%25EC%259A%25B8%25EB%2596%25A1%25EB%25B3%25B6%25EC%259D%25B4%25EC%25BD%2594%25ED%258A%25B8-2color-%25EC%259A%25B860%25EB%25A1%259C-%25ED%2580%2584%25EB%25A6%25AC%25ED%258B%25B0%25EB%25A5%25BC-%25EC%25B5%259C%25EB%258C%2580%25ED%2595%259C-%25EB%2586%2592%25EC%259D%25B8-%25ED%2594%2584%25EB%25A6%25AC%25EB%25AF%25B8%25EC%2597%2584-%25EC%25BD%2594%25ED%258A%25B8%25EC%2597%2590%25EC%259A%2594%2F8066%2Fcategory%2F102%2Fdisplay%2F1%2F%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "sonyunara_44571",
                  "image": {
                    "id": 35384135,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35384135\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": null,
                  "price": 29500,
                  "shopId": "sonyunara",
                  "shopName": "\uc18c\ub140\ub098\ub77c",
                  "title": "\ud30c\uc778\ub4dc\uc735\uae30\ubaa8\uc790\ucf13",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fwww.sonyunara.com%2Fshop%2Fview.php%3Findex_no%3D44571%26enterc%3Dstyleshare%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "dusltiq_10872",
                  "image": {
                    "id": 35303293,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35303293\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fm.dusltiq.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D10872%26cate_no%3D31%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 19900,
                  "shopId": "dusltiq",
                  "shopName": "\uc5ec\ub2c8\uc0f5",
                  "title": "\ubca0\uc774\uc9c1\uc790\ucf13\/WF\ubaa8\uc9c1\uce74\ub77c\ubb34\uc9c0\ucf54\ud2b8JK (\ube14\ub799,\ube0c\ub77c\uc6b4)",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fdusltiq.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D10872%26cate_no%3D31%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "j_blin_3170",
                  "image": {
                    "id": 35342075,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35342075\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fm.j-blin.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D3170%26cate_no%3D54%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 19900,
                  "shopId": "j_blin",
                  "shopName": "\uc81c\uc774\ube14\ub9b0",
                  "title": "\uc704\ub315sk",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fj-blin.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D3170%26cate_no%3D54%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "dusltiq_10889",
                  "image": {
                    "id": 35321289,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35321289\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fm.dusltiq.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D10889%26cate_no%3D4%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 12900,
                  "shopId": "dusltiq",
                  "shopName": "\uc5ec\ub2c8\uc0f5",
                  "title": "\uae30\ubaa8\uac9f\ucc30\ub9ac\ud3f4\ub77c\ub9e8\ud22c\ub9e8\/TD\uc601\ubb38\uce90\ub9ad\ud130\ud14c\ub450\ub9ac\uc790\uc218\ubc18\ubaa9MTM (\ube0c\ub77c\uc6b4,\ud654\uc774\ud2b8,\ube14\ub799)",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fdusltiq.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D10889%26cate_no%3D4%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "j_blin_3164",
                  "image": {
                    "id": 35322437,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35322437\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fm.j-blin.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D3164%26cate_no%3D54%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 21000,
                  "shopId": "j_blin",
                  "shopName": "\uc81c\uc774\ube14\ub9b0",
                  "title": "\ud06c\ub9acsk *\uc8fc\ubb38\ud3ed\uc8fc*",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fj-blin.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D3164%26cate_no%3D54%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "bfactorial_2326",
                  "image": {
                    "id": 35321156,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35321156\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fm.bfactorial.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D2326%26cate_no%3D44%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 26500,
                  "shopId": "bfactorial",
                  "shopName": "\ube44\ud329\ud1a0\ub9ac\uc5bc",
                  "title": "\ubaa8\ub4dc \uace0\ubc29 \uccb4\ud06c \uc2a4\ucee4\ud2b8 (2colors)[\uc5ec\uc790\uc544\uba54\uce74\uc9c0\/\uc544\uba54\uce74\uc9c0\ub8e9\/\uc5ec\uc790\uc6cc\ud06c\uc6e8\uc5b4]",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fbfactorial.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D2326%26cate_no%3D44%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "bfactorial_2341",
                  "image": {
                    "id": 35360911,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35360911\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fm.bfactorial.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D2341%26cate_no%3D42%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 32000,
                  "shopId": "bfactorial",
                  "shopName": "\ube44\ud329\ud1a0\ub9ac\uc5bc",
                  "title": "\uc591\uba74 \uc591\ud138 \ubca0\uc2a4\ud2b8 (3colors) [10\ub300,20\ub300 \uc5ec\uc131\uc758\ub958\uc1fc\ud551\ubab0\/\ubca0\uc774\uc9c1\/\uc720\ub2c8\ud06c\/\uc5ec\uc790\/\uaca8\uc6b8\uc2e0\uc0c1]",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fbfactorial.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D2341%26cate_no%3D42%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "bonzishop_16836",
                  "image": {
                    "id": 35359271,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35359271\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fm.bonzishop.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D16836%26cate_no%3D29%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 35000,
                  "shopId": "bonzishop",
                  "shopName": "\ubcf8\uc9c0\uc0f5",
                  "title": "\uba38\uc2a4\ud2b8 \uaf48\ubca0\uae30 \ub8e8\uc988\ud54f \ub2c8\ud2b8 - nt (\uace0\ud004\ub9ac\ud2f0!,\uc6b810%)",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fbonzishop.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D16836%26cate_no%3D29%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "hot_10_4345",
                  "image": {
                    "id": 35362526,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35362526\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fm.hot-10.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D4345%26cate_no%3D7%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 18500,
                  "shopId": "hot_10",
                  "shopName": "\ud56b\ud150",
                  "title": "[\uc591\uae30\ubaa8]\uc2ec\ud50c \ub9e8\ud22c\ub9e8T",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fhot-10.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D4345%26cate_no%3D7%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "j_blin_3165",
                  "image": {
                    "id": 35322438,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35322438\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fm.j-blin.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D3165%26cate_no%3D25%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare",
                  "price": 36800,
                  "shopId": "j_blin",
                  "shopName": "\uc81c\uc774\ube14\ub9b0",
                  "title": "\uc544\ub0adknit",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fj-blin.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D3165%26cate_no%3D25%26display_group%3D1%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                },
                {
                  "id": "sonyunara_44621",
                  "image": {
                    "id": 35322355,
                    "url": "https:\/\/usercontents-c.styleshare.kr\/images\/35322355\/original"
                  },
                  "liked": false,
                  "likedCount": 0,
                  "mobileUrl": null,
                  "price": 17900,
                  "shopId": "sonyunara",
                  "shopName": "\uc18c\ub140\ub098\ub77c",
                  "title": "(\ud55c\uc815\ud310)\ud2f0\ub864\ud6c4\ub4dc\uc2dc\ub9ac\uc988",
                  "url": "https:\/\/www.stylesha.re\/+webview\/soho\/redirect?region=kr&to=http%3A%2F%2Fwww.sonyu/**/nara.com%2Fshop%2Fview.php%3Findex_no%3D44621%26enterc%3Dstyleshare%26utm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare"
                }
              ],
              "pagination": {
                "nextCursor": "30030000"
              }
            }
    }

    render() {
        return (
            <div>
                <GoodsList goods={this.state.goods.data}/>
            </div>
        );
    }
}

export default GoodsContainer;