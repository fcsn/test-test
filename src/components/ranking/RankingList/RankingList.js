import React from 'react';
import styles from './RankingList.scss';
import cx from 'classnames';

const RankingItem = ({id, img, url,name, description}) => {
    return (
        <div className={cx('ranking-item')}>
            <div className={cx('ranking-index')}>1.</div>
            <img className={cx('ranking-img')} src={img} alt="img"/>
            <div className={cx('ranking-info')}>
                <div className={cx('ranking-name')}>
                    {name}
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