<script>
  import {page} from "$app/stores";
  console.log($page);
  const slug = $page.params.slug;

  export let data;
  (async () => {
    
    // "http://127.0.0.1:1337/api/definitions/1"
    const response = await fetch(`http://127.0.0.1:1337/api/definitions?filters[slug][$eq]=${slug}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer 79005116aa2952d63bbe439a56ab8095de9d2d64af8e16df4028bf477d56b34b6da20be9ed1867756ee1be1c71934b6b233b27a4dd3ffbb1f7cddc3bdf96cd9c56ed6f2dc4ff4ef0c1307d1cf3847c891286b55fa97715764016bbd1ff77eabf17b7d83c8d1997c7da56293754d954f95c9d8cfae147680e60e3a986f838ab90",
      },
    });


    const {data : responseData}   = await response.json();
    data = responseData[0].attributes;
    console.log(data)
  })()


</script>


<h1>{ #if !!data?.phrase }
  {data.phrase}
  {:else}
  Loading...
{/if }</h1>

<p>
  {data.description}
</p>

<p>
  {data.advanced_description}
</p>

<dl>
  <span>
    <dt>Entry Author:</dt>
    <dd>{data.author}</dd>
  </span>
  <dt>Date Added:</dt>
  <dd>{data.createdAt}</dd>
</dl>
