import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import logo from 'static/img/logo.png';
import logoType from 'static/img/typelogo.png';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = () => (
    <header className={cx('header')}>
        <div className={cx('header-content')}>
            <div className={cx('logo')}>
                <Link className={cx('logo-link')} to="/">
                    <img className={cx('logo-img')} src={logo} alt="logo"/>
                    <img className={cx('logo-type')} src={logoType} alt="logotype"/>
                </Link>
            </div>
            <div className={cx('right')}>
                <Button to='/goods'>
                    Goods
                </Button>
                <Button to='/ranking'>
                    Ranking
                </Button>
            </div>
        </div>
    </header>
)

export default Header;

