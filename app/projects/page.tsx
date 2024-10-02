import Link from "next/link";
import { Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import BookShare from "../assets/bookshare.jpg";
import Forum from "../assets/forum.png";
import Portfolio from "../assets/portfolio.png";

const ProjectCard = ({
	title,
	description,
	image,
	github,
}: {
	title: string;
	description: string;
	image: StaticImageData;
	github?: string;
}) => {
	// Construct the image path
	// const imagePath = `${image}`;

	return (
		<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
			<Image
				src={image}
				alt={title}
				width={300}
				height={200}
				className="w-full h-48 object-cover"
			/>
			<div className="p-6">
				<h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
				<p className="text-gray-300 mb-4">{description}</p>
				{github && (
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition duration-300 ease-in-out"
					>
						<Github className="mr-2 h-4 w-4" />
						View on GitHub
					</a>
				)}
			</div>
		</div>
	);
};

export default function Projects() {
	return (
		<main className="min-h-screen p-4 md:p-24 pt-20 bg-gray-900">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-3xl font-bold mb-8 text-indigo-400">Projects</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<ProjectCard
						title="Hunter Elective Forum"
						description="A full-stack forum application that allows students to discuss and share elective courses."
						image={Forum}
						github="https://github.com/wenbin1354/school-forum"
					/>
					<ProjectCard
						title="BookShare"
						description="A full-stack CRUD application that allows users to share books with each other. Users can create an account, search for books, and request to borrow books from other users."
						image={BookShare}
						github="https://github.com/kenko1290/Team-Artem---BookShare"
					/>
					<ProjectCard
						title="Portfolio Website"
						description="A responsive portfolio website built with Next.js and Tailwind CSS. Showcases projects, skills, and professional experience."
						image={Portfolio}
						github="https://github.com/wenbin1354/wenbin1354.github.io"
					/>
				</div>

				{/* View More Projects Button */}
				<div className="mt-8 flex justify-center">
					<Link
						href="https://wenbin1354.github.io/Projects-Page/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
					>
						View More Projects
					</Link>
				</div>
			</div>
		</main>
	);
}
