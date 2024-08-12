import axios, { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { IErrorResponse, IUsersResponse, TReturn, TUser } from "@/types/type";

export default function useFetchUsers(): TReturn {
	const [users, setUsers] = useState<TUser[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedUser, setSelectedUser] = useState<TUser | null>(null);
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

	useEffect(() => {
		const fetchUsers = async (): Promise<void> => {
			try {
				const response: AxiosResponse<IUsersResponse> = await axios.get(
					`${process.env.NEXT_PUBLIC_APP_URL}/api/users`
				);
				setUsers(response?.data?.data);
			} catch (error) {
				const axiosError = error as AxiosError<IErrorResponse>;
				if (axiosError.response) {
					setError(axiosError.response.data.error);
				} else {
					setError(axiosError.message);
				}
				console.error("Failed to fetch users:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	const handleSortByName = () => {
		const sortedUsers = [...users].sort((a, b) => {
			if (sortDirection === "asc") {
				return a.name.localeCompare(b.name);
			} else {
				return b.name.localeCompare(a.name);
			}
		});
		setUsers(sortedUsers);
		setSortDirection(sortDirection === "asc" ? "desc" : "asc");
	};

	const openModal = (user: TUser) => {
		setSelectedUser(user);
	};

	const closeModal = () => {
		setSelectedUser(null);
	};

	return {
		handleSortByName,
		openModal,
		closeModal,
		loading,
		selectedUser,
		users,
		sortDirection,
		error,
	};
}
