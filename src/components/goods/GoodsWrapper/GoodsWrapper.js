import React from 'react';
import styles from './GoodsWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const GoodsWrapper = ({children}) => (
    <div className={cx('goods-wrapper')}>
        {children}
    </div>
)

export default GoodsWrapper;



