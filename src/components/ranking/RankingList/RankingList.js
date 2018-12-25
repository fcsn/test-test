import React from 'react';
import styles from './RankingList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RankingItem = ({id, img, url,name, description, index}) => {
    return (
        <div className={cx('ranking-item')}>
            <div className={cx('ranking-index')}>
                {index === 0
                ? <img src="https://img.pngio.com/gold-medal-gold-medal-png-406_500.png"
                 alt="medal" style={{width: '1.2rem', opacity: 0.9}}/>
                : <span style={{paddingLeft: '0.22rem', paddingRight: '0.22rem'}}>{`${index + 1}.`}</span>}
            </div>
            <div>
                <a href={url}>
                    <img className={cx('ranking-img')} src={img} alt="img"/>
                </a>
            </div>
            <div className={cx('ranking-info')}>
                <div className={cx('ranking-name')}>
                    <a className={cx('ranking-link')} href={url}>{name}</a>
                </div>
                <div className={cx('ranking-description')}>
                    {description}
                </div>
            </div>
        </div>
    )
}

const RankingList = ({rankings}) => {
            const rankingList = rankings.map((ranking, index) => {
                const {id, image, name, url, description} = ranking
                    return (
                        <RankingItem
                            id={id}
                            img={image.url}
                            url={url}
                            description={description}
                            name={name}
                            key={id}
                            index={index}
                        />
                    )
            });
    return (
        <div>
            {rankingList}
        </div>
    )
}

export default RankingList;