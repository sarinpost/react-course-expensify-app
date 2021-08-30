import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './../components/Header'
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import AddExpensePage from './../components/AddExpensePage'
import EditExpensePage from './../components/EditExpensePage'
import HelpPage from './../components/HelpPage'
import NotFoundPage from './../components/NotFoundPage'
import Portfolios from '../components/Portfolios'
import Portfolio from '../components/Portfolio'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/portfolios" component={Portfolios} exact={true} />
                <Route path="/portfolios/:id" component={Portfolio} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter