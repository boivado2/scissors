import express, {Express} from 'express'
import urlRoute from '../routes/urls'
import errorMiddleware from '../middleware/error'
import limiter from '../middleware/limiter'

export default (app: Express) => {

  app.use(express.json())
  app.use(limiter(5))
  app.use('/api/', urlRoute)
  app.use(errorMiddleware)
}