import React from 'react'
import { Link } from 'react-router-dom'

const EditExpensePage = (props) => {
    return (
        <div>
            This is from my edit expense with if of {props.match.params.id}
        </div>
    )
}

export default EditExpensePage
