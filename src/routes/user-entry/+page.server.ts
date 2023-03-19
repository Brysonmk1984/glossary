import { API_ENDPOINT, STRAPI_KEY } from "$env/static/private";
import { fail } from "@sveltejs/kit";

type PayloadProperties<T> = {
  [P in keyof T]: T[P] | null;
} & {
  link?: string;
  advanced_description?: string;
};
type NullableString = string | null;

function isValid(value: string | null | undefined) {
  if (!value) {
    return false;
  }
  return !!value.length;
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      const payload: Partial<PayloadProperties<GlossaryDefinition>> = {
        entry: data.get("entry") as NullableString,
        author: data.get("author") as NullableString,
        slug: data.get("slug") as NullableString,
        publishedAt: null,
        description: data.get("description") as NullableString,
      };

      const { entry, author, slug, description } = payload;

      if (!Object.hasOwn(payload, "entry") || !isValid(entry)) {
        return fail(400, { field: "entry", message: "Validation Error: Entry is required." });
      } else if (!Object.hasOwn(payload, "author") || !isValid(author)) {
        return fail(400, { field: "author", message: "Validation Error: Author is required." });
      } else if (!Object.hasOwn(payload, "slug") || !isValid(slug)) {
        return fail(400, { field: "slug", message: "Validation Error: Slug is required." });
      } else if (!Object.hasOwn(payload, "description") || !isValid(description)) {
        return fail(400, { field: "description", message: "Validation Error: Entry Definition is required." });
      }

      const link = data.get("link") as NullableString;
      if (link && isValid(payload.link)) {
        payload.link = link;
      }

      const advanced_description = data.get("advanced_description") as NullableString;
      if (advanced_description && isValid(payload.link)) {
        payload.advanced_description = advanced_description;
      }

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
    } catch (e) {
      const error = e instanceof Error ? e : new Error(e);
      return fail(500, { message: `Unexpected Server Error: ${error}` });
    }
  },
};
