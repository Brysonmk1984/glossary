<script lang="ts">

  export let data;
</script>

<section>
  <h2>Latest Entries</h2>
  <ul>
    {#each data.definitions as definition}
      <li><a href={`/definitions/${definition.slug}`}>{definition.entry}</a></li>
    {/each}
  </ul>
</section>
