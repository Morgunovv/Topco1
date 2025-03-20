import * as React from "react";
import { DataCtxReader } from "@plasmicapp/strapi";

export function ProjectsList() {
    return (
        <DataCtxReader
            query={{
                collection: "projects",
                params: {
                    populate: '*' // Получаем все связанные данные
                }
            }}
            render={data => {
                console.log('Strapi data:', data); // Для отладки

                if (!data) {
                    return <div>Loading...</div>;
                }

                return (
                    <div style={{ padding: '20px' }}>
                        {data.data?.map((project: any) => (
                            <div key={project.id} style={{ marginBottom: '20px' }}>
                                <h2>{project.attributes.title}</h2>
                                <p>{project.attributes.description}</p>
                                {project.attributes.image?.data && (
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${project.attributes.image.data.attributes.url}`}
                                        alt={project.attributes.title}
                                        style={{ maxWidth: '300px' }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                );
            }}
        />
    );
} 