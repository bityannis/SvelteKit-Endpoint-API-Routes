export const GET = async ({ params }) => {
	console.log(params);
	const res = await fetch(`https://dummyjson.com/posts/${params.postId}`);
	const data = await res.json();

	return new Response(JSON.stringify(data));
};
