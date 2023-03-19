<script lang="ts">
import ErrorMessage from '$lib/components/ErrorMessage.svelte';



  let entry = "";
  $: entryAsSlug = entry.toLowerCase().replace(/[ _]/g, "-");
	export let data;
  export let form : { message : string, field : string | null } ;

  $: form

</script>

<h1>Contribute a definition</h1>

<div>

  {#if !!form?.message}
    <ErrorMessage error={form?.message} />

  {:else}
    <p>
      We're looking to grow our number of definitions in order to make this site more useful. Please submit your own with the form below and we'll review it to verify it's of sufficient quality. If so, it will be published along side the rest of the definitions.
  {/if}
  <form method="POST">

      <div class="input-container">
        <input class={ form?.field === 'entry' ? "invalid" : "" } name="entry" type="text" maxLength="50" placeholder="Entry (required)" bind:value={entry} required />
        <input class={ form?.field === 'slug ' ? "invalid" : ""} name="slug" type="text" maxLength="50" placeholder="Slug" bind:value={entryAsSlug} readonly required />
      </div>
      <textarea class={ form?.field === 'description' ? "invalid" : ""} name="description" maxLength="1500" placeholder="Entry Definition (required)" ></textarea>
      <span class="character-count">Max: 1,500 characters</span>
      
      <textarea class={ form?.field === 'advanced_description' ? "invalid" : ""} name="advanced_description" placeholder="Extra Context"></textarea>
      
      <div class="input-container">
        <input class={ form?.field === 'author' ? "invalid" : " "} name="author" type="text" maxLength="50" placeholder="Author (required)" required />
        <input class={ form?.field === 'link' ? "invalid" : "" } name="link" type="text" maxLength="200" placeholder="Link" />
      </div>
      <button>Send</button>
  
  </form>
</div>
<p>
  Email questions or comments to <a href="mailto:dystopiaglossary@pm.me">dystopiaglossary@pm.me</a>.
</p>
<style>
  form {
    margin:20px auto 0px;
    margin-bottom: 40px;
  }
  .input-container{
    display:flex;
    gap: 20px;
  }

  form input{
    width: 100%;
    margin: 10px 0px;
    padding:10px 20px;
    font-family: Helvetica, Arial, sans-serif;
  }
  form input[name="slug"]{
    cursor:not-allowed;
    color:rgba(0,0,0,.6);
  }
  form textarea{
    font-size: 16px;
    max-width:992px;
    min-height:120px;
    width: 100%;
    margin: 10px 0px 0px;
    padding:10px 20px;
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box
  }
  form button{
    font-size: 16px;
    display:block;
    width: 100%;
    padding:10px 20px;
    margin-top:40px;
    cursor: pointer;
    font-family: Helvetica, Arial, sans-serif;
    background-color: rgba(0,0,0,.7);
    color: white;
    border:none;
  }
  form button:hover{
    transition: background-color 0.2s linear;
    background-color: #ff3d00;
  }

  p{
    text-align:center;
    margin-bottom: 40px;
  }

  .invalid{
    border: solid 1px #ff3d00;
    background-color:rgba(255,0,61,.1)
  }
  .character-count{
    font-size:small;
    color: rgba(0,0,0,.6);
    font-family:Arial, Helvetica, sans-serif;
    margin-bottom: 20px;
    display:block;
  }
</style>