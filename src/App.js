import React from 'react';
import logo from './static/images/logo.svg';
import './App.scss';
import HomeContainer from './containers/HomeContainer/HomeContainer';

function App() {
    return (
        <div className="App">
            <header className="Appheader">
                <img src={logo} className="AppLogo" alt="logo"/>
            </header>
            <HomeContainer />
        </div>
    );
}

export default App;
