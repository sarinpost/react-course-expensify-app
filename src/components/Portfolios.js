import React from 'react'
import { Link } from 'react-router-dom'

class Portfolios extends React.Component {
    state = {
        items: [{
            id: 0,
            name: 'Unirversity'
        }, {
            id: 1,
            name: 'Works'
        }]
    }
    render = () => (
        <div>
            <h1>This is my portfolio list</h1>
            {
                this.state.items.map((item, index) => (
                    <p key={index}>
                        <Link to={`/portfolios/${item.id}`}>{item.name}</Link>
                    </p>
                ))
            }
        </div>
    )
}

export default Portfolios