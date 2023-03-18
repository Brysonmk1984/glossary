<script lang="ts">


  let entry = "";
  $: entryAsSlug = entry.toLowerCase().replace(/[ _]/g, "-");

</script>

<h1>Contribute a definition</h1>

<div>
  <form method="POST">

      <div class="input-container">
        <input name="entry" type="text" maxLength="50" placeholder="Entry (required)" bind:value={entry} required />
        <input name="slug" type="text" maxLength="50" placeholder="Slug" bind:value={entryAsSlug} readonly required />
      </div>
      <textarea name="description" maxLength="1500" placeholder="Entry Definition (required)" required></textarea>
      <textarea name="advanced_description" placeholder="Extra Context"></textarea>
      <div class="input-container">
        <input name="author" type="text" maxLength="50" placeholder="Author (required)" required />
        <input name="link" type="text" maxLength="200" placeholder="Link" />
      </div>
      <button>Send</button>
  
  </form>
</div>

<style>
  form {
    margin:20px auto 0px;
    margin-bottom: 60px;
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
    width: 100%;
    margin: 10px 0px;
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
</style>