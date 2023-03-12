<script lang="ts">
  import {page} from "$app/stores";
  import { PUBLIC_STRAPI_KEY } from "$env/static/public";
  import { marked }from "marked";
  import { onMount } from "svelte";
  
  const slug = $page.params.slug;

  export let data : GlossaryDefinition;
  onMount(async () => {
    
    const response = await fetch(`http://127.0.0.1:1337/api/definitions?filters[slug][$eq]=${slug}`, {
      method: "GET",
      headers: {
        Authorization:
        `Bearer ${PUBLIC_STRAPI_KEY}`,
      },
    });


    const {data : responseData} : StrapiDataResponse  = await response.json();
    data = responseData[0].attributes;
    const {description, advanced_description} = data;
 
    data.description = marked.parse(description);
    data.advanced_description = marked.parse(advanced_description);
    console.log({data});
  });


</script>

{ #if !!data }
  <h1>{data.phrase}</h1>

  <h2>Mundane Description</h2>
  <p>
    {@html data.description}
  </p>

  <h2>Context</h2>
  <p>
    {@html data.advanced_description}
  </p>

  <dl>
    <span>
      <dt>Entry Author:</dt>
      <dd>{data.author}</dd>
    </span>
    <dt>Date Added:</dt>
    <dd>{data.createdAt}</dd>
  </dl>
{:else}
  <strong>Loading...</strong>
{/if }
