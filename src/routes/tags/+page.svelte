<script lang="ts">
  import { PUBLIC_STRAPI_KEY } from '$env/static/public';
  import { onMount } from 'svelte';
  
  
    export let data : GlossaryTag[];
    onMount(async () => {
      const response = await fetch("http://127.0.0.1:1337/api/tags?populate=*", {
        method: "GET",
        headers: {
          Authorization:
          `Bearer ${PUBLIC_STRAPI_KEY}`,
        },
      });
  
      try{
        const cake : StrapiDataResponse<GlossaryTag> = (await response.json());
        const { data : tagData } = cake;
          console.log({tagData});
        const tags = tagData.map((item) => item.attributes);
        if (!tags || !tags?.length) {
          throw new Error("No tag data");
        }
        
        data = tags;
        
        console.log({data})
      }catch(error){
        console.error(error);
      }
  
    });
  
  
  </script>


<h1>Tags</h1>
<ul>
  { #if !!data && data.length }
    {#each data as tag }
      <li><a href={`/tags/${tag.slug}`} >{ tag.tag }</a></li>
    {/each}
  { /if }
</ul>