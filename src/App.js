import React, {useState} from 'react';
import './App.css';
import {
    MemoryRouter as Router,
    Route,
    Switch,
    Link,
    useHistory
} from 'react-router-dom';
import Register from "./components/register/index";
import Search from "./components/search";
import Home from "./components/home";
import Navigation from "./components/navigation";
import SuccessComponent from "./components/success";
import {wakeUpServer} from "./clients/apiClient";


function App() {
    wakeUpServer().then(() => {})
    return (
        <div>
            <Router>
                <div className="App">
                    <Navigation/>
                    <Switch>
                        <Route path="/success" component={SuccessComponent}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/search" component={Search}/>
                        <Route component={Register}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
