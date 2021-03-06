import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useHistory
} from 'react-router-dom';
import Register from "./components/register/index";
import Search from "./components/search";
import Home from "./components/home";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ReportIcon from '@material-ui/icons/Report';
import SearchIcon from '@material-ui/icons/Search';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Navigation from "./components/navigation";
import SuccessComponent from "./components/success";


function App() {

    return (
        <div>
            <Router>
                <div className="App">
                    <Navigation/>
                    <Switch>
                        <Route path="/success" component={SuccessComponent}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/search" component={Search}/>
                        <Route component={Home}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
