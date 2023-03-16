import { API_ENDPOINT, STRAPI_KEY } from "$env/static/private";
import { error } from "@sveltejs/kit";

export async function load(ctx) {
  const { fetch, locals, params, platform, getClientAddress, route, url, request } = ctx;

  try {
    const response = await fetch(`${API_ENDPOINT}definitions/`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${STRAPI_KEY}`,
      },
    });

    const { data: definitionData }: StrapiDataResponse<GlossaryDefinition> = await response.json();

    const definitions = definitionData.map((item) => item.attributes);
    if (!definitions || !definitions?.length) {
      throw new Error("No definition data");
    }

    return { definitions };
  } catch (e) {
    console.error(e);
    throw error(404, "Not found");
  }
}
