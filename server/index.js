const express = require("express");
const mongoose = require("mongoose");
const CORS = require("cors");
const app = express();
const UserSchema = require("./models/User");
const User = require("./models/User");
app.use(express.json());
app.use(CORS());



mongoose
  .connect(
    "mongodb+srv://anushavan1:pass123@cluster0.siggk.mongodb.net/user?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("connect");
  })
  .catch((e) => {
    console.log("error", e);
  });



app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {
    console.log(error, "error user");
  }
});

app.post("/", async (req, res) => {
  console.log(res);

  const { name, email, contact, address, avatar } = req.body;
  const userCreation = new UserSchema({
    name: name,
    email: email,
    address: address,
    contact: contact,
  });
  try {
    const created = await userCreation.save();
    return res.status(200).json({
      data: created
    });
  } catch (error) {
    console.log(error);
  }
});



app.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
 })




app.listen(3001, () => {
  console.log("server3001");
});
console.log("start node");
