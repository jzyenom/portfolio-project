import mongoose, { Schema, model, models, Document, Model } from "mongoose";

export interface IPortfolio extends Document {
  hero: {
    name: string;
    rolePrimary: string;
    roleSecondary: string;
    description: string;
    ctaLabel: string;
    backgroundImageUrl: string;
    heroImageUrl: string;
  };
  sidebar: {
    profileImageUrl: string;
    displayName: string;
    title: string;
    statusColor: string;
    profileInfo: { label: string; value: string; valueColor?: string }[];
    languages: { name: string; level: string; bar: string }[];
    skills: { name: string; level: string; bar: string }[];
    extraSkills: string[];
    resumeUrl: string;
  };
  services: { title: string; desc: string; iconKey: string }[];
}

const ProfileInfoSchema = new Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
    valueColor: { type: String, required: false },
  },
  { _id: false }
);

const LanguageSchema = new Schema(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    bar: { type: String, required: true },
  },
  { _id: false }
);

const SkillSchema = new Schema(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    bar: { type: String, required: true },
  },
  { _id: false }
);

const ServiceSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    iconKey: { type: String, required: true },
  },
  { _id: false }
);

const HeroSchema = new Schema(
  {
    name: { type: String, required: true },
    rolePrimary: { type: String, required: true },
    roleSecondary: { type: String, required: true },
    description: { type: String, required: true },
    ctaLabel: { type: String, required: true },
    backgroundImageUrl: { type: String, required: true },
    heroImageUrl: { type: String, required: true },
  },
  { _id: false }
);

const SidebarSchema = new Schema(
  {
    profileImageUrl: { type: String, required: true },
    displayName: { type: String, required: true },
    title: { type: String, required: true },
    statusColor: { type: String, required: true },
    profileInfo: { type: [ProfileInfoSchema], required: true },
    languages: { type: [LanguageSchema], required: true },
    skills: { type: [SkillSchema], required: true },
    extraSkills: { type: [String], required: true },
    resumeUrl: { type: String, required: true },
  },
  { _id: false }
);

const PortfolioSchema = new Schema<IPortfolio>(
  {
    hero: { type: HeroSchema, required: true },
    sidebar: { type: SidebarSchema, required: true },
    services: { type: [ServiceSchema], required: true },
  },
  { timestamps: true }
);

export const Portfolio: Model<IPortfolio> =
  models.Portfolio || model<IPortfolio>("Portfolio", PortfolioSchema);

export default mongoose.models.Portfolio ||
  mongoose.model<IPortfolio>("Portfolio", PortfolioSchema);
