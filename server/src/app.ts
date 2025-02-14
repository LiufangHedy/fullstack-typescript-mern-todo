import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
import bodyParser from 'body-parser'

const app: Express = express()

const PORT: string | number = 4000
console.log('port is: ', PORT);


app.use(cors())
app.use(todoRoutes)
app.use(bodyParser.urlencoded({extended: true}))
// not work

// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

const uri: string = 'mongodb://127.0.0.1:27017/todo'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })
