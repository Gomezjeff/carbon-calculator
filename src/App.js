import React from 'react';
import './App.css';
import { Route } from 'react-router'
import LandingPage from './components/LandingPage/LandingPage'
import InfoContainer from './components/PageOne/InfoContainer'
import EmissionsContainer from './components/PageTwo/EmissionsContainer';
import ResultsContainer from './components/Results/ResultsContainer';
import MobileWarning from './components/MobileWarning'
import './components/Utils/styles.css'

function App() {
    return (
        <div className="App">
            <MobileWarning />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/step-1" component={InfoContainer} />
            <Route exact path="/step-2" component={EmissionsContainer} />
            <Route exact path="/results" component={ResultsContainer} />
        </div>
    )
}

export default App;
