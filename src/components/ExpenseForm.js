import React from "react";
import moment from 'moment'
import { SingleDatePicker } from "react-dates"
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date();
const now = moment()
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: '',
        note: '',
        createAt: moment(),
        calendaFocused: false
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createAt) => {
        this.setState(() => ({ createAt }))
    }
    onFocusChange = (focused) => {
        this.setState(() => ({ calendaFocused: focused }))
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker
                        date={this.state.createAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendaFocused.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                    />
                    <textarea placeholder="Add a note for your expense" value={this.state.note} onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}