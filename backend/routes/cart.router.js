const express = require("express")
const { cartModel } = require("../model/cart.model")
const cartRouter = express.Router();

//.....create cart ..........
cartRouter.post("/create", async (req, res) => {
    const payload = req.body
    
    try {
        let cartdata=await cartModel.find({"image":req.body.image})
        if(cartdata.length>0){
            res.send({"msg":"product is alredy added into the cart"})
        }else{
            const cart = new cartModel(payload)
            await cart.save()
            res.send({ "msg": "new cartcard create" })
        }
        
    } catch (error) {
        res.send({ "msg": "something went wrong", "error": error.message })
    }
})

//........get perticular user cartdata..........
cartRouter.get("/", async (req, res) => {
    let cartData = await cartModel.find({ "user": req.body.user })
    res.send(cartData)
})

//.......delete card from cart.......
cartRouter.delete("/delete",async(req,res)=>{
    const dataFromFrontend=req.body.description;
    const cartData= await cartModel.findOne({"description":dataFromFrontend})
    const userID_in_cart=cartData.user;
    const userID_making_req=req.body.user;
    try {
        if (userID_in_cart!==userID_making_req) {
            res.send({"msg":"you are not authorized"})
        }else{
            await cartModel.deleteOne({"description":dataFromFrontend,"user":userID_making_req})
            let cartData = await cartModel.find({ "user": req.body.user })
            res.send(cartData)
            // res.send({"msg":"one item deleted"})
        }
    } catch (error) {
        res.send({ "msg": "something went wrong", "error": error.message })
    }
})
module.exports = { cartRouter }