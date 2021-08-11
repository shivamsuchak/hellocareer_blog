export const getStaticPaths = async () => {
	const res = await fetch("http://hcdbapi.herokuapp.com/blog/all");
	const data = await res.json();

	const paths = data.map((doc) => {
		return {
			params: { id: doc.title },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch("http://hcdbapi.herokuapp.com/blog/get/" + id);

	const data = await res.json();

	return {
		props: {
			blog: data,
		},
	};
};

const BlogView = ({ blog }) => {
	return (
		<div>
			<div className="flex min-h-screen justify-center items-center mx-48">
				{blog.map((data) => (
					<div className="text-center text-xl border-8 border-indigo-900 rounded-3xl p-6">
						<h1 className="text-green-500 font-black m-3">
							Title: <span>{data.title}</span>
						</h1>
						<h1 className="text-red-500 font-black m-3">
							Description:{" "}
							<span className="font-medium">{data.desc}</span>
						</h1>
						<h1 className="text-yellow-600 font-black m-3">
							Auther:{" "}
							<span className="font-medium">{data.author}</span>
						</h1>
						<h1 className="text-blue-500 font-black m-3">
							Content:{" "}
							<span className="font-medium">{data.content}</span>
						</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogView;
