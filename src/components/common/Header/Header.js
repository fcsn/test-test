import React from 'react';
import styles from './Header.scss';
import cx from 'classnames';
import logo from 'static/img/logo.png';
import logoType from 'static/img/typelogo.png';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const Header = () => (
    <header className={cx('header')}>
        <div className={cx('header-content')}>
            <div className={cx('brand')}>
                <Link to="/">
                    <img src={logo} alt="logo" width={30}/>
                    <img src={logoType} alt="logotype" style={{marginLeft: 10}} width={80}/>
                </Link>
            </div>
            <div className={cx('right')}>
                <Button>
                    Goods
                </Button>
                <Button>
                    Ranking
                </Button>
            </div>
        </div>
    </header>
)

export default Header;

