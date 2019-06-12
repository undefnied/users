import mongoose from "./Database";

export const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String },
    fullname: { type: String }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
