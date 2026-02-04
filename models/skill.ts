import mongoose, { Schema, model, models, Model } from "mongoose";

export interface ISkill extends Document {
  _id?: string;
  name: string;
  description: string;
  icon: string;
  projects: string;
}
const userSchema = new Schema<ISkill>(
  {
    name: { type: String },
    description: { type: String }, // Password is optional
    icon: { type: String, required: true, unique: true },
    projects: [{ title: String, link: String }],
  },
  { timestamps: true }
);
// export default models.User || model<IUser>("User", userSchema);

export const Skill: Model<ISkill> =
  models.Skill || model<ISkill>("Skill", userSchema);

export default mongoose.models.Skill ||
  mongoose.model<ISkill>("Skill", userSchema);
