import express, { Request, Response } from 'express'

const app = express()


app.get('/', (req : Request, res: Response) => {
  
  res.send("Working Perfectly")
})


const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log("connected"))



