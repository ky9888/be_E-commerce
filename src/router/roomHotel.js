import { Router } from "express";
import { createRoomHotel, getAllRoomHotel, getRoomHotel, updateRoomHotel } from "../controllers/roomHotel.js";

const  routerRoomHotel= Router()

routerRoomHotel.post("/createRoomHotel",createRoomHotel );
routerRoomHotel.get("/allRoomHotel",getAllRoomHotel );
routerRoomHotel.put("/updateRoomHotel/:id",updateRoomHotel );
routerRoomHotel.get("/getRoomHotel/:id",getRoomHotel );


export default routerRoomHotel;