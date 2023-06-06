import mongoose from 'mongoose'

export async function connectDb  (url: string)  {
  try {
    await mongoose.connect(url)
    console.log("mongodb connected successfully")
  } catch (error) {
    console.log(error)
  }
}