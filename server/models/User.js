const mongoose = require("mongoose");

const { Schema } = mongoose;
const opts = {
  toJSON: {
    virtuals: true
  }
};
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      required: false
    },
  
  },
  opts
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
