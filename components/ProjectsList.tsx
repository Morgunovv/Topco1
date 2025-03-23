import * as React from "react";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { DataProvider } from "@plasmicpkgs/plasmic-strapi";

interface Project {
    id: string | number;
    attributes: {
        title?: string;
        description?: string;
        // добавьте другие поля проекта
    };
}

export function ProjectsList() {
    return (
        <DataProvider
            name="projects"
            apiUrl={process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}
            path="/api/projects"
        >
            {(data: { data?: Project[] }) => (
                <div>
                    {data?.data?.map((project: Project) => (
                        <PlasmicComponent
                            key={project.id}
                            component="ProjectCard"
                            componentProps={{
                                title: project.attributes.title,
                                description: project.attributes.description,
                                // другие пропсы
                            }}
                        />
                    ))}
                </div>
            )}
        </DataProvider>
    );
}

ProjectsList.displayName = 'ProjectsList'; 