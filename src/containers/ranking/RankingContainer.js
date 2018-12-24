import React from 'react';
import RankingList from 'components/ranking/RankingList';
import { connect } from 'react-redux';
import * as rankingActions from 'store/modules/ranking';
import { bindActionCreators } from 'redux';

class RankingContainer extends React.Component {
    componentDidMount () {
        const { RankingActions } = this.props
        RankingActions.getRankings();
    }

    render() {
          const { rankings, loading, error } = this.props
          return (
              <div>
                  <RankingList
                      rankings={rankings}
                      loading={loading}
                      error={error}
                  />
              </div>
          );
      }
}

export default connect(
    state => ({
        rankings: state.ranking.rankings,
        loading: state.ranking.pending,
        error: state.ranking.error
    }),
    dispatch => ({
        RankingActions: bindActionCreators(rankingActions, dispatch)
    })
)(RankingContainer);
