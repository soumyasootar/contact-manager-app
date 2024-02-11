const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, "Pls add the username"] },
    email: {
      type: String,
      required: [true, "Pls add the email"],
      unique: [true, " Email Already taken"],
    },
    password: {
      type: String,
      required: [true, "Pls add the password"],
    },
    savedContacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "contacts"
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
