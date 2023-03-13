<script lang="ts">
  export let data : GlossaryDefinition;
</script>

{ #if !!data }
  <h1>{data.entry}</h1>

  <h2>Mundane Description</h2>
  <p>
    {@html data.description}
  </p>

  <h2>Context</h2>
  <p>
    {@html data.advanced_description}
  </p>

  <h3>Author</h3>
  <dl>
    <span>
      <dt>Entry Author:</dt>
      <dd>{data.author}</dd>
    </span>
    <dt>Date Added:</dt>
    <dd>{data.createdAt}</dd>
  </dl>

  {#if !!data.tags?.length}
    <h3>Tags</h3>
    <ul>
      {#each data.tags as {tag}}
        <li>{tag}</li>
      {/each}
    </ul>
  {/if}

{:else}
  <strong>Loading...</strong>
{/if }
