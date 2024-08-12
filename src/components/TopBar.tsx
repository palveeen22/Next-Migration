import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
	return (
		<header className="shadow-md border-b">
			<nav className="flex items-center px-8 pt-4 pb-2 justify-between">
				<Link href="/" passHref>
					<div className="flex items-center">
						<Image
							src="https://images.seeklogo.com/logo-png/52/2/dribbble-logo-png_seeklogo-521569.png"
							alt="Sociolla Social media Logo"
							width={40}
							height={40}
							className="bg-white"
						/>
						<h3 className="ml-2 text-xl font-mono">Sociollo.</h3>
					</div>
				</Link>
			</nav>
		</header>
	);
};

export default TopBar;
