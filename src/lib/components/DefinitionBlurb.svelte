<script lang="ts">
  import { formatDate } from "$lib/utils/date.util";
  export let definition : GlossaryDefinition;
</script>

<li>
  <a href={`/definitions/${definition.slug}`}>{definition.entry}</a>
  <span>{formatDate(definition.createdAt)}</span>
  <p>{definition.description}</p>
</li>

<style>
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