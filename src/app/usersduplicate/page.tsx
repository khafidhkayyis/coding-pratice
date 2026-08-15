type User = {
    id: number;
    name: string;
    email: string;
    username: string;
};

async function getUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('Response:', response);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
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