const User = require("../models/user");

const user = async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user)
    return res.status(400).send("Process failed: user without permission");
  next();
};

module.exports = user;
