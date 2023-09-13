import Event from "../models/Event";

export const getAllEvents = async (req, res) => {
    let events;
    try {
      events = await Event.find();
     
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
    if(!events){
        return res.status(500).json({message:"Error occured"});
    }

        return res.status(200).json({events});
  };


  