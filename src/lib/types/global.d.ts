declare global {
  export interface StrapiDataResponse<T> {
    data: Array<StrapiData<T>>;
  }
  export interface StrapiData<T extends StrapiDataGlossaryDefinition | GlossaryTag> {
    id: number;
    attributes: T;
  }

  export interface StrapiDataGlossaryDefinition {
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
    tags: { data: Array<StrapiData<GlossaryTag>> };
  }

  export interface StrapiDataGlossaryTag {
    tag: string;
    slug: string;
    updatedAt: string;
    createdAt: string;
    definitions: { data: Array<StrapiData<GlossaryDefinition>> };
  }

  export type GlossaryDefinition = Omit<StrapiDataGlossaryDefinition, "tags"> & {
    tags: Omit<GlossaryTag, "updatedAt", "createdAt">;
  };
  export type GlossaryTag = Omit<StrapiDataGlossaryTag, "definition"> & {
    definitions: GlossaryDefinition;
  };
}

export interface GlossaryTagOnDefinition {
  tag: string;
  slug: string;
}
export {};
