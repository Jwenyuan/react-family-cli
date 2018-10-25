import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Bundle from './Bundle';
import Home from 'bundle-loader?lazy&name=home!../pages/Home/Home';
import Page from 'bundle-loader?lazy&name=page!../pages/Page/Page';


const Loading = () => {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component
                ? <Component {...props}/>
                : <Loading/>
        }
    </Bundle>
);

export const getRouter = () => (
    <Router>
        <Switch>
            <Route exact strict path="/" component={createComponent(Home)}/>
            <Route path="/page" component={createComponent(Page)}/>
        </Switch>
    </Router>
);
