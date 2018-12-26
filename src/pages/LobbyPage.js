import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Link } from 'react-router-dom';
import styles from './LobbyPage.scss';
import classNames from 'classnames/bind';
import clothing from 'static/img/clothing.png';
import medal from 'static/img/medal.png';

const cx = classNames.bind(styles);

const LobbyPage = () => {
        return (
            <PageTemplate>
                <div className={cx('link-container')}>
                        <Link className={cx('link')} to="/goods">
                            <img src={clothing}
                            alt="medal" style={{width: '1.2rem', opacity: 0.8, marginRight: '0.4rem'}}/>
                            Goods
                        </Link>
                        <Link className={cx('link')} style={{marginLeft: '1.5rem'}} to="/ranking">
                            <img src={medal}
                            alt="medal" style={{width: '1.1rem', opacity: 0.75, marginRight: '0.3rem'}}/>
                            Ranking
                        </Link>
                </div>
            </PageTemplate>
        )
}

export default LobbyPage;