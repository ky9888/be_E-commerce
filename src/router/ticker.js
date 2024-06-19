import { Router } from "express";
import { createTicker, getTicker, getTickerFlightID } from "../controllers/airTicker.js";
const  routerTicker= Router();

routerTicker.post("/createTicker",createTicker );
routerTicker.get("/getTicker",getTicker );
routerTicker.get("/flightID/:id",getTickerFlightID );


export default routerTicker;