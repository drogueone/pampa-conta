const mongoose = require('../config/database')

const expenseSchema = new mongoose.Schema({
  description: String,
  price: Number,
  expiration: String,
  payment: Boolean
})

const Expense = mongoose.model('Expense', expenseSchema)

const expenseController = {

    getAllExpenses: async (request, response) => {
        
        try {
            const expenses = await Expense.find()

            if (!expenses) {
                return response.status(404).json({ message: 'Expense not found' })
            }

            return response.status(200).json(expenses)
        } catch (err) {
            console.log(err)
            return response.status(500).json({ message: 'Error on show expenses!' })
        }
        
    },

    getExpense: async (request, response) => {
        
        const { id } = request.params

        try {
            const expense = await Expense.findById(id)

            if (!expense) {
                return response.status(404).json({ message: 'Expense not found' })
            }

            return response.status(200).json(expense)
        } catch (err) {
            console.log(err)
            return response.status(500).json({ message: 'Error on show expense!' })
        }

    },

    postExpense: async (request, response) => {
        const { description, price, expiration, payment } = request.body

        try {
            const newExpense = new Expense({ description, price, expiration, payment })
            await newExpense.save()
      
            response.status(201).json({ message: 'Expense added sussesfully!' })
          } catch (err) {
            console.log(err)
            response.status(500).json({ message: 'Erro on register!' })
          }

    },

    putExpense: async(request, response) => {
        
        const { id } = request.params
        const { description, price, expiration, payment } = request.body

        try {
        const expense = await Expense.findOneAndUpdate(
            { _id: id },
            { description, price, expiration, payment },
            { new: true }
        )

        response.status(200).json({ message:"Expense updated!", expense })
        } catch (err) {
        console.log(err)
        response.status(500).json({ message: 'Error on update.' })
        }

    },

    deleteExpense: async (request, response) => {

        const { id } = request.params
        
        try {
            const deletedExpense = await Expense.findByIdAndDelete(id)
        
            if (!deletedExpense) {
              return response.status(404).json({ message: 'Expense not found' })
            }
        
            return response.status(200).json({ message: 'Expense removed sussesfuly!' })
          } catch (err) {
            console.error(err)
            return response.status(500).json({ message: 'Error on remove' })
          }

    },
}

module.exports = expenseController