import React from 'react';
import GoodsList from 'components/goods/GoodsList';
import * as goodsActions from 'store/modules/goods';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

class GoodsContainer extends React.Component {
    componentDidMount () {
      const { GoodsActions } = this.props;
      GoodsActions.getGoods();
    }

  render() {
      const { goods, loading } = this.props
        return (
            <GoodsList
                goods={goods}
                loading={loading}
            />
        );
    }
}

export default connect(
    state => ({
      goods: state.goods.goods,
      loading: state.goods.pending,
      error: state.goods.error
    }),
    dispatch => ({
      GoodsActions: bindActionCreators(goodsActions, dispatch)
    })
)(GoodsContainer);