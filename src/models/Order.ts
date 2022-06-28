import mongo from "mongoose"


const OrderDetails = new mongo.Schema({
    width : String,
    height : String,
    arc : Boolean,
    position: {
        top: Boolean,
        botton: Boolean,
        right: Boolean,
        left: Boolean

    },
    varnish : Boolean,
    whiteCoat : Boolean,
    quantity: Number,
    price: Number,
    sandwich : Number,
    glass: Number,
    message : String
})

const OrderSchema = new mongo.Schema({

    product_id : {
        type : String,
        required: true
    },

    order_details : OrderDetails,
    
    order_placed_by : {
        type : String,
        required: true
    },
    
    order_processed_by : {
        type : String,
        required: false
    },

    shipping_address : {
        type : String,
        required: false
    },

    status : {
        type : Number,
        required: true
    },

    category : {
        type : String,
        required:false
    },

    subCategory : {
        type : String,
        required: false
    },
    order_date: {
        type: Date,
        default: new Date()
    }
})

const Order =  mongo.model("Order", OrderSchema )

export default Order