const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
var morgan = require('morgan')
const path = require("path")
const userRouter = require('./routers/user')
const machineRouter = require('./routers/machine')

const port = process.env.PORT || 3001;
const db_hosted = 'mongodb://localhost:27017/Vmbd'
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

app.use("/users", userRouter)
app.use("/machine", machineRouter)
//app.use("/",express.static(path.join("angular")))

mongoose.connect(db_hosted, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.get("/", (req, res) => {
    res.send("welcome")
    //res.sendFile(path.join(__dirname,"angular","index.html"))
})

app.listen(port, () => {
    console.log('app running on port ' + port);
})