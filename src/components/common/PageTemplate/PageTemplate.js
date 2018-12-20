import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import PageWrapper from 'components/common/PageWrapper';
import HeaderContainer from 'containers/common/HeaderContainer';

const cx = classNames.bind(styles)

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <HeaderContainer/>
        <main>
            <PageWrapper>
                {children}
            </PageWrapper>
        </main>
    </div>
)

export default PageTemplate;



