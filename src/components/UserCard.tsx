import TimeAgo from "@/libs/utils/TimeAgo";
import { TCardProps } from "@/types/type";
import Image from "next/image";

const UserCard = ({ user, onCardClick }: TCardProps) => {
	return (
		<div
			onClick={onCardClick}
			className="relative flex justify-start gap-4 bg-white p-4 shadow-md rounded-md cursor-pointer"
			style={{ backdropFilter: "blur(4px)" }}
		>
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
					priority
				/>
			</div>
			<div className="flex-grow flex-col">
				<h2 className="text-xl text-black">{user?.name}</h2>
				<h3 className="text-[#565656] text-lg">{user?.email}</h3>
				<div className="flex justify-end items-center">
					<span className="flex-col gap-2">
						<p className="text-[#ff6314]">💬 {user?.clubAnswers?.length}</p>
						<p className="text-[#807c7c] text-sm">{TimeAgo(user?.createdAt)}</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
