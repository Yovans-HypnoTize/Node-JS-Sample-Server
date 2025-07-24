const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Create User
router.post("/", async (req, res) => {
  const user = new User(req.body);
  const savedData = await user.save();
  res.status(201).json(savedData);
});

//Get All Users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

//Get Single User
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
});

//Update User
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(user);
});

//Delete User
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
