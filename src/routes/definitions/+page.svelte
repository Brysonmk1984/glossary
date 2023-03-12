<script lang="ts">
import { PUBLIC_STRAPI_KEY } from '$env/static/public';
import { onMount } from 'svelte';


  export let data : GlossaryDefinition[];
  onMount(async () => {
    const response = await fetch("http://127.0.0.1:1337/api/definitions", {
      method: "GET",
      headers: {
        Authorization:
        `Bearer ${PUBLIC_STRAPI_KEY}`,
      },
    });

    try{
      const { data : definitionData } : StrapiDataResponse<GlossaryDefinition> = (await response.json());
        console.log({definitionData});
      const definitions = definitionData.map((item) => item.attributes);
      if (!definitions || !definitions?.length) {
        throw new Error("No definition data");
      }

      data = definitions;

   
    }catch(error){
      console.error(error);
    }

  });


</script>

<h1>Our Dystopia</h1>
<h2>A Glossary</h2>
<section>
  { #if !!data && data.length }
    <ul>
      {#each data as definition}
        <li><a href={`/definitions/${definition.slug}`}>{definition.entry}</a></li>
      {/each}
    </ul>
  {:else}
    <strong>Loading...</strong>
  {/if}
</section>
