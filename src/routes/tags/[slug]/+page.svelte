<script lang="ts">
  import { page } from "$app/stores";
  const tag = $page.params.slug;

  export let data;

  console.log(data);
</script>


<h1>{tag} Tag</h1>
<h2>Related Definitions</h2>

{#if data.definitionList}
  {#each data.definitionList as definition}
    <li><a href={`/definitions/${definition.slug}`}>{definition.entry}</a></li>
  {/each}
{/if}