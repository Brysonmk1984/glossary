import { STRAPI_KEY } from "$env/static/private";
import { marked } from "marked";

export function load({ params }) {
  async () => {
    const response = await fetch(`http://127.0.0.1:1337/api/definitions?filters[slug][$eq]=${params.slug}?populate=*`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${STRAPI_KEY}`,
      },
    });

    const { data: responseData }: StrapiDataResponse<GlossaryDefinition> = await response.json();
    const data = responseData[0].attributes;
    const { description, advanced_description } = data;

    return {
      description: marked.parse(description),
      advanced_description: marked.parse(advanced_description),
    };
  };
}
