<script lang="ts">
import DefinitionSection from "$lib/components/DefinitionSection.svelte";
import ContextSection from "$lib/components/ContextSection.svelte";
import TagsSection from "$lib/components/TagsSection.svelte";
import { formatDate } from "$lib/utils/date.util";

  export let data : GlossaryDefinition;
</script>

{ #if !!data }
  <h1>{data.entry}</h1>

  <DefinitionSection description={data.description} />

  <ContextSection context={data.advanced_description} />

  <div class="bottom-row">
    {#if !!data.tags?.length}
      <TagsSection tags={data.tags} />
    {/if}
    
    {#if !!data.link}
      <div>
          <h3>Links</h3>
          <p>
            <a href={data.link}>Relevant Link</a>
          </p>
      </div>
    {/if}

    <div>
      <h3>Author</h3>
      <dl>
        <span>
          {data.author}
        </span>
        <span class="date">
          {formatDate(data.createdAt)}
        </span>
      </dl>
    </div>
 
  </div>
  

{:else}
  <strong>Loading...</strong>
{/if }


<style>
  .bottom-row{
    display:flex;
    width:100%;
    justify-content: space-between;
  }
  dl span {
    display:block;
  }

  dl span.date{
  
    opacity:.5;
    font-size: .8em;

  }
</style>