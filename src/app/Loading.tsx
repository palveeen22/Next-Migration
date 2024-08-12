import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loading from "../../public/icons/loading.json";

const Loading = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		isLoading && (
			<div className="p-4 min-h-screen flex justify-center items-center">
				<Lottie animationData={loading} loop={true} />
			</div>
		)
	);
};

export default Loading;
