import React from 'react';
import './App.css';
import {Route} from 'react-router'
import LandingPage from './components/LandingPage/LandingPage'
import InfoContainer from './components/PageOne/InfoContainer'
import EmissionsContainer from './components/PageTwo/EmissionsContainer';
import ResultsContainer from './components/Results/ResultsContainer';

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/step-1" component={InfoContainer} />
            <Route exact path="/step-2" component={EmissionsContainer} />
            <Route exact path="/results" component={ResultsContainer} />
        </div>
    );
}

export default App;
