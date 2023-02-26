const express=require("express")
const { connection } = require("./db")
const{userRouter}=require("./routes/user.router")
const{furnitureRouter}=require("./routes/furniture.router")
const{cartRouter}=require("./routes/cart.router")
const{authenticate}=require("./middleware/authenticate")
const cors=require("cors")
require("dotenv").config()

const app=express()
app.use(cors({origin:"*"}))

app.use(express.json())

app.use("/user",userRouter)
app.use(authenticate)
app.use("/furniture",furnitureRouter)
app.use("/cart",cartRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to database.....")
    } catch (error) {
        console.log(error)
    }

    console.log(`server running at port no ${process.env.port}...`)
})