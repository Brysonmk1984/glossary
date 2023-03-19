import { API_ENDPOINT, STRAPI_KEY } from "$env/static/private";

export async function load({ params }) {
  const response = await fetch(`${API_ENDPOINT}tags?filters[slug][$eq]=${params.slug}&populate=*`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRAPI_KEY}`,
    },
  });

  const { data: responseData }: StrapiDataResponse<StrapiDataGlossaryTag> = await response.json();
  const matchingTag = responseData[0].attributes;

  const definitionList = matchingTag.definitions.data.map((def) => def.attributes);

  return { definitionList };
}
