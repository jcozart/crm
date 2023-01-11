import express from 'express'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:/CRMdb', {
    useNewUrlParser: true,
})

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// serving static files
app.use(express.static('public'))

routes(app)

app.get('/', (req, res) => 
    res.send(`Node and express server is running on ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
)

