import React from 'react';
import styles from './GoodsList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

{/*<div className={cx('grid-thirds')}>*/}
                {/*<div className={cx('col')}><img src={img} alt="item"/></div>*/}
            {/*</div>*/}
const GoodsItem = ({price, img, imgId, shopId, shopName, title, url, mobileUrl}) => {
    return (
            <div className={cx('grid-thirds')}>
                <img className={cx('col')} src="https:\/\/usercontents-c.styleshare.kr\/images\/35304551\/original" alt="item"/>
                <img className={cx('col')} src="https:\/\/usercontents-c.styleshare.kr\/images\/35304551\/original" alt="item"/>
                <img className={cx('col')} src="https:\/\/usercontents-c.styleshare.kr\/images\/35304551\/original" alt="item"/>
            </div>
    )
}

const GoodsList = ({goods}) => {
    const goodsList = goods.map(
        (post, index) => {
            const { id, price, image, shopId, shopName, title, url, mobileUrl } = post
            return (
                <GoodsItem
                price={price}
                key={id}
                id={id}
                img={image.url}
                imgId={image.id}
                shopId={shopId}
                shopName={shopName}
                title={title}
                url={url}
                mobileUrl={mobileUrl}
                />
            )
        }
    );
    return (
        <div className={cx('list-con')}>
            {goodsList}
        </div>
    )
}

export default GoodsList;
