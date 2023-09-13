import mongoose from "mongoose";

const eventSchema = {
    
    eventId: {
          type: String,           
          required: true,       
          unique: true            
        },

    eventName: {
      type: String,
      required: true,
      unique: false         
    },
    eventDescription: {
      type: String,
      required: true,
      unique: false
    },
   
    featured :{
        type : Boolean,
    },

    bookings:[{ type : String}],
    

    eventadmin: {
        type: String,
        required: true,
        unique: false
      },

    // eventDateTime: {
    //   type: Date,             
    //   required: true,
    //   unique: false
    // },
  
    // eventLocation: {
    //   venueName: {
    //     type: String,
    //     required: true,
    //     unique: false
    //   },
    //   address: {
    //     type: String,
    //     required: true,
    //     unique: false
    //   },
    //   city: {
    //     type: String,
    //     required: true,
    //     unique: false
    //   },
    //   state: {
    //     type: String,
    //     required: true,
    //     unique: false
    //   },
    //   postalCode: {
    //     type: String,
    //     required: true,
    //     unique: false
    //   }
    // },


    // eventImageURL: {
    //   type: String,
    //   required: true,
    //   unique: false
    // },
    // ticketPrice: {
    //   type: Number,           
    //   required: true,
    //   unique: false
    // },
    // ticketAvailability: {
    //   type: Number,
    //   required: true,
    //   unique: false
    // },
     // eventCategory: {
    //   type: String,
    //   required: true,
    //   unique: false
    // },
    // createdTimestamp: {
    //   type: Date,
    //   required: true,
    //   unique: false
    // },
    // modifiedTimestamp: {
    //   type: Date,
    //   required: true,
    //   unique: false
    // }
    
  };


export  default mongoose.model("Event",eventSchema);