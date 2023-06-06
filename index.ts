import 'express-async-errors'
import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import routes from './start/routes'
dotenv.config()
import { connectDb } from './start/db'

const app = express()


connectDb(process.env.DB_URL!)
routes(app)


app.get('/', (req : Request, res: Response) => {
  res.send("Working Perfectly")
})


const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log("connected"))



