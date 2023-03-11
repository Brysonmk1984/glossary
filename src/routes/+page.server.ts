import type { GlossaryDefinition, StrapiData } from "$lib/types/global";
import { error } from "@sveltejs/kit";

export async function load(ctx) {
  const {
    fetch,
    locals,
    params,
    platform,
    getClientAddress,
    route,
    url,
    request,
  } = ctx;
  console.log({ route, request });

  try {
    const response = await fetch("http://127.0.0.1:1337/api/definitions", {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization:
          "Bearer 79005116aa2952d63bbe439a56ab8095de9d2d64af8e16df4028bf477d56b34b6da20be9ed1867756ee1be1c71934b6b233b27a4dd3ffbb1f7cddc3bdf96cd9c56ed6f2dc4ff4ef0c1307d1cf3847c891286b55fa97715764016bbd1ff77eabf17b7d83c8d1997c7da56293754d954f95c9d8cfae147680e60e3a986f838ab90",
      },
    });

    const { data } = (await response.json()) as { data: StrapiData[] };

    const definitions = data.map((item: StrapiData) => item.attributes);
    if (!definitions.length) {
      throw new Error("No definition data");
    }

    return { definitions };
    console.log("DATA", data);
    //return data;
  } catch (e) {
    console.error(e);
    throw error(404, "Not found");
  }
}
