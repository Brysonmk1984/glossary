<script lang="ts">
  import { page } from "$app/stores";
import DefinitionBlurb from "$lib/components/DefinitionBlurb.svelte";
  const tag = $page.params.slug;

  export let data;

</script>


<h1>[ {tag} ] <span>Related Definitions</span></h1>

{#if !!data.definitionList.length}
  <ol>
    {#each data.definitionList as definition}
      <DefinitionBlurb {definition} />
    {/each}
</ol>
{:else}
  <div>
    <strong>No definitions for this tag.</strong>
  </div>
{/if}

<style>
  h1 span{
    opacity: .5;
    font-size: .7em;
    display:block;
    margin-top: .5em;
  }
  div {
    text-align:center;
    margin-top: 60px;
  }
</style>