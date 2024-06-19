import { Router } from "express";
import { createFlight, getallFlight } from "../controllers/flight.js";
const  routerflight= Router();

routerflight.post("/createFlight", createFlight);
routerflight.get("/allFlight", getallFlight);



export default routerflight;