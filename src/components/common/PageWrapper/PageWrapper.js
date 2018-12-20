import React from 'react';
import styles from './PageWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageWrapper = ({children}) => (
    <div className={cx('goods-wrapper')}>
        {children}
    </div>
)

export default PageWrapper;



