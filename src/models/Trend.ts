import mongo from "mongoose"

const TrendSchema = new mongo.Schema({

 
    images: [{
        type: String
    }]
})

const Trend =  mongo.model("Trend", TrendSchema )

export default Trend