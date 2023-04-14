import mongoose, { type Model } from "mongoose";

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
};

const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default (mongoose.models.User as unknown as Model<User>) ||
  mongoose.model("User", UserSchema);
