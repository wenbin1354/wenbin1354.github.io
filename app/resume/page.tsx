import Link from "next/link";
import { FileText } from "lucide-react";

export default function Resume() {
	return (
		<main className="min-h-screen p-4 md:p-24 bg-gray-900">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold mb-8 text-indigo-400">Resume</h1>
				<div className="space-y-8">
					<div>
						<h2 className="text-xl font-semibold mb-4 text-emerald-400">
							Work Experience
						</h2>
						<div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
							<h3 className="text-lg font-semibold text-white">
								Full Stack Developer
							</h3>
							<p className="text-indigo-300">ERBuddy Inc. | 2023 - 2024</p>
							<ul className="list-disc list-inside mt-4 text-gray-300">
								<li>
									Created wireframes using Figma, cutting development cycles for
									web and mobile apps
								</li>
								<li>
									Built a React Native mobile app for iOS and Android, boosting
									mobile engagement and ensuring HIPAA/GDPR compliance
								</li>
								<li>
									Designed a React and Azure-based web app, improving server
									response times by 40%.
								</li>
								<li>
									Implemented OAuth 2.0, reducing unauthorized access and
									strengthening user security.
								</li>
							</ul>
						</div>
					</div>
					<div>
						<h2 className="text-xl font-semibold mb-4 text-emerald-400">
							Education
						</h2>
						<div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
							<h3 className="text-lg font-semibold text-white">
								Bachelor of Science in Computer Science
							</h3>
							<p className="text-indigo-300">
								CUNY Hunter College | 20120 - 2024
							</p>
							<p className="mt-4 text-gray-300">
								Graduated with honors. Specialized in Software Engineering.
							</p>
						</div>
					</div>
				</div>
				<div className="mt-8">
					<a
						href="https://github.com/wenbin1354/wenbin1354.github.io/blob/main/app/assets/Normal_Resume_WenBin_%202024.pdf" // Path to the resume file
						download="WenBin_Resume.pdf" // Sets the filename for the downloaded file
						className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
					>
						<FileText className="mr-2 h-4 w-4" />
						Download Full Resume
					</a>
				</div>
				<div className="mt-12">
					<Link
						href="/"
						className="text-indigo-400 hover:text-indigo-300 transition duration-300 ease-in-out"
					>
						← Back to Home
					</Link>
				</div>
			</div>
		</main>
	);
}
