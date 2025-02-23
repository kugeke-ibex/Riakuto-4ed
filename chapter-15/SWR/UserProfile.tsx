import { FC, Suspense } from "react";
import React from "react";
import useSWR from "swr";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

// 高階関数
const skinArgs = <T,>(fn: (arg: number | string, ...reset: any[]) => Promise<T>) =>
    (args: Array<number | string>, ...reset: any[]): Promise<T> =>
        fn(args[0], ...reset);

const getUser = async (userId: number | string): Promise<User> =>
    (
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    ).json();

const UserProfile: FC<{ userId: number }> = ({ userId }) => {
    const { data: user } = useSWR<User>(
        `users/${userId}`,
        () => getUser(userId),
        { suspense: true }
    );

    const getUserWithSkinArgs = skinArgs(getUser);

    const { data: userWithSkinArgs } = useSWR<User>(
        `users/${userId}`,
        () => getUserWithSkinArgs([userId]),
        { suspense: true }
    );

    if (!user) return null;

    return (
        <div className="APP">
            <Suspense fallback={<h2>Loading...</h2>}>
                <h2>{user.name}</h2>
                <p>User ID: {user.id}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </Suspense>
            <Suspense fallback={<h2>Loading...</h2>}>
                <h2>{userWithSkinArgs.name}</h2>
                <p>User ID: {userWithSkinArgs.id}</p>
                <p>Email: {userWithSkinArgs.email}</p>
                <p>Phone: {userWithSkinArgs.phone}</p>
            </Suspense>
        </div>
    );
};

export default UserProfile;
