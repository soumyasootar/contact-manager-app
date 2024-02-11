const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add contact name"],
    },
    email: { type: String, required: [true, "Please add email"] },
    phone: {
      type: String,
      unique: [true,"Phone exists"],
      required: [true, "Please add Phone Number"],
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("contacts", contactSchema);
