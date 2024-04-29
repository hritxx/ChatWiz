import User from "../models/user.model.js";

export const getUsersforSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in userController", error.message);
    res.status(500).json({ error: "Inetrnal serevr error" });
  }
};
