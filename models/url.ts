import mongoose from 'mongoose'
import joi from 'joi'
import {IURL} from '../dto/url'


const urlSchema = new mongoose.Schema<IURL>({
  originalUrl: {type: String, minlength: 6, maxlength: 335, unique: true,  required: true},
  shortUrl : {type: String, minlength: 5, maxlength: 50,  required: true},
  numberOfClicks: {type: Number, min: 0, default: 0},
  uniqueID: {type: String, minlength: 8, maxlength: 10, unique: true,  required: true},
}, {timestamps: true })


const Url = mongoose.model<IURL>("url", urlSchema)



const validateUrls = (data: {originalUrl: string}) => {
  const schema = joi.object<{originalUrl: string}>({
    originalUrl: joi.string().uri().required()
  })

  return schema.validate(data)
}

export {
  Url,
  validateUrls
}