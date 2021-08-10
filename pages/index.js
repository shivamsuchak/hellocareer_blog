import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();

	const getstart = () => {
		router.push("/blogs");
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="text-2xl">
				Welcome To The Blog Site of{" "}
				<span className="text-blue-500 font-black">HelloCareer</span>
			</div>
			<button
				onClick={() => getstart()}
				className="py-3 px-6 bg-green-500 text-white text-xl rounded-2xl m-8"
			>
				Let start
			</button>
		</div>
	);
}
