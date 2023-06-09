import { API_ENDPOINT, STRAPI_KEY } from "$env/static/private";
import { marked } from "marked";

export async function load({ params }) {
  const response = await fetch(`${API_ENDPOINT}definitions?filters[slug][$eq]=${params.slug}&populate=*`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRAPI_KEY}`,
    },
  });

  const { data: responseData }: StrapiDataResponse<StrapiDataGlossaryDefinition> = await response.json();
  const definition = responseData[0].attributes;
  const { description, advanced_description, tags } = definition;

  const updatedDefinition: GlossaryDefinition = {
    ...definition,
    tags: tags.data.map((item) => ({ tag: item.attributes.tag, slug: item.attributes.slug })),
    description: marked.parse(description),
  };

  if(advanced_description){
    updatedDefinition.advanced_description = marked.parse(advanced_description);
  }

  return updatedDefinition;
}
