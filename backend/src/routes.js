const express = require("express")
const expenseController = require('./controllers/expenseController')

const router = express.Router()

router.get("/", (request, response) => {response.send("Everithing ok!")})
router.post("/", (request, response) => {response.send("Really! Nothing to register here.")})
router.put("/", (request, response) => {response.send("I'm just a home server")})
router.delete("/", (request, response) => {response.send("Do you whant to delete the entire server?")})

router.get("/expense", expenseController.getAllExpenses)

router.get("/expense/:id", expenseController.getExpense)

router.post("/expense/:id", expenseController.postExpense)
router.post("/expense", (request, response) => {response.send("You need to tell me the ID!")})

router.put("/expense/:id", expenseController.putExpense)
router.put("/expense", (request, response) => {response.send("I can't update nothing without and ID!")})

router.delete("/expense/:id", expenseController.deleteExpense)
router.delete("/expense", (request, response) => {response.send("Inform ID please!")})

module.exports = router