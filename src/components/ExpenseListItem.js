// Export a stateless functional component
// description, amount, createAt
import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses';

const ExpensesListItem = ({ dispatch, id, description, amount, createAt }) => (
    <div>
        <p>{description}</p>
        <p>{amount} - {createAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
)

export default connect()(ExpensesListItem);
