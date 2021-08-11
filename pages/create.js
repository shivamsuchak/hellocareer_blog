import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";

const CreateBlogPost = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = async () => {
		await axios
			.post("https://hcdbapi.herokuapp.com/blog/add", {
				title: title.trim(),
				desc: desc.trim(),
				author: author.trim(),
				content: content.trim(),
			})
			.then(() => alert("Added data"))
			.catch(() => alert("Done"));
	};

	return (
		<div>
			<Head>
				<title>Create BlogPost</title>
			</Head>
			<div className="text-center">
				<div className="m-6 text-center">
					<h1 className="text-3xl">Create a new blog</h1>
				</div>

				<div className="m-10">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
					>
						<label>Title: </label>
						<input
							className="m-6 ml-20 w-1/2 p-2 py-1 bg-transparent border-b-2 border-green-500 focus:outline-none"
							type="text"
							name="title"
							placeholder="BlogPost Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
						<br />
						<label>Description: </label>
						<input
							className="m-6 mt-0 w-1/2 p-2 py-1 bg-transparent border-b-2 border-green-500 focus:outline-none"
							type="text"
							name="desc"
							placeholder="Blog Description"
							value={desc}
							onChange={(e) => setDesc(e.target.value)}
							required
						/>
						<br />
						<label>Blog Author: </label>
						<input
							className="m-6 mt-0 w-1/2 p-2 py-1 bg-transparent border-b-2 border-green-500 focus:outline-none"
							type="text"
							name="desc"
							placeholder="Who created this blogpost"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							required
						/>
						<br />
						<label>Content</label>
						<br />
						<textarea
							className="border-2 w-1/2 mt-4 py-2 px-4 border-green-500 rounded-2xl focus:outline-none"
							type="text"
							name="content"
							placeholder="The long content for the blog"
							cols="100"
							rows="20"
							value={content}
							onChange={(e) => setContent(e.target.value)}
							required
						/>
						<br />
						<div>
							<button className="m-8 ml-0 bg-blue-500 py-2 px-6 text-xl text-white rounded-2xl">
								Publish Blog
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateBlogPost;
