import React, {useState} from "react";
import {searchBikes} from "../clients/apiClient";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import {useFormatMessage} from "react-intl-hooks";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    searchRoot: {
        height: "30%",
        display: "flex",
        flexDirection: "column"
    },
    searchInput: {
        margin: theme.spacing(2),
    },
    searchButton: {},
    bikesRoot: {
        display: "flex",
        flexDirection: "column"
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    searchContainer: {
        width: "50%",
        margin: "auto",
        position: 'relative',
    }
}));
const Search = (props) => {
    const classes = useStyles()
    const t = useFormatMessage();
    const [bikeId, onBikeId] = useState('')
    const [loading, isLoading] = useState(false)
    const [result, onResult] = useState(null)
    const [searchError, onSearchError] = useState(null)
    const onSearch = async () => {
        isLoading(true)
        onSearchError(null)
        onResult(null)
        const result = await searchBikes(bikeId)

        setTimeout(() => {
            if (!result) {
                onSearchError(`Cant find bike with serial: ${bikeId}`)
            }
            onResult(result)
            isLoading(false)
        }, 2000)

    }
    return (
        <div className={classes.root}>
            <div className={classes.searchRoot}>
                <TextField className={classes.searchInput} label="Bike Serial Number"
                           error={!!searchError}
                           helperText={searchError}
                           onChange={(e) => onBikeId(e.target.value)} value={bikeId}/>
                <div className={classes.searchContainer}>
                    <Button className={classes.searchButton} variant="contained" fullWidth color="primary"
                            disabled={loading}
                            onClick={onSearch}>
                        {"Search!"}
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
                </div>


            </div>
            {result && <div className={classes.bikesRoot}>
                {Object.entries(result).map(([k, v]) => {
                    return (<div key={k}>{t({id: `result.${k}`})}: {v}</div>)
                })}
            </div>}
        </div>
    )
}

export default Search