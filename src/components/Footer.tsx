import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="py-4 border-t">
			<div className="container mx-auto text-center">
				<div className="mb-4">
					{/* change when use properly */}
					<Link
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2"
					>
						Twitter
					</Link>
					<Link
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2"
					>
						Facebook
					</Link>
					<Link
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2"
					>
						Instagram
					</Link>
				</div>
				<p>&copy; {new Date().getFullYear()} Sociollo. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
