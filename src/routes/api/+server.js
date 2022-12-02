//This create our own API. It fetch data from external API and create our own endpoint at http://localhost:5174/api which is equivalent to https://dummyjson.com/posts
export const GET = async ({ request, url }) => {
	const authHeader = request.headers.get('Authorization');
	console.log(authHeader);

	const limit = Number(url.searchParams.get('limit') ?? '12');
	const res = await fetch(`https://dummyjson.com/posts?limit=${limit}`);
	const data = await res.json();

	// if (authHeader != 'MyAuthHeader') {
	// 	return new Response(JSON.stringify({ message: 'Invalid auth header' }), { status: 401 });
	// }

	return new Response(JSON.stringify(data), { status: 201 });
};

export const POST = async ({ request }) => {
	const authHeader = request.headers.get('Authorization');
	const body = await request.json();
	console.log(body);

	if (authHeader != 'MyAuthHeader') {
		return new Response(JSON.stringify({ message: 'Invalid auth header' }), { status: 401 });
	}
	return new Response(JSON.stringify(body), { status: 201 });
};
