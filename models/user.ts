import mongoose, { Schema, model, models, Model, Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  role: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

// 🔐 Remove password from responses
userSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret.password;
    return ret;
  },
});

export const User: Model<IUser> =
  models.User || model<IUser>("User", userSchema);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);

// import mongoose, { Schema, model, models, Model } from "mongoose";

// export interface IUser extends Document {
//   _id?: string;
//   name: string;
//   email: string;
//   role: string;
//   password: string;
// }
// const userSchema = new Schema<IUser>(
//   {
//     name: { type: String, required: true },
//     password: { type: String, required: true }, // Password is optional
//     email: { type: String, required: true, unique: true },
//     role: { type: String, default: "user" }, // admin or user
//   },
//   { timestamps: true }
// );

// export const User: Model<IUser> =
//   models.User || model<IUser>("User", userSchema);

// export default mongoose.models.User ||
//   mongoose.model<IUser>("User", userSchema);
