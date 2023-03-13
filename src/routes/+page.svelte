<script lang="ts">
import DefinitionBlurb from "$lib/components/DefinitionBlurb.svelte";


  export let data;
</script>

<section>
  <h1>Latest Definitions</h1>
  <ol>
    {#each data.definitions as definition}
      <DefinitionBlurb {definition} />
    {/each}
  </ol>
</section>
