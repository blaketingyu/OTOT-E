import mongoose, {Schema, Model, Document} from "mongoose";

type ContactDocument = Document & {
  name: String;
  email: String;
  gender: String;
  phone: String;
  create_date: Date;
}

// Setup schema
const contactSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});

// Export Contact model
const Contact: Model<ContactDocument> = mongoose.model<ContactDocument>("contact", contactSchema);
export {Contact, ContactDocument};

