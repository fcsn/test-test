import React from 'react';
import styles from './GoodsList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const GoodsItem = ({goods}) => {
                return (
                    <div className={cx('grid-thirds')}>
                        <a className={cx('link')} href={goods[0].url}>
                            <div className={cx('price')}>
                                <p className={cx('price-font')}>{goods[0].price.toLocaleString()}원</p>
                            </div>
                            <img className={cx('img')} src={goods[0].image.url} alt="item"/>
                        </a>
                        <a className={cx('link')} href={goods[1].url}>
                            <div className={cx('price')}>
                                <p className={cx('price-font')}>{goods[1].price.toLocaleString()}원</p>
                            </div>
                            <img className={cx('img')} src={goods[1].image.url} alt="item"/>
                        </a>
                        <a className={cx('link')} href={goods[2].url}>
                            <div className={cx('price')}>
                                <p className={cx('price-font')}>{goods[2].price.toLocaleString()}원</p>
                            </div>
                            <img className={cx('img')} src={goods[2].image.url} alt="item"/>
                        </a>
                    </div>
                )
}

const GoodsList = ({goods, loading}) => {
    const div = function (arr, n) {
        if (arr && arr.length !== 0) {
            const len = arr.length;
            const cnt = Math.floor(len/n) + (Math.floor(len % n)> 0 ? 1 : 0);
            let tmp = [];
            let id = 1;

            for (let i = 0; i < cnt; i++) {
                tmp.push(arr.splice(0, n));
                tmp[i].id = id++;
            }
            return tmp;
        }
    }

    const dividedItems = div(goods, 3)

    const goodsList = dividedItems
        ? dividedItems.map(
            (goods, index) => {
                const { id } = goods
                return (
                    <GoodsItem
                        key={id}
                        goods={goods}
                        />
                )
            }
        )
        : null
    return (
            <div>{goodsList}</div>
    )
}

export default GoodsList;
