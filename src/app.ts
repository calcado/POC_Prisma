import express from "express"
import cors from "cors"
import {Request, Response} from "express"

const app = express();
app.use(express.json())
app.use(cors());

app.get("/health", (req:Request,res:Response)=>{
    res.send("working...")
})
const port = +process.env.PORT || 5000;

app.listen(port, ()=>{console.log("Running on port 4000")})