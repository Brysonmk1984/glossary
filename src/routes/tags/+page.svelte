<script lang="ts">
  import { PUBLIC_STRAPI_KEY } from '$env/static/public';
  import { onMount } from 'svelte';
  
  
    export let data : GlossaryTag[];
    onMount(async () => {
      const response = await fetch("http://127.0.0.1:1337/api/tags?sort[0]=tag&populate=*", {
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


<h1>[ Tags ]</h1>
<ul>
  { #if !!data && data.length }
    {#each data as tag }
      <li><a href={`/tags/${tag.slug}`} >{ tag.tag }</a></li>
    {/each}
  { /if }
</ul>

<style>
  h1{
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 5px 15px;
  }
  li:last-child {
    flex-grow: 100;
    margin-left: 30px;
  }
  li {
    font-size: 1.3em;

    margin-bottom:2em;
  }
  li a {
    text-transform: capitalize;
  }
  li span {
    opacity:.5;
    font-size: .6em;
    margin-left:10px;
  }
  li p {
    font-size: .7em;
    margin: 5px 0px 0px;
  }
</style>