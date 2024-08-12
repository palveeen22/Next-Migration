import { Document } from "mongoose";
import { NextResponse } from "next/server";
import { ReactNode } from "react";

export type TGetRoute =
	| NextResponse<{
			data: (Document<unknown, {}, TUser> &
				TUser &
				Required<{
					_id: string;
				}>)[];
	  }>
	| NextResponse<{
			error: unknown;
	  }>;

export type TReturn = {
	handleSortByName: () => void;
	openModal: (user: TUser) => void;
	closeModal: () => void;
	loading: boolean;
	selectedUser: TUser | null;
	users: TUser[];
	sortDirection: "desc" | "asc";
	error: string | null;
};

export interface IUsersResponse {
	data: TUser[];
}

export interface IErrorResponse {
	error: string;
}

export type TUser = {
	_id: string;
	name: string;
	photoProfile: string;
	email: string;
	emojis: string;
	createdAt: string;
	answers: IAnswer[];
	clubAnswers: IAnswerClub[];
};

export type TModalProps = {
	isOpen: boolean;
	onClose: () => void;
	user: TUser;
};

export interface TCardProps {
	user: TUser;
	onCardClick: () => void;
}

interface IAnswerClub {
	answer: string | ReactNode;
	question: string | ReactNode;
	_id: string;
}

interface IAnswer {
	answeredAt: string;
	club: string;
	question: string;
	selectedOption: string;
}
