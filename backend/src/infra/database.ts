import mongoose from "mongoose"

export async function connect(){
  try {
    await mongoose.connect('mongodb+srv://felipemimoura:190917@cluster0.3j329jx.mongodb.net/hero-tickets')
    console.log("Connect database sucess")
  } catch (error) {
    console.log(error)
  }
}