import { API_ENDPOINT, STRAPI_KEY } from "$env/static/private";
import { error } from "@sveltejs/kit";

export async function load(ctx) {
  const { fetch, locals, params, platform, getClientAddress, route, url, request } = ctx;

  try {
    const response = await fetch(`${API_ENDPOINT}definitions?sort[0]=createdAt:desc`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${STRAPI_KEY}`,
      },
    });

    const { data }: StrapiDataResponse<GlossaryDefinition> = await response.json();
    if (!data) {
      throw new Error("No definition data");
    }

    const definitions = data.map((item) => item.attributes);
    console.log({ definitions });
    if (!definitions.length) {
      throw new Error("No definition data");
    }

    const latestDefinitions = definitions.slice(0, 3);
    const definitionOfTheDay = definitions[Math.floor(Math.random() * definitions.length - 1) + 1];

    return { latestDefinitions, definitionOfTheDay };
  } catch (e) {
    console.error(e);
    throw error(404, "Not found");
  }
}
