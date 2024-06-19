
import mongoose from "mongoose";
const tickerSchema = new mongoose.Schema( {
    airLine: {
      type: String,
      required: true,
    },
    fromFlight: {
      type: String,
      required: true,
    },
    toFlight: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
const Ticker= mongoose.model("Ticker", tickerSchema);
export default Ticker
