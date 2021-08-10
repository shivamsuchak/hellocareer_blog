import React from "react";

export const getStaticPaths = async () => {
	const res = await fetch("http://hcdbapi.herokuapp.com/s2/all");
	const data = await res.json();

	const paths = data.map((doc) => {
		return {
			params: { id: doc.title.trim() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch("http://hcdbapi.herokuapp.com/s2/get/" + id);

	const data = await res.json();

	return {
		props: { blog: data },
	};
};

const DocumentView = ({ blog }) => {
	return (
		<div>
			<div className="flex min-h-screen justify-center items-center mx-48">
				{blog.map((data) => (
					<div className="text-center text-xl border-8 border-indigo-900 rounded-3xl p-6">
						<h1 className="text-green-500 font-black m-3">
							Title: <span>{data.title}</span>
						</h1>
						<h1 className="text-red-500 font-black m-3">
							Responsibility:{" "}
							<span className="font-medium">{data.resp}</span>
						</h1>
						<h1 className="text-yellow-600 font-black m-3">
							Qualification:{" "}
							<span className="font-medium">{data.qual}</span>
						</h1>
						<h1 className="text-blue-500 font-black m-3">
							Salary:{" "}
							<span className="font-medium">{data.sal}</span>
						</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default DocumentView;
