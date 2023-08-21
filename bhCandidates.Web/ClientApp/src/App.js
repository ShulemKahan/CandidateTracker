import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './Layout';


import AddCandidate from './pages/AddCandidate';
import Home from './pages/Home';
import './custom.css'
import ViewDetails from './pages/ViewDetails';
import Pending from './pages/Pending';
import Confirmed from './pages/Confirmed';
import Cancelled from './pages/Cancelled';
import { CandidatesContextComponent } from './CandidateContext';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <CandidatesContextComponent>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/addcandidate' component={AddCandidate} />
                    <Route path='/viewdetails/:id' component={ViewDetails} />
                    <Route path='/pending' component={Pending} />
                    <Route path='/confirmed' component={Confirmed} />
                    <Route path='/Cancelled' component={Cancelled} />
                </Layout>
            </CandidatesContextComponent>
        );
    }
}
