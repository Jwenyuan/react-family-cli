import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Page from '../pages/Page/Page';

const getRouter = () => (
    
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page">Page</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page" component={Page}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;
