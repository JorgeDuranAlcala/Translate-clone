const express = require("express");
const cors = require("cors");
const  bodyParser = require("body-parser")
const Router = require("./router")

const app = express();
const PORT = 4000 || process.env.PORT;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(Router)

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
})