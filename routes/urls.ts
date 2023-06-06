import express from 'express'
import shortController from '../controllers/urls'

const router = express.Router()

router.post('/shorts', shortController.postUrl)
router.get('/:id', shortController.getUrls)



export default router