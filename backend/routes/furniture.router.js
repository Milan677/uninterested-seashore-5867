const express=require("express")
const{furnitureModel}=require("../model/furniture.model")
const furnitureRouter=express.Router();



//..........get all furniture..........
furnitureRouter.get("/",async(req,res)=>{
    const furnitures= await furnitureModel.find()
    res.send(furnitures)
})


module.exports={furnitureRouter}