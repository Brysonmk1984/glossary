<script lang="ts">
import { applyAction, enhance } from '$app/forms';
import { invalidateAll } from '$app/navigation';
import ErrorMessage from '$lib/components/ErrorMessage.svelte';
import SuccessMessage from '$lib/components/SuccessMessage.svelte';



  let entry = "";
  $: entryAsSlug = entry.toLowerCase().replace(/[ _]/g, "-").replace(/[.,;:/'"{}\[\]()?<>`~!@#$%^&*|\\]/g, "");
	export let data;
  export let form : { message : string, field : string | null } ;

  $: form
  export let successfulSubmission = false;
</script>

<h1>Contribute a definition</h1>

{#if successfulSubmission}
  <SuccessMessage />
{:else}
  <div>
    {#if !!form?.message}
      <ErrorMessage error={form?.message} />

    {:else}
      <p>
        We're looking to grow our number of definitions in order to make this site more useful. Please submit your own with the form below and we'll review it to verify it's of reasonable quality. If so, it will be published along side the rest of the definitions.
      </p>
    {/if}
    <form method="POST" use:enhance={(ctx) => {
      // `form` is the `<form>` element
      // `data` is its `FormData` object
      // `action` is the URL to which the form is posted
      // `cancel()` will prevent the submission
        
      return async ({ result }) => {
        // `result` is an `ActionResult` object

        form = result.data;

        if (result.type === 'success') {
          successfulSubmission = true;
        }
      };
    }}>

        <div class="input-container">
          <input class={ form?.field === 'entry' ? "invalid" : "" } name="entry" type="text" minLength="3" maxLength="50" placeholder="Entry (required)" bind:value={entry} required />
          <input class={ form?.field === 'slug ' ? "invalid" : ""} name="slug" type="text" maxLength="50" placeholder="Slug" bind:value={entryAsSlug} readonly required />
        </div>
        <textarea class={ form?.field === 'description' ? "invalid" : ""} name="description" minLength="50" maxLength="1000" placeholder="Entry Definition (required)"></textarea>
        <span class="character-count">50 - 1,000 characters</span>
        
        <textarea class={ form?.field === 'advanced_description' ? "invalid" : ""} name="advanced_description" minLength="50" placeholder="Extra Context"></textarea>
        
        <div class="input-container">
          <input class={ form?.field === 'author' ? "invalid" : ""} name="author" type="text" minLength="3" maxLength="50" placeholder="Author (required)" required />
          <input class={ form?.field === 'link' ? "invalid" : "" } name="link" type="text" minLength="10" maxLength="200" placeholder="Link" />
        </div>
        <button>Send</button>
    
    </form>
  </div>
{/if}
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