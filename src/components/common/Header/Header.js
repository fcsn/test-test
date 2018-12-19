import React from 'react';
import styles from './Header.scss';
import cx from 'classnames';

const Header = () => (
    <header className={cx('header')}>
        <div className={cx('header-content')}>
            <div className={cx('brand')}>
                blog
            </div>
            <div className={cx('right')}>
                오른쪽
            </div>
        </div>
    </header>
)

export default Header;

