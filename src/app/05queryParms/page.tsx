type PageProps = {
    searchParams: Promise<{
        page: string;
        limit: string;
    }>;
};

export default async function Page({ searchParams }: PageProps) {
    const { page, limit } = await searchParams;
    return (
        <div>
            <p>Page: {page}</p>
            <p>limit: {limit}</p>
        </div>
    )
}