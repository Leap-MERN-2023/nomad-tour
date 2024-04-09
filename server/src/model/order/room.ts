import { Schema, model } from "mongoose";

interface IRoom {
  user: string;
  hotel: string;
  room: string;
  checkInDate: string;
  checkOutDate: string;
}

const RoomSchema: Schema<IRoom> = new Schema<IRoom>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  hotel: {
    type: Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  room: {
    type: Schema.Types.ObjectId ,
    ref: "Room",
    required: true,
  },
  checkInDate: {
    type: String,
    required: true,
  },
  checkOutDate: {
    type: String,
    required: true,
  },
});

const Room = model<IRoom>("Room", RoomSchema);
export default Room;
