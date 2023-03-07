const expenseController = {

    getAllExpenses: async (request, response) => {

        
    },

    getExpense: (request, response) => {
        const expenseIdFromParams = parseInt(request.params.id) //recebe o ID da URL
        const expenseObj = expenses.find(expenseObj => expenseObj.id === expenseIdFromParams) //busca o ID no array de objetos

        if (expenseObj) {
            response.json(expenseObj)
        } else {
            response.json({
                message: "Expense not found!"
            })
        }

    },

    postExpense: (request, response) => {
        const expenseIdFromParams = parseInt(request.params.id) //recebe o ID da URL
        response.json({
            id: `${expenseIdFromParams}`,
            message: "registered successfully"
        })
    },

    putExpense: (request, response) => {
        const expenseIdFromParams = parseInt(request.params.id) //recebe o ID da URL
        response.json({
            id: `${expenseIdFromParams}`,
            message: "saved successfully"
        })
    },

    deleteExpense: (request, response) => {
        const expenseIdFromParams = parseInt(request.params.id) //recebe o ID da URL
        response.json({
            id: `${expenseIdFromParams}`,
            message: "deleted successfully"
        })
    },
}

module.exports = expenseController