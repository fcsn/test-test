import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import styles from './PageTemplate.scss';
import cx from 'classnames';

const PageTemplate = ({children}) => (
    <div className={cx('page-tamplate')}>
        <HeaderContainer/>
        <main>
            {children}
        </main>
    </div>
)

export default PageTemplate;