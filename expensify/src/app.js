import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize-css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

store.dispatch(addExpense({ description: 'Water Bill', amount: 1111, createdAt: 4000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1112, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1002, createdAt: 3000 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

