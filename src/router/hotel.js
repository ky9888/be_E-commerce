import { Router } from "express";
import { createHotel, getAllHotel } from "../controllers/hotel.js";

const  routerHotel= Router();

routerHotel.post("/createHotel", createHotel);
routerHotel.get("/allHotel", getAllHotel);


export default routerHotel;

