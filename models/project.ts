import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  fileUrl: string;
  clientName: string;
  projectType: string;
  label: string;
  projectDate: Date;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    fileUrl: { type: String, required: true },
    clientName: { type: String, required: true },
    projectType: { type: String, required: true },
    label: { type: String, required: true },
    projectDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
