import React from 'react';
import styles from './RankingList.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const RankingItem = ({id, img, url,name, description}) => {
    return (
        <div className={cx('ranking-item')}>
            <div className={cx('ranking-index')}>1.</div>
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
            const rankingList = rankings.map(ranking => {
                const {id, image, name, url, description} = ranking
                    return (
                        <RankingItem
                            id={id}
                            img={image.url}
                            url={url}
                            description={description}
                            name={name}
                            key={id}
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