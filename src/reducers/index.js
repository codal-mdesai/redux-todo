import { combineReducers } from 'redux';
import CurrencyReducer from './currencyReducer';
const rootReducer = combineReducers(
    {
        CurrencyReducer
    }
);

export default rootReducer;