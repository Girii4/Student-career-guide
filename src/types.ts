export interface Company {
  id: string;
  name: string;
  description: string;
  jobRoles: JobRole[];
  preferredSkills: string[];
  preferredLanguages: string[];
}

export interface JobRole {
  title: string;
  description: string;
  requiredSkills: string[];
  studyMaterials: string[];
}

export interface Student {
  id: string;
  name: string;
  favoriteCompanyId: string;
}