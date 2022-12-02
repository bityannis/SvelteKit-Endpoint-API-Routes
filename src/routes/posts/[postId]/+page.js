export const load = async ({ fetch, params }) => {
	const fetchOnePost = async (id) => {
		// const res = await fetch(`https://dummyjson.com/posts/${id}`);
		const res = await fetch(`/api/${id}`);
		const data = await res.json();
		return data;
	};

	return {
		post: fetchOnePost(params.postId)
	};
};
