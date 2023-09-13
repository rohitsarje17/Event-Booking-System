import mongoose from "mongoose";

const bookingsSchema = new mongoose.Schema({
    eventId:{
        type : String,
        required : true,
    },
    bookingId:{
        type : String,
        required : true,
    },
    user:{
        type:String,
        required:true,
    },
    date:{
        type:date,
        required:true,
    },
});

export default mongoose.model("Bookings",bookingsSchema); 