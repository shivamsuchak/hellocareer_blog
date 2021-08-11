import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export const getStaticProps = async () => {
	const res = await fetch("http://hcdbapi.herokuapp.com/blog/all");
	const data = await res.json();

	return {
		props: {
			content: data,
		},
	};
};

const CreatedIndex = ({ content }) => {
	return (
		<div>
			<div className="m-10">
				{content.map((data) => (
					<Link
						href={"/blogs/created/" + data.title}
						key={data.title}
					>
						<a>
							<div className="flex flex-row items-center w-1/2 justify-between border-4 border-green-500 rounded-2xl px-6 py-3 m-3">
								<div>
									<h3 className="text-xl text-blue-500">
										{data.title}
									</h3>
									<p className="text-sm text-yellow-600">
										{data.desc}
									</p>
								</div>
								<div>
									<AiOutlineArrowRight />
								</div>
							</div>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CreatedIndex;
