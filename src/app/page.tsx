"use client";
import Loading from "./Loading";
import Modal from "@/components/modal";
import UserCard from "@/components/UserCard";
import useFetchUsers from "./function";

export default function Page() {
    const {
        handleSortByName,
        openModal,
        closeModal,
        loading,
        selectedUser,
        users,
        sortDirection
    } = useFetchUsers();

    return (
        <div className="px-8 py-4 min-h-screen">
            {loading ? (
                <Loading />
            ) : (
                <main>
                    <div className="flex justify-end gap-4 mb-4">
                        <button
                            onClick={handleSortByName}
                            className="border border-white text-white font-bold py-2 px-4 rounded-lg text-3xl"
                        >
                            {sortDirection === "asc" ? "⬆" : "⬇"}
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {users.map((user, index) => (
                            <UserCard
                                key={index}
                                user={user}
                                onCardClick={() => openModal(user)}
                            />
                        ))}
                    </div>
                    {selectedUser && (
                        <Modal
                            isOpen={selectedUser !== null}
                            onClose={closeModal}
                            user={selectedUser}
                        />
                    )}
                </main>
            )}
        </div>
    );
}
