const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
   image:String,
   price:Number,
   description:String,
   rating:Number,
   quantity:Number,
   user:String
})

const cartModel=mongoose.model("cart",cartSchema)

module.exports={cartModel}