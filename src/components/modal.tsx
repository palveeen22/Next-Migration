import React, { useEffect } from "react";
import { TModalProps } from "@/types/type";
import Image from "next/image";

const Modal = ({ isOpen, onClose, user }: TModalProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	const modalClassName = isOpen
		? "fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-900 bg-opacity-50 backdrop-blur-sm px-5"
		: "hidden";

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div className={modalClassName} onClick={handleOverlayClick}>
			<div className="bg-white p-6 rounded-lg w-1/2">
				<div className="flex justify-start items-center gap-8">
					<div className="w-[80px] h-[80px] relative block">
						<Image
							src={
								user?.photoProfile ??
								"https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg"
							}
							alt={`${user?.name} profile`}
							fill
							sizes="(max-width: 768px) 100vw, 33vw"
							className="rounded-full object-cover w-full h-full"
							loading="lazy"
						/>
					</div>
					<div className="flex-col">
						<h2 className="text-xl text-black">{user?.name}</h2>
						<h3 className="text-[#565656] text-lg">{user?.email}</h3>
						<h3 className="text-[#565656] text-lg">{user?.emojis}</h3>
					</div>
				</div>
				{user?.clubAnswers?.length > 0 ? (
					<div className="flex-col justify-between items-center gap-4 px-4 m-4">
						<h3 className="font-mono text-center text-base text-black my-2">
							Club Discussion
						</h3>
						{user?.clubAnswers.map((discuss, index) => (
							<div key={index}>
								<div className="flex justify-start items-center">
									<h3 className="w-[50%] bg-[#92bddf] px-4 py-2 rounded-3xl">
										<p className="text-white text-lg font-mono">
											{discuss?.question}
										</p>
									</h3>
								</div>
								<div className="flex justify-end items-center">
									<span className="w-[50%] bg-[#ff6314] px-4 py-2 rounded-3xl">
										<p className="text-white text-lg font-mono">
											{discuss?.answer}
										</p>
									</span>
								</div>
							</div>
						))}
					</div>
				) : (
					<div>
						<h3 className="font-mono text-center text-base text-black my-2">
							There is no discussion yet....
						</h3>
					</div>
				)}
				{user?.answers?.length > 0 && (
					<div className="flex-col items-center gap-4 px-4 m-4">
						<h3 className="font-mono text-center text-base text-black my-2">
							Your Answer
						</h3>
						<div className="grid grid-cols-4 gap-4 border border-[#5296dd] rounded-lg p-4 decoration-wavy">
							{user?.answers.map((answer, index) => (
								<div key={index} className="flex items-center gap-2">
									<span
										className={`h-4 w-4 rounded-full ${
											index % 2 === 0 ? "bg-blue-500" : "bg-gray-400"
										}`}
									></span>
									<span
										className={`px-4 py-2 rounded-3xl ${
											index % 2 === 0
												? "bg-gray-400 text-black"
												: "bg-blue-500 text-white"
										}`}
									>
										<p className="text-lg font-mono">
											{answer?.selectedOption}
										</p>
									</span>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Modal;
