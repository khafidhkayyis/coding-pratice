// type User = {
//     id: number;
//     name: string;
//     email: string;
//     username: string;
// };

// async function getUsers(): Promise<User[]> {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

//         if (!response.ok) {
//             throw new Error('Failed to fetch users');
//         }
//         return response.json()
//     } catch (error) {
//         console.log('Error:', error);
//         throw error;
//     }
//     return [];
// }

type UserDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function UserDetailPage({
    params,
}: UserDetailPageProps) {
    const { id } = await params;
    console.log('user id:', id);

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    console.log("url:", url);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    console.log("Status:", response.status);
    console.log("OK:", response.ok);

    const user = await response.json();

    return (
        <div>
            <h1>User ID: {id}</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}