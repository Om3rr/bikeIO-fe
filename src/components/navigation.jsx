import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SearchIcon from "@material-ui/icons/Search";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import ReportIcon from "@material-ui/icons/Report";
import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useFormatMessage} from "react-intl-hooks";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
}));
const pathToTitle = {
    "/register": "path.register.title",
    "/search": "path.search.title"
}

const Navigation = ({history, location}) => {
    const t = useFormatMessage();
    const classes = useStyles()
    const [drawerOpen, toggleDrawer] = useState(false)
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                onClick={() => toggleDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {t({id: pathToTitle[location.pathname] || "path.home"})}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor={"left"}
                open={drawerOpen}
            >
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <List>
                        <ListItem button key={"search"} onClick={() => history.push("/search")}>
                            <ListItemIcon><SearchIcon/></ListItemIcon>
                            <ListItemText primary={t({id: "path.search.title"})}/>
                        </ListItem>
                        <ListItem button key={"register"} onClick={() => history.push("/register")}>
                            <ListItemIcon><AddIcon/></ListItemIcon>
                            <ListItemText primary={t({id: "path.register.title"})}/>
                        </ListItem>
                        <ListItem button key={"report"}>
                            <ListItemIcon><ReportIcon/></ListItemIcon>
                            <ListItemText primary={t({id: "path.report.title"})}/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    )
}

export default withRouter(Navigation)