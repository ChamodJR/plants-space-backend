import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    email : {
        type : String,
        require : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        required : true
    },
    comment : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true,
        default : Date.now()
    },
    isApproved : {
        type : Boolean,
        required : true,
        default : false
    },
    profolePicture : {
        type : String,
        required : true,
        default : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?ga=GA1.1.541463097.1748819334&semt=ais_hybrid&w=740"
    }
})

const Review = mongoose.model("Review",reviewSchema);

export default Review;