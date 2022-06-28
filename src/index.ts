import dotenv from "dotenv"
dotenv.config({path: __dirname + '/../.env'})
import express ,{Application} from "express"
import mongo from "mongoose"
import cors from "cors"



const app: Application = express()

//MIDDLEWARES
app.use(express.json())
app.use(cors({
    origin: "*"
}))
//Routes
import products from "./routes/product"
import admin from "./routes/admin"
import distributer from "./routes/distributer"
import order from "./routes/orders"
import marketeer  from "./routes/marketeer"

//MODELS
import Trend from "./models/Trend"

//ROUTES
app.use("/admin", admin)
app.use("/distributer", distributer)
app.use("/marketeer", marketeer)
app.use("/order", order)
app.use("/products", products)
app.use("/product_images", express.static("images"))




// mongo.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@artpointdb.mddbl.mongodb.net/artpoint?retryWrites=true&w=majority`)
mongo.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lgzgs.mongodb.net/artpoint?authSource=admin&replicaSet=atlas-10ukxo-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`)



.then(()=> {console.log("connected")})
.catch( (err) => {console.log("Somthing went wrong, Try again later")})


app.get("/", (req, res)=> {
    res.send("WELCOME TO THE PROJECT API")
})


app.post("/trends", async (req, res)=> {

    let trends = await Trend.find()
    
    res.json({ data : trends[0].images})
})



app.listen(process.env.PORT, ()=>{console.log('running at http://127.0.0.1:'+process.env.PORT)})
