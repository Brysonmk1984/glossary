<script lang="ts">
import DefinitionSection from "$lib/components/DefinitionSection.svelte";
import ContextSection from "$lib/components/ContextSection.svelte";
import TagsSection from "$lib/components/TagsSection.svelte";

  export let data : GlossaryDefinition;
</script>

{ #if !!data }
  <h1>{data.entry}</h1>

  <DefinitionSection description={data.description} />

  <ContextSection context={data.advanced_description} />


  <!-- <h3>Author</h3>
  <dl>
    <span>
      <dt>Entry Author:</dt>
      <dd>{data.author}</dd>
    </span>
    <dt>Date Added:</dt>
    <dd>{data.createdAt}</dd>
  </dl> -->

  {#if !!data.tags?.length}
    <TagsSection tags={data.tags} />
  {/if}

{:else}
  <strong>Loading...</strong>
{/if }
