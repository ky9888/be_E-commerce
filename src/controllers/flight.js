import Flights from "../models/Flights.js";

export const createFlight = async (req, res) => {
    const newFlight = new Flights(req.body);
  
    try {
      const savedFlight = await newFlight.save();
      res.status(200).json(savedFlight);
    } catch (err) {
      next(err);
    }
  };

  export const getallFlight = async (req, res) => {
    try {
       
    
        const flights = await Flights.find(req.query);
       return res.status(200).json(
       {
        message:"lấy thành công",
        data:flights
       }
       );
      } catch (error) {
        res.status(500).send(error.message);
      }
  };
 