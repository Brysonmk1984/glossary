import { STRAPI_KEY } from "$env/static/private";

export async function load({ params }) {
  const response = await fetch(`http://127.0.0.1:1337/api/tags?filters[slug][$eq]=${params.slug}&populate=*`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRAPI_KEY}`,
    },
  });

  const { data: responseData }: StrapiDataResponse<StrapiDataGlossaryTag> = await response.json();
  const matchingTag = responseData[0].attributes;
  console.log(matchingTag);

  const definitionList = matchingTag.definitions.data.map((def) => def.attributes);

  console.log({ definitionList });
  return { definitionList };
}