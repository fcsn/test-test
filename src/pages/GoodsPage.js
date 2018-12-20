import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import GoodsWrapper from 'components/goods/GoodsWrapper';
import GoodsContainer from 'containers/goods/GoodsContainer';

const GoodsPage = () => {
    return (
        <PageTemplate>
            <GoodsWrapper>
                <GoodsContainer/>
            </GoodsWrapper>
        </PageTemplate>
    )
}

export default GoodsPage;