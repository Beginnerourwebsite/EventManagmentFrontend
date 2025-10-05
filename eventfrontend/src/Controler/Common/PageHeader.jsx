// PageHeader.js
import React from "react";
import { Link } from "react-router-dom";

export default function PageHeader({
	title = "Dashboard",
	breadcrumb = [],
	buttonText = "Create New",
	onButtonClick,
	buttonLink = null,
}) {

	//------use----
	// 	const breadcrumb = [
	//     { label: "T-Wind"},
	//     { label: "Dashboard", link: "/dashboard" },
	//     { label: "Analytics" },
	//   ];

	//   <PageHeader
	//         title="Dashboard"
	//         breadcrumb={breadcrumb}
	//         buttonText="Create New"
	//         buttonLink="/create-event"
	//       />
	return (
		<div className="container mx-auto px-2">
			<div className="flex flex-wrap">
				<div className="flex items-center py-4 w-full">
					<div className="w-full">
						<div className="flex flex-wrap justify-between">
							{/* Left side: Title + Breadcrumb */}
							<div>
								<h1 className="font-semibold text-xl mb-0 block dark:text-slate-100">
									{title}
								</h1>

								<ol className="list-reset flex text-sm">
									{breadcrumb.map((item, index) => (
										<li key={index} className="flex items-center">
											{item.link ? (
												<Link
													to={item.link}
													className="text-gray-500 hover:text-blue-600"
												>
													{item.label}
												</Link>
											) : (
												<span
													className={`${index === breadcrumb.length - 1
															? "text-blue-600 font-medium"
															: "text-gray-500"
														}`}
												>
													{item.label}
												</span>
											)}
											{index < breadcrumb.length - 1 && (
												<span className="text-gray-500 mx-2">/</span>
											)}
										</li>
									))}
								</ol>
							</div>

							{/* Right side: Action button */}
							{buttonText && (
								<div className="flex items-center">
									{buttonLink ? (
										<Link
											to={buttonLink}
											className="px-3 py-2 lg:px-4 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600"
										>
											{buttonText}
										</Link>
									) : (
										<button
											onClick={onButtonClick}
											className="px-3 py-2 lg:px-4 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600"
										>
											{buttonText}
										</button>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
