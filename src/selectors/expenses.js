// get visible expense
export default (expense, { text, sortBy, startDate, endDate }) => {
    return expense.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = typeof text != 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? -1 : 1
        }
    })
}  