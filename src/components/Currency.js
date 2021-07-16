import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import _ from "lodash";
import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { GetCurrencyList } from '../actions/index';
import "./currency.css";


const Currency = (props) => {
    const dispatch = useDispatch();
    const perPage = 10
    const currencyList = useSelector(state => state.CurrencyReducer)
    const [view, setView] = React.useState('list');
    React.useEffect(() => {
        FetchData();
    }, [])
    const FetchData = (page = 1) => {
        dispatch(GetCurrencyList(page,perPage))
    }
    console.log("props", props);
    const GridView = () => {
        return (
        <Grid container item xs={12} spacing={3}>
            {currencyList.data.map(currency => {
                return (
                    <React.Fragment>
                    <Grid item xs={3} key={currency.id}>
                    <Paper className="paper">
                        <ButtonBase className="image">
                        <img className="img" alt="complex" src={currency.logo_url} />
                        </ButtonBase>
                        <Typography variant="body2" gutterBottom>
                        Currency name: {currency.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        The coin rank is {currency.rank}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        Symbol: {currency.symbol}
                        </Typography>
                    </Paper>
                    </Grid>
                    </React.Fragment>
                )})}
        </Grid>
        );
    }
    const ListView = () => {
        return (
        <List>
            {currencyList.data.map(currency => {
            return (
                <React.Fragment>
                <ListItem alignItems="flex-start" key={currency.id}>
                    <ListItemAvatar>
                    <Avatar variant="square" alt="currency" src={currency.logo_url} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="currency"
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className="inline"
                            color="textPrimary"
                        >
                            Symbol: {currency.symbol}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        The coin rank is {currency.rank}
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                </React.Fragment>
        )})}
        </List>
        );
    }
    const showData = () => {
        if (currencyList.loading) {
            return <p>Loading</p>
        }
        if (!_.isEmpty(currencyList.data)) {
            console.log("currency data", currencyList.data);
            console.log("view is",view);
            return (
                <div>
                    {view === 'list' ? ListView() : GridView()}
                </div>
            )
        }
        if (currencyList.errorMsg !== "") {
            return <p>{currencyList.errorMsg}</p>
        }
        return <p>unable to get dataa</p>
    }
    const changeViewStyle = (event, nextView) => {
        setView(nextView);
    } 
    return(
        <React.Fragment>
        {!_.isEmpty(currencyList.data) && (
            <ToggleButtonGroup orientation="horizontal" className="toggleBar"  value={view} exclusive onChange={changeViewStyle}>
            <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>
            </ToggleButtonGroup>
            )}
            <div>
            {showData()}
            {!_.isEmpty(currencyList.data) && (
                <ReactPaginate 
                pageCount={Math.ceil(currencyList.count / perPage)}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                onPageChange = {(data) => {
                    console.log(data)
                    FetchData(data.selected + 1)
                }}
                containerClassName={"pagination"}
                activeClassName={"paginationActive"}
                />
            )}
        </div>
            </React.Fragment>
        
    )
}
export default Currency;