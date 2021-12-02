// Export a stateless functional component
// description, amount, createAt
import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom'

const ExpensesListItem = ({ id, description, amount, createAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <p>{description}</p>
        </Link>
        <p>{amount} - {createAt}</p>
    </div>
)

export default connect()(ExpensesListItem);
