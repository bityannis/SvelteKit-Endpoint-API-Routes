<script>
	export let data;
	console.log(data);
</script>

<div>
	{#each data.posts as post}
		<a href="/posts/{post.id}">
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</a>
	{/each}
</div>
