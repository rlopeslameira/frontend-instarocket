import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feeds';
import New from './pages/New'

function Routes(){
    return (
        <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
}

export default Routes;