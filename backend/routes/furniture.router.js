const express=require("express")
const{furnitureModel}=require("../model/furniture.model")
const furnitureRouter=express.Router();



//..........get all furniture..........
furnitureRouter.get("/",async(req,res)=>{
    const furnitures= await furnitureModel.find()
    res.send(furnitures)
})

//.......get living room furniture..........
furnitureRouter.get("/living",async(req,res)=>{
    const furnitures= await furnitureModel.find({"catagory":"Living room furniture"})
    console.log(furnitures)
    res.send(furnitures)
})

//..........get dining room furniture............
furnitureRouter.get("/dining",async(req,res)=>{
    const furnitures= await furnitureModel.find({"catagory":"dining room furniture"})
    console.log(furnitures)
    res.send(furnitures)
})

//..........get bedroom furniture.................
furnitureRouter.get("/bed",async(req,res)=>{
    const furnitures= await furnitureModel.find({"catagory":"bedroom furniture"})
    console.log(furnitures)
    res.send(furnitures)
})

//............get bathroom furnitur.............
furnitureRouter.get("/bath",async(req,res)=>{
    const furnitures= await furnitureModel.find({"catagory":"bathroom furniture"})
    console.log(furnitures)
    res.send(furnitures)
})


//...........search dynamically........
 
furnitureRouter.get("/search", async (req, res) => {
    const searchData = req.query.key;
    const query = {
      $or: [
        { category: { $regex: searchData, $options: "i" } },
        { type: { $regex: searchData, $options: "i" } },
        { description: { $regex: searchData, $options: "i" } },
      ],
    };
    const furnitures = await furnitureModel.find(query);
    // console.log(furnitures);
    res.send(furnitures);
  });



  //..........post new furniture...........
  furnitureRouter.post("/create",async(req,res)=>{
    const payload=req.body
     try {
       const furniture=await furnitureModel.insertMany(payload)
       res.send({"msg":"products added into database"})
     } catch (error) {
      res.send({ "msg": "something went wrong", "error": error.message })
     }
  })

  //.................sorting......................
  
  //.................. sorting by price high to low..............
  furnitureRouter.get("/price/high",async(req,res)=>{
    const furnitures= await furnitureModel.find().sort({"price":-1})
    res.send(furnitures)
})

//.................sorting by price low to high..............
furnitureRouter.get("/price/low",async(req,res)=>{
  const furnitures= await furnitureModel.find().sort({"price":1})
  res.send(furnitures)
})



module.exports={furnitureRouter}