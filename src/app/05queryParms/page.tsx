type PageProps = {
    searchParams: Promise<{
        page: string;
        limit: string;
    }>;
};

async function getUsers(page: string, limit: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}

export default async function Page({ searchParams }: PageProps) {
    const { page, limit } = await searchParams;

    const users = await getUsers(page, limit);

    return (
        <div>
            <p>Page: {page}</p>
            <p>Limit: {limit}</p>

            {users.map((user: any) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}