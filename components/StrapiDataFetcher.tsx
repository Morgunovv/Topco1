import * as React from "react";
import { DataCtxReader } from "@plasmicapp/strapi";

interface StrapiDataFetcherProps {
    collection: string;  // Название коллекции в Strapi
    filters?: Record<string, any>;
    sort?: string[];
    pagination?: {
        page: number;
        pageSize: number;
    };
    className?: string;
    children?: React.ReactNode;
    render?: (data: any) => React.ReactNode;
}

export function StrapiDataFetcher<T>({
    collection,
    filters,
    sort,
    pagination,
    className,
    children,
    render
}: StrapiDataFetcherProps & { render?: (data: StrapiResponse<T>) => React.ReactNode }) {
    return (
        <DataCtxReader
            query={{
                collection,
                params: {
                    populate: '*',
                    filters,
                    sort,
                    pagination,
                }
            }}
            render={data => {
                if (!data) {
                    return <div>Loading...</div>;
                }

                if (render) {
                    return render(data);
                }

                return (
                    <div className={className}>
                        {/* Пример отображения данных */}
                        {data.data?.map((item: any) => (
                            <div key={item.id}>
                                <h3>{item.attributes.title}</h3>
                                <p>{item.attributes.description}</p>
                            </div>
                        ))}
                        {children}
                    </div>
                );
            }}
        />
    );
} 