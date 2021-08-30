import React from 'react'
import { NavLink } from 'react-router-dom'

const Portfolio = (props) => {
    return (
        <div>
            <p>
                This is detail of my {props.match.params.id}
            </p>
        </div>
    )
}

export default Portfolio