export interface Contact {
  url: string;
  type: string;
}

export interface DevelopersType {
  id: string;
  name: string;
  avatar?: string;
  title: string;
  company?: string;
  blurb: string;
  skills: string[];
  contact: Contact[];
}
