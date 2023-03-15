<script lang="ts">
  import DefinitionBlurb from "$lib/components/DefinitionBlurb.svelte";


  export let data;
</script>

<section>
  <h1>Definition of the Day</h1>
  <div class="definition-of-the-day">
    <a  href={`/definitions/${data.definitionOfTheDay.slug}`}>{data.definitionOfTheDay.entry}</a>
    <p>{data.definitionOfTheDay.description}</p>
    <div class="read-more">
      <a href={`/definitions/${data.definitionOfTheDay.slug}`}>read more</a>
    </div>
  </div>
</section>

<section>
  <h2>Latest Definitions</h2>
  <ol>
    {#each  data.latestDefinitions as definition}
      <DefinitionBlurb {definition} />
    {/each}
  </ol>
</section>

<style>
  section:first-of-type {
    margin:0px 0px 100px;
  }
  section:first-of-type .definition-of-the-day {
    margin-left: 40px;
  }

  section:first-of-type .definition-of-the-day > a {
    font-size: 1.3em;
    margin-bottom:2em;
    text-transform: capitalize;
  }
  section:first-of-type .read-more{
    display:block;
    text-align:center;
    margin-left: -40px;
  }
</style>