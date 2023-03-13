<script lang="ts">
  export let tags : string[];
</script>

<section>
  <h3>Tags</h3>
    <ul>
      {#each tags as {tag, slug}}
        <li><a href={`/tags/${slug}`}>{tag}</a></li>
      {/each}
    </ul>
</section>

<style>
  ul {
    display:flex;
  }
  ul li {
    padding:5px;
    margin:0px 5px;
  }

  ul li:first-child {
    margin-left: 0px;
  }
  ul:last-child {
    margin-right: 0px;
  }
</style>