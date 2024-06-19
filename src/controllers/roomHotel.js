import roomHotel from "../models/roomHotel.js";

export const createRoomHotel = async (req, res) => {
  const newRoomHotel = new roomHotel(req.body);

  try {
    const saveRoomHotel = await newRoomHotel.save();
    res.status(200).json(saveRoomHotel);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const getAllRoomHotel = async (req, res) => {
  try {
    const roomHotels = await roomHotel.find();
    return res.status(200).json({
      message: " thành công",
      data: roomHotels,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const updateRoomHotel = async (req, res) => {
  try {
    const updateRoomHotels = await roomHotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updateRoomHotels);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getRoomHotel = async (req, res, next) => {
  try {
    const hotel = await roomHotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};
