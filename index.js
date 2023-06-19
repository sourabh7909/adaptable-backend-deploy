
const { connection } = require("./db")


const cors=require("cors")
require("dotenv").config()
const express=require("express")
const { userRouter } = require("./Routes/user.route")
const { repoRouter } = require("./Routes/repo.create")


const app= express()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/create",repoRouter)



app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`server is running at port ${process.env.port}`)
        console.log("connected to the db")
    } catch (error) {
        console.log(error)
    }
})