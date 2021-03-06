import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={StreamList} exact></Route>
                        <Route path="/streams/new" component={StreamCreate} exact></Route>
                        <Route path="/streams/edit/:id" component={StreamEdit} exact></Route>
                        <Route path="/streams/delete/:id" component={StreamDelete} exact></Route>
                        <Route path="/streams/:id" component={StreamShow} exact></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;