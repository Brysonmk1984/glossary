import { STRAPI_KEY } from "$env/static/private";
import { error } from "@sveltejs/kit";

export async function load(ctx) {
  const { fetch, locals, params, platform, getClientAddress, route, url, request } = ctx;

  try {
    const response = await fetch("http://127.0.0.1:1337/api/definitions", {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${STRAPI_KEY}`,
      },
    });

    const { data }: StrapiDataResponse<GlossaryDefinition> = await response.json();

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
