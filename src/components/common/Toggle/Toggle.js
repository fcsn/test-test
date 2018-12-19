import React from 'react';
import styles from './Toggle.scss';
import cx from 'classnames';

const Toggle = () => (
    <div className={cx('switch-field')}>
        <input type="radio"
               id="switch_left"
               name="switch_2"
               value = "yes"
               checked/>
        <label htmlFor="switch_left">
            Ranking
        </label>
        <input type="radio"
               id="switch_right"
               name="switch_2"
               value="no"/>
        <label htmlFor="switch_right">
            Goods
        </label>
    </div>
)

export default Toggle;

