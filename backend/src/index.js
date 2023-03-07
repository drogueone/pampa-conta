const express = require("express")
const routes = require("./routes")
const cors = require("cors")
const corsOptions = require("./corsOptions")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json()) //analisa dados de solicitação JSON e os transforme em um objeto JavaScript
app.use(bodyParser.urlencoded({ extended: true })) //analisa dados de solicitação URL-encoded e os transforme em um objeto JavaScript
app.use(cors(corsOptions))
app.use(routes)

app.listen(3000, () => {
    console.log("Server is running");
})