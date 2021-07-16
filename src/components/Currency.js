import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
    React.useEffect(() => {
        FetchData();
    }, [])
    const FetchData = (page = 1) => {
        dispatch(GetCurrencyList(page,perPage))
    }
    console.log("props", props);
    const showData = () => {
        if (currencyList.loading) {
            return <p>Loading</p>
        }
        if (!_.isEmpty(currencyList.data)) {
            console.log("currency data", currencyList.data);
            return (
                <div className="root">
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
                </div>
            )
        }
        if (currencyList.errorMsg !== "") {
            return <p>{currencyList.errorMsg}</p>
        }
        return <p>unable to get dataa</p>
    }
    return(
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
    )
}
export default Currency;