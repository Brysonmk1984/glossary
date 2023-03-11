export interface StrapiData {
  id: number;
  attributes: GlossaryDefinition;
}

export interface GlossaryDefinition {
  description: string;
  advanced_description: string;
  phrase: string;
  date: string;
  link: string;
  author: string;
  updatedAt: string;
  createdAt: string;
  publishedAt: string;
  slug: string;
}
