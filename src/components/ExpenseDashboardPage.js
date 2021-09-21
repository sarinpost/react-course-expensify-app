import React from 'react'
import ExpensesList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilter'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpensesList />
    </div>
)

export default ExpenseDashboardPage