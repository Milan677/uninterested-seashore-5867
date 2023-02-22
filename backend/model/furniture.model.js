
const mongoose=require("mongoose")

const furnitureSchema=mongoose.Schema({
   image:String,
   price:Number,
   description:String,
   rating:Number,
   category:String,
   type:String,
   verity:String
})

const furnitureModel=mongoose.model("furniture",furnitureSchema)

module.exports={furnitureModel}