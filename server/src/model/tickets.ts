import { Document, Schema, model } from "mongoose";

interface ITickets extends Document {
  logo: String;
  name: String;
}

const TicketsSchema: Schema<ITickets> = new Schema<ITickets>({
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    unique: true,
  },
});

const Tickets = model<ITickets>("Tickets", TicketsSchema);
export default Tickets;
