import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import ProfilePFP from "./assets/header-bg.jpg";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-24 pt-20">
			<div className="text-center">
				<div className="mb-8 relative w-32 h-32 mx-auto">
					<Image
						src={ProfilePFP}
						alt="WenBin"
						className="rounded-full border-4 border-yellow-500"
					/>
				</div>
				<h1 className="text-4xl font-bold mb-4">WenBin Lin</h1>
				<h2 className="text-2xl text-emerald-500 mb-8">Software Engineer</h2>
				<div className="flex justify-center space-x-4 mb-12">
					<a
						href="https://github.com/wenbin1354"
						target="_blank"
						rel="noopener noreferrer"
						className="text-indigo-500 hover:text-indigo-400"
					>
						<Github className="h-6 w-6" />
					</a>
					<a
						href="https://www.linkedin.com/in/wblin/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-indigo-500 hover:text-indigo-400"
					>
						<Linkedin className="h-6 w-6" />
					</a>
					{/* <a
						href="mailto:john@example.com"
						className="text-indigo-500 hover:text-indigo-400"
					>
						<Mail className="h-6 w-6" />
					</a> */}
				</div>
			</div>
		</main>
	);
}
