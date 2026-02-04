export type ProfileInfoItem = {
  label: string;
  value: string;
  valueColor?: string;
};

export type Language = {
  name: string;
  level: string;
  bar: string;
};

export type Skill = {
  name: string;
  level: string;
  bar: string;
};

export type Service = {
  title: string;
  desc: string;
  iconKey: string;
};

export type Hero = {
  name: string;
  rolePrimary: string;
  roleSecondary: string;
  description: string;
  ctaLabel: string;
  backgroundImageUrl: string;
  heroImageUrl: string;
};

export type Sidebar = {
  profileImageUrl: string;
  displayName: string;
  title: string;
  statusColor: string;
  profileInfo: ProfileInfoItem[];
  languages: Language[];
  skills: Skill[];
  extraSkills: string[];
  resumeUrl: string;
};

export type PortfolioContent = {
  hero: Hero;
  sidebar: Sidebar;
  services: Service[];
};
