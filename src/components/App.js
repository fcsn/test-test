import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GoodsPage, RankingPage, LobbyPage, NotFoundPage } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={LobbyPage}/>
                <Route path='/goods' component={GoodsPage}/>
                <Route path='/ranking' component={RankingPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
}

export default App;