const User = require("../Model/user");
const bcrypt = require("bcryptjs");

//add user
exports.addUser = async (req, res) => {
  const { fname, lname, email, password } = req.body;
  if (!fname || !lname || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  const hashedPw = await bcrypt.hash(password, 12);
  const user = new User({
    fname,
    lname,
    email,
    password: hashedPw,
  });
  try {
    const savedUser = await user.save();
    res.send({ message: "success", user: savedUser });
  } catch (err) {
    res.status(400).send(err);
  }
};

// login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }
    res.status(200).json({ message: "Login successful", user: user });
  } catch (err) {
    res.status(400).send(err);
  }
};
