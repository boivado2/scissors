import { Request, Response } from "express";
import { nanoid} from 'nanoid'
import {IURL} from '../dto/url'
import {validateUrls,Url } from '../models/url'


export default {
  postUrl: async (req: Request<{}, {}, {originalUrl: string}>, res: Response) => {

    const urlId = nanoid(8)

    const {error} =  validateUrls(req.body)
    if(error) return res.status(400).json({error: "url not valid."})


    let url = await Url.findOne({originalUrl: req.body.originalUrl})
    if(url) return res.status(400).json({error: "url already exist."})

    url = await Url.findOne({  uniqueID: urlId})
    if(url) return res.status(400).json({error: "url already exist."})
  

    url =  await Url.create({
      originalUrl: req.body.originalUrl,
      shortUrl: process.env.BASE_URL + urlId,
      uniqueID: urlId
    })

    await url.save()

    res.send(url)
  },

  getUrls :async (req:Request<{id: string}>, res: Response) => {

    const url = await Url.findOne({uniqueID: req.params.id})
    if(!url) return res.status(404).json({error: "url not found."})

    res.redirect(url.originalUrl)
  }
}
