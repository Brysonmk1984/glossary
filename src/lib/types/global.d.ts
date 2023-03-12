declare global {
  export interface StrapiDataResponse<T> {
    data: Array<StrapiData<T>>;
  }
  export interface StrapiData<T extends GlossaryDefinition | GlossaryTag> {
    id: number;
    attributes: T;
  }

  export interface GlossaryDefinition {
    description: string;
    advanced_description: string;
    entry: string;
    date: string;
    link: string;
    author: string;
    updatedAt: string;
    createdAt: string;
    publishedAt: string;
    slug: string;
  }

  export interface GlossaryTag {
    tag: string;
    slug: string;
    updatedAt: string;
    createdAt: string;
  }
}
export {};
