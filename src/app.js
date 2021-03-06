import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filter'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();
store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))
store.dispatch(setTextFilter(''))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))