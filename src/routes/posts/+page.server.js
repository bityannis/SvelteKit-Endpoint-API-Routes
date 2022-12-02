export const load = async ({ fetch }) => {
	const fetchPosts = async () => {
		const res = await fetch('/api');
		const data = await res.json();
		return data.posts;
	};

	return {
		posts: fetchPosts()
	};
};
