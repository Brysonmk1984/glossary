import { API_ENDPOINT, STRAPI_KEY } from "$env/static/private";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const payload = {
      entry: data.get("entry"),
      author: data.get("author"),
      slug: data.get("slug"),
      publishedAt: null,
      description: data.get("description"),
    };
    const link = data.get("link");
    if (link) {
      payload.link = link;
    }

    const advanced_description = data.get("advanced_description");
    if (advanced_description) {
      payload.advanced_description = advanced_description;
    }

    try {
      const response = await fetch(`${API_ENDPOINT}definitions`, {
        method: "POST",
        mode: "cors",

        body: JSON.stringify({ data: payload }),
        headers: {
          Authorization: `Bearer ${STRAPI_KEY}`,
          "Content-Type": "application/json",
        },
      });

      const value = await response.json();

      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },
};
