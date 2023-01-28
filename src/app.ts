import express,{Request, Response} from "express"
import cors from "cors"

const app = express();
app.use(express.json())
app.use(cors());

app.get("/health", (req:Request,res:Response)=>{
    res.send("working...")
})

app.listen(4000, ()=>{console.log("Running on port 4000")})