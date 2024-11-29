import { User }from "../models/userModel.js";

const register = async (req, res) => {
    try {
      console.log(req.body)
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const user = await User.create({
      fullname,
      email,
      password,
    });
      
    res.status(201).json({
        message: "User created successfully",
        data: user,
        success: true
    });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
  }
};

const profile = async (req, res, next) => {
  try {
    const { email, username, bio, profilePic } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Unknown User",
      });
    }
      if (!username) {
        return res.status(400).json({
          message: "Please provide a username",
        });
      }

        const user = await User.findOneAndUpdate({email}, {username, bio, profilePic}, {new: true});
        res.status(200).json({
            success: true,
          data: user,
          message: "Profile updated successfully",
        });
    } catch (error) {
        res.status(500).json({
          message: error.message
        });
    }
};

export { register, profile};
