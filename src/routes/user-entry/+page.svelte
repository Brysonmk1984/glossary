<script lang="ts">

  export let data;
</script>

<h1>Contribute a definition</h1>

<div>
  <form method="POST">
    <div>
      <input name="author" type="text" placeholder="author" />
      <input name="entry" type="text" placeholder="entry" />
      <input name="slug" type="text" placeholder="slug" disabled />
      <input name="link" type="text" placeholder="link" />
      <textarea name="description" placeholder="Entry Definition"></textarea>
      <textarea name="advanced_description" placeholder="Context"></textarea>
      <button>Send</button>
    </div>
  </form>
</div>

<style>
  div {
    margin:20px auto 0px;
  }

  form div input{
    width: 100%;
    margin: 10px 0px;
  }
  form div textarea{
    width: 100%;
    margin: 10px 0px;
  }
  form div button{
    display:block;
    width: 100%
  }
</style>