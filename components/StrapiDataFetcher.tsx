import * as React from "react";

interface StrapiDataFetcherProps {
    collection: string;  // Название коллекции в Strapi
    children: (data: any) => React.ReactNode;
    filters?: Record<string, any>;
    sort?: string[];
    pagination?: {
        page: number;
        pageSize: number;
    };
}

export function StrapiDataFetcher({
    collection,
    children,
    filters,
    sort,
    pagination = { page: 1, pageSize: 25 }
}: StrapiDataFetcherProps) {
    const [data, setData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Построение query параметров
                const queryParams = new URLSearchParams();

                if (filters) {
                    queryParams.append('filters', JSON.stringify(filters));
                }

                if (sort) {
                    queryParams.append('sort', sort.join(','));
                }

                queryParams.append('pagination[page]', pagination.page.toString());
                queryParams.append('pagination[pageSize]', pagination.pageSize.toString());

                const response = await fetch(
                    `/api/${collection}?${queryParams.toString()}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch data');
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [collection, JSON.stringify(filters), JSON.stringify(sort), JSON.stringify(pagination)]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return children(data);
}

StrapiDataFetcher.displayName = 'StrapiDataFetcher'; 