import express from "express"
import dotenv from "dotenv"
import { connect } from "mongoose"
import router from "./src/router/index.js"
import cors from "cors"

const app=express()

dotenv.config()
const PORT=process.env.PORT || 4001
const URI_DB=process.env.URI_DB
connect(URI_DB);
app.use(cors())
app.use(express.json());
    


app.use("/api",router)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
