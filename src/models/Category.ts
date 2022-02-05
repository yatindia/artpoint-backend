import mongo from "mongoose"

const CategorySchema = new mongo.Schema({

    category : {
        type : String,
        required: true
    },

    subCategory : [{
        image: String,
        text: String
    }]
})

const Category =  mongo.model("Category", CategorySchema )

export default Category