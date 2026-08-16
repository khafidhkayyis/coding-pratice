type User = {
    id: number;
    name: string;
    email: string;
    username: string;
};

async function getUsers(): Promise<User[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/99999');
        console.log('Response:', response);
        // i can look at the response object to see the data
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        console.log("ok:", response.ok);
        // i can look at the response.ok to see if the request was successful
        const data = await response.json();
        console.log("data:", data);
        // i can look at the data to see the data

        return data;
    } catch (error) {
        console.log("ERROR:", error);
    }
    return [];


}

export default async function UsersPage() {
    const users = await getUsers();
    return (
        <main>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                </div>
            ))}
        </main>
    )
}