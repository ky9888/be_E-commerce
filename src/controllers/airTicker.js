import Ticker from "../models/Ticker.js";




export const getTicker = async (req, res) => {
  try {
     
    // const user = await Flights.findOne({ name: req.body.name});

    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }

     const { fromFlight, toFlight } = req.query;
     const query = {};
     query.fromFlight = new RegExp(fromFlight, 'i');
     query.toFlight = new RegExp(toFlight, 'i');
    // if (user.name === fromFlight) {
    //   query.fromFlight = user.name; // Trả về các object có fromFlight bằng với user.name
    // } else {
    //   if (fromFlight) {
        // query.fromFlight = new RegExp(fromFlight, 'i');
    //   }
    // }

    // if (toFlight) {
      // query.toFlight = new RegExp(toFlight, 'i');
    // }

    const tickers = await Ticker.find(query);
    res.json(tickers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export const createTicker = async (req, res, next) => {
  const newTicker = new Ticker(req.body);

  try {
    const savedTicker = await newTicker.save();
    res.status(200).json(savedTicker);
  } catch (err) {
    next(err);
  }
}
export const getTickerFlightID = async (req, res, next) => {
  try {
    const tickers  = await Ticker.findById(req.params.id);
    res.status(200).json(tickers);
  } catch (err) {
    next(err);
  }
};