<script lang="ts">
import { PUBLIC_STRAPI_KEY, PUBLIC_API_ENDPOINT } from '$env/static/public';
import DefinitionBlurb from '$lib/components/DefinitionBlurb.svelte';
import { onMount } from 'svelte';


  export let data : GlossaryDefinition[];
  onMount(async () => {
    const response = await fetch(`${PUBLIC_API_ENDPOINT}definitions?sort[0]=entry`, {
      method: "GET",
      headers: {
        Authorization:
        `Bearer ${PUBLIC_STRAPI_KEY}`,
      },
    });

    try{
      const { data : definitionData } : StrapiDataResponse<GlossaryDefinition> = (await response.json());

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

<h1>Definitions</h1>
<section>
  { #if !!data && data.length }
    <ul>
      {#each data as definition}
        <DefinitionBlurb {definition} />
      {/each}
    </ul>
  {:else}
    <strong>Loading...</strong>
  {/if}
</section>

<style>
  ul {
    margin-left :40px;
  }
</style>
